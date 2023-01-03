import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchCategories } from "../../redux/features/categories/categoriesSlice";
import { getProducts } from "../../redux/features/products/productsSlice";
import style from "./category.module.css";
import Sidbar from "./Sidbar";

function Categories() {
  const dispatch = useDispatch();
  const categoriesList = useSelector(
    (state) => state.categories.categoriesList
  );
 
  const [categoryName, setCategory] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    dispatch(fetchCategories());
    // dispatch(getProducts(categoryId))
    //   .unwrap()
    //   .then((res) => setCategory(res));
  }, [dispatch]);
 
  return (
    <>
      {categoriesList.map((category) => {
        return (
          <div>
            <div>
              <Card
                key={category.id}
                style={{ width: "18rem" }}
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
            </div>
            <Sidbar/>
            {/* <div>
              {categoryName.map((item) => {
                return (
                  <Link
                    to={`/products/${item.id}`}
                    className="text-decoration-none"
                    key={item.id}
                  >
                    <div>
                      <Card>
                        <Card.Img style={{ width: "100px" }} variant="top" />
                        <Card.Body>
                          <Card.Text style={{ textAlign: "center" }}>
                            {item.name}
                          </Card.Text>
                          <Card.Text style={{ textAlign: "center" }}>
                            {digitsEnToFa(
                              item.price
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
            </div> */}
          </div>
        );
      })}
    </>
  );
}

export default Categories;
