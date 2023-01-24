import "../assets/styles/product.css";

const Product = ({ title, price }) => {
  return (
    <div className="product-card">
      <h1>{title}</h1>
      <h2>${price}</h2>
    </div>
  );
};

export default Product;
