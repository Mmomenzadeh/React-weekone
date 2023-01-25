import "../assets/styles/form.css";
import { useState } from "react";

const Form = ({ addProduct }) => {
  const [title, setTitle] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    addProduct(title);
    setTitle("");
  };
  return (
    <div>
      <form className="add-product-form" onSubmit={submitForm}>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="form-btn">Add</button>
      </form>
    </div>
  );
};

export default Form;
