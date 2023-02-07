import React, { useState } from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { getDetails } from "../../../redux/features/productDetails/ProductDetailsSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    dispatch(getDetails(id))
      .unwrap()
      .then((res) => setProduct(res));
  }, [dispatch, id]);

  return (
    <div>
      <div>
        <h5>{product.name}</h5>
        <p>{`رنگ: ${product.color}`}</p>
        <p>{`قیمت: ${product.price}`} تومان</p>
        <div className="d-flex flex-direction-row align-items-center">
          <div>تعداد: </div>
          <Button>+</Button>

          <Button>-</Button>
        </div>

        <Button variant="primary">افزودن به سبد خرید</Button>
      </div>
    </div>
  );
};

export default ProductDetails;
