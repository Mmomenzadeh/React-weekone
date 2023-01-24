import "../assets/styles/form.css";
import { useState } from "react";

const Form = ({addProduct}) => {
  const [currentTitle, setTitle] = useState("");
  const submitForm = (e)=>{
    e.preventDefault()
    addProduct({currentTitle})
    setTitle('')
  }
  return (
    <div>
      <form className="add-product-form" onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Add product"
          className="form-control"
          value={currentTitle}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit" className="form-btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
