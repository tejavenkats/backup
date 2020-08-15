import React from "react";
import Input from "./Input";
function Form(props) {
  return (
    <div>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {props.isRegistered && (
          <Input type="password" placeholder="Confirm Password" />
        )}

        <button type="submit">
          {props.isRegistered ? "Register" : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Form;
