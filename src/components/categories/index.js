import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Products from "../../pages/products";
import { fetchCategories } from "../../redux/features/categories/categoriesSlice";
import { fetchProducts } from "../../redux/features/products/productsSlice";
import style from "./category.module.css";

function Categories() {
  const dispatch = useDispatch();
  const categoriesList = useSelector(
    (state) => state.categories.categoriesList
  );
  const productsList = useSelector((state) => state.products.productsList);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      {categoriesList.map((category) => {
        return (
          <div>
            <Card
              key={category.id}
              style={{ width: "8rem" , textAlign:"center",backgroundColor:"#fec89a"}}
              className={style.card}
            >
              <Card.Header className={style.header}>
                <Link
                  to={`/categories/${category.id}`}
                  className={style.category}
                >
                  {category.name}
                </Link>
              </Card.Header>
            </Card>
            <Products productsList={productsList} id={category.id} />
          </div>
        );
      })}
    </>
  );
}

export default Categories;
