import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Products from "../../pages/products";
import { fetchCategories } from "../../redux/features/categories/categoriesSlice";
import {
  fetchProducts,
  getProducts,
} from "../../redux/features/products/productsSlice";
import style from "./category.module.css";
import Sidbar from "./Sidbar";

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
            {/* <Sidbar/> */}
            <Products productsList={productsList} id={category.id} />
          </div>
        );
      })}
    </>
  );
}

export default Categories;
