import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  //* return
  return (
    <section>
      <h1>The Product Detail Page</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
