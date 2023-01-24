import "../assets/styles/productsList.css";
import Product from "./Product";



const ProductsList = ({initialList}) => {
  return (
    <div className="list-container">
      {initialList.map((item) => {
        return <Product key={item.id}  title={item.title} price={item.price} />
      })}
    </div>
  );
};

export default ProductsList;
