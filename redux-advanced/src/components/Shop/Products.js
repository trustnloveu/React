import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 12.33,
    title: "Book",
    description: "Textbook",
  },
  {
    id: "p2",
    price: 3200.99,
    title: "MacBook",
    description: "M1 MacBook Pro",
  },
  {
    id: "p3",
    price: 1000.0,
    title: "Iphone",
    description: "Iphone Mini",
  },
  {
    id: "p4",
    price: 280.45,
    title: "Ipod",
    description: "Ipod Pro 2",
  },
  {
    id: "p5",
    price: 680.78,
    title: "GalaxyTap",
    description: "S7",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.length > 0 &&
          DUMMY_PRODUCTS.map((product) => (
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
