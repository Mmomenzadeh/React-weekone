import "./assets/styles/app.css";
import Counter from "./compopnents/counter";
// import Clock from "./compopnents/Clock";
import Toggle from "./compopnents/Toggle";

const App = () => {
 
  return (
    <div>
      <Toggle />
    {/* <Clock /> */}
    <Counter  />
    </div>
  );
};

export default App;
