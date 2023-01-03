import { digitsEnToFa } from "@persian-tools/persian-tools";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../../redux/features/products/productsSlice";
import style from "./products.module.css";

function Products() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.productsList);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {productsList.map((product) => {
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
                  src={`/assets/images/categories/rahati/${product.image}`}
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
        )
      })}
    </>
  );
}

export default Products;
