import "./assets/styles/app.css";
import Counter from "./compopnents/counter";
import Form from "./compopnents/Form";
// import Clock from "./compopnents/Clock";
import Toggle from "./compopnents/Toggle";

const App = () => {
  return (
    <div>
      <Toggle />
      {/* <Clock /> */}
      <Counter InitialCount={0} />
      <Form />
    </div>
  );
};

export default App;
