import React from "react";
import Input from "./Input";
function NonRegisteredForm() {
  return (
    <div>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default NonRegisteredForm;
