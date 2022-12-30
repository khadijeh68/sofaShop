import { useEffect } from "react";
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
          <div key={category.id}>
            <Link to={`/categories/${category.id}`} className={style.category}>{category.name}</Link>
          </div>
        );
      })}
    </>
  );
}

export default Categories;
