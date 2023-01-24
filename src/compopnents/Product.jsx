import "../assets/styles/product.css";

const Product = ({ product,onDelete }) => {
  return (
    <div className="product-card">
      <h1>{product.title}</h1>
      <h2>${product.price}</h2>
      <button className="btn-delete" onClick={()=>onDelete(product.id)} >Delete</button>
    </div>
  );
};

export default Product;
