import { useState } from "react";
import Child from "./child";
import "../assets/styles/parent.css"
const Parent = () => {
  const [currentState, setState] = useState(0);

  return (
    <div className="parent-container">
      
      <p>{currentState}</p>
      <p><Child setState={setState} /></p>
    </div>
  );
};

export default Parent;
