import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../redux/features/categories/categoriesSlice";
import style from "./category.module.css"

function Categories() {
  const dispatch = useDispatch();
  const categoriesList = useSelector(
    (state) => state.categories.categoriesList
  );


  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <>
      {categoriesList.map((category) => {
        return (
          <Card key={category.id} style={{ width: '18rem' }} className={style.card}>
            <Card.Header className={style.header}>
            <Link to={`/categories/${category.id}`} className={style.category}>{category.name}</Link>
            </Card.Header>
          </Card>
        );
      })}
    </>
  );
}

export default Categories;
