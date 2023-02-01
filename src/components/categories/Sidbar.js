import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import style from "./sidbar.module.css";
import { Button, Card } from "react-bootstrap";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { getProducts } from "../../redux/features/products/productsSlice";
import { fetchCategories } from "../../redux/features/categories/categoriesSlice";

const Sidbar = () => {
  const dispatch = useDispatch();
  const categoriesList = useSelector(
    (state) => state.categories.categoriesList
  );

  const [category, setCategory] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(getProducts(categoryId))
      .unwrap()
      .then((res) => setCategory(res));
  }, [dispatch, categoryId]);

  return (
    <div className={style.container}>
      <div className={style.sidbar}>
        {categoriesList.map((item) => {
          return (
            <div key={item.id}>
              <Link
                to={`/categories/${item.id}`}
                key={item.id}
                className="text-decoration-none mt-5"
              >
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
       <div>
        {category.map((product) => {
          return (
            <Link
              to={`/products/${product.id}`}
              className="text-decoration-none"
              key={product.id}
            >
              <div className={style.card}>
                <Card>
                  <Card.Img
                    style={{ width: "100px" }}
                    variant="top"
                    src={product.image}
                  />
                  <Card.Body>
                    <Card.Text style={{ textAlign: "center" }}>
                      {product.name}
                    </Card.Text>
                    <Card.Text style={{ textAlign: "center" }}>
                      {digitsEnToFa(
                        product.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, "،")
                      )}{" "}
                      تومان
                    </Card.Text>
                    <Button variant="outline-primary" size="sm">
                      توضیحات بیشتر...{" "}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Link>
          );
        })}
      </div> 
    </div>
  );
};
export default Sidbar;
