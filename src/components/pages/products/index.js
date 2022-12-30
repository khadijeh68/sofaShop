import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/features/products/productsSlice";

function Products() {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.products.productsList);
  console.log(productsList);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      {productsList.map((product) => {
        return <div key={product.id}>{product.name}</div>;
      })}
    </>
  );
}

export default Products;
