import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../store/product-slice";
import { Axios } from "../../http/axios";

import ProductItem from "./ProductItem";

import classes from "./Products.module.css";

const Products = (props) => {
  const products = useSelector((state) => state.product.products);

  const dispatch = useDispatch();

  //* useEffect
  useEffect(() => {
    //* getProducts
    const getProducts = async () => {
      const { data: products } = await Axios.get("/product.json");

      if (products) {
        const productList = [];

        for (const key in products) {
          productList.push({
            id: key,
            price: products[key].price,
            title: products[key].title,
            description: products[key].description,
          });
        }

        dispatch(productActions.setProducts(productList));
      }
    };

    //* Execute
    getProducts();
  }, [dispatch]);

  //* return
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.length > 0 &&
          products.map((product) => (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          ))}
      </ul>
    </section>
  );
};

export default Products;
