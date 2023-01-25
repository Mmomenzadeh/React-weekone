import "../assets/styles/productsList.css";
import Product from "./Product";

const ProductsList = ({ currentState, onDelete }) => {
  return (
    <div className="list-container">
      {currentState.map((item) => {
        return <Product key={item.id} product={item} onDelete={onDelete} />;
      })}
    </div>
  );
};

export default ProductsList;
