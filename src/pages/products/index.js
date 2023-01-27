import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../redux/features/products/productsSlice";
import style from "./products.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Products({ productsList, id }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {productsList
        .filter((item) => item.category === id)
        .slice(0, 6)
        .map((product) => {
          return (
            <Link
              to={`/products/${product.id}`}
              className="text-decoration-none"
              key={product.id}
            >
              <div className={style.card}>
                <Card>
                  <Card.Img
                    className={style.img}
                    variant="top"
                    src={product.image}
                    alt="sofa"
                  />
                  <Card.Body>
                    <Card.Text>{product.name}</Card.Text>
                    <Card.Text>
                      {digitsEnToFa(
                        product.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, "،")
                      )}{" "}
                      تومان
                    </Card.Text>
                    <Button variant="outline-primary" size="sm">
                      توضیحات بیشتر...
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Link>
          );
        })}
    </>
  );
}

export default Products;
