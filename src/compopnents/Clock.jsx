import ReactDOM from "react-dom/client";

const app = ReactDOM.createRoot(document.getElementById("app"));

const Clock = (props) => {
  return (
    <div>
      <h2>it is : {props.date.toLocaleTimeString()}</h2>
    </div>
  );
};

const tick = () => {
  app.render(<Clock date={new Date()} />);
};

setInterval(tick, 1000);

// export default Clock 
