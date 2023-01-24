import "../assets/styles/productsList.css";
import Product from "./Product";



const ProductsList = ({initialList , onDelete}) => {
  return (
    <div className="list-container">
      {initialList.map((item) => {
        return <Product key={item.id}  product={item} onDelete={onDelete} />
      })}
    </div>
  );
};

export default ProductsList;
