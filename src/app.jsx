import "./assets/styles/app.css";
import { useState } from "react";
import Counter from "./compopnents/counter";
import Form from "./compopnents/Form";
import ProductsList from "./compopnents/ProductsList";
// import Clock from "./compopnents/Clock";
import Toggle from "./compopnents/Toggle";
import Parent from "./compopnents/Parent";

const App = () => {
  const [currentState, setState] = useState([
    {
      id: 1,
      title: "book1",
      price: 50,
    },
    {
      id: 2,
      title: "book2",
      price: 70,
    },
    {
      id: 3,
      title: "book3",
      price: 100,
    },
  ]);

  const addProduct = (title) => {
    const id = Math.floor(Math.random() * 1000);
    const newProduct = {
      id,
      ...title,
    };

    setState([...currentState , newProduct])
  };

  const onDelete = (id) => {
    const deleted = currentState.filter((product) => product.id !== id);
    setState(deleted);
    // setState(currentState.filter(product => product.id !== id))
  };

  return (
    <div className="container">
      <Toggle />
      <br />
      <br />
      <hr />
      {/* <Clock /> */}
      <Counter InitialCount={0} />
      <br />
      <br />
      <hr />
      <Form addProduct={addProduct} />
      <ProductsList initialList={currentState} onDelete={onDelete} />
      <br />
      <br />
      <hr />
      <Parent />
    </div>
  );
};

export default App;
