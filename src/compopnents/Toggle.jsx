import React ,{useState} from "react"


const Toggle = () => {
    const [currentState , setState] = useState({isToggleOn : true})

    const handelClick=()=>{
        setState(prevState => ({isToggleOn : !prevState.isToggleOn}))
    }

  return <div>

    <button onClick={handelClick}>{currentState.isToggleOn ? "on" : "off"}</button>
  </div>;
};

export default Toggle;
