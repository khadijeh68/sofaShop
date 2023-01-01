import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { Button, Card } from "react-bootstrap";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { getProducts } from "../../redux/features/products/productsSlice";
import { fetchCategories } from "../../redux/features/categories/categoriesSlice";


const Sidbar = () => {
  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categories.categoryList);
  const [category, setCategory] = useState([]);
  const { categoryId } = useParams();
  

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(getProducts(categoryId))
      .unwrap()
      .then((res) => setCategory(res));
  }, [dispatch, categoryId]);

  return (
    <div>
      <div>
        {categoryList.map((item) => {
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
        {category.map((item) => {
          return (
            <Link
              to={`/products/${item.id}`}
              className="text-decoration-none"
              key={item.id}
            >
              <div>
                <Card>
                  <Card.Img
                    style={{ width: "100px" }}
                    variant="top"
               
                    alt="mobile"
                  />
                  <Card.Body>
                    <Card.Text style={{textAlign: "center"}}>{item.name}</Card.Text>
                    <Card.Text style={{textAlign: "center"}}>
                      {digitsEnToFa(
                        item.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, "،")
                      )} تومان 
                    </Card.Text>
                    <Button variant="outline-primary" size="sm">توضیحات بیشتر...  </Button>
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
