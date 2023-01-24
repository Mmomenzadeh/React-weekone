import "./assets/styles/app.css";
import { useState } from "react";
import Counter from "./compopnents/counter";
import Form from "./compopnents/Form";
import ProductsList from "./compopnents/ProductsList";
// import Clock from "./compopnents/Clock";
import Toggle from "./compopnents/Toggle";

const App = () => {

  const [currentState , setState] = useState( [
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
  ])


  return (
    <div>
      <Toggle />
      {/* <Clock /> */}
      <Counter InitialCount={0} />
      <Form />
      <ProductsList  initialList={currentState}/>
    </div>
  );
};

export default App;
