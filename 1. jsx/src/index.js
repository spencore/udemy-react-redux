//import the react and reactDOM libraries
import React from "react";
import ReactDOM from "react-dom";

//create a react component
const App = () => {
  const buttonText = { text: "click me" };
  const style = { backgroundColor: "dodgerBlue", color: "white" };

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter Name:
      </label>
      <input id="name" type="text" />
      <button style={style}>{buttonText.text}</button>
    </div>
  );
};

// Take the react component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
