import React from "react";
import Form from "./Form";

var isRegistered = true;

function App() {
  return (
    <div className="container">
      {isRegistered ? (
        <Form isRegistered={isRegistered} />
      ) : (
        <Form isRegistered={isRegistered} />
      )}
    </div>
  );
}

export default App;
