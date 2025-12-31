import "./App.css";
import { useState } from "react";
// We have to import useState from react to use the state management feature of react. As we knoe that we have to import each feature separately in react.

/*
function App() {
  // Variable to hold the counter value
  let value = 0;


  // Function to increase the counter value
  const add = () => {
    value = value + 1;
    console.log(value);
  }

  // Function to decrease the counter value
  const sub = () => {
    value = value - 1;
    console.log(value);
  }
  
  return (
    <>
      <h1>Simple Counter App</h1>
      <h3>Counter Value : {value}</h3>
      <button onClick={add}>Increase Value</button>
      <button onClick={sub}>Decrease Value</button>
    </>
    // We have written the core JavaScript there but the value is not updating on the screen because React does not track changes to regular variables. To make the UI update when the value changes, we need to use React's hooks.
    // If we have multiple value variable and to update them separately then it will be difficult to manage all those variables as we have to create separate DOM elements and event handlers for each variable.
    // Here the React hooks comes into play which allows us to manage multiple state variables efficiently.
    // We have multiple hooks like useState, useEffect, useContext etc.
  )
}
*/

function App() {
  // useState is a hook that propogate the value changes to the UI whenever the value is updated.
  const [value, setValue] = useState(0);
  // Here we have to pass a array which contains two elements. The first element is the variable name whatever we want and the second element is a function which is used to update the value of the first element. We genrally use the set prefix with the variable name to name the function.
  // The useState(0) means that the initial value of the variable is 0. As we give in JavaScript value = 0; but here we have to pass the initial value as an argument to the useState function which is going to store in value variable.
  // We can give the variable any name but it is a convention to use the name which describes the purpose of the variable. And also we can giev any typeof initial value like string, boolean, array, object etc. in useState.

  const add = () => {
    // value = value + 1;


    // We can update the value of the variable like this and user the updated value in the setValue function to update the value in the UI or if we want we can directly pass the updated value in the setValue function as setValue(value + 1);
    
    // It's not going to work as we declared the variable using const keyword. So we cannot reassign the value to the variable directly.
    
    setValue(value + 1);
    // Now it can work as we are using the setValue function to update the value of the variable and not reassigning the const value directly.
  };

  // Function to decrease the counter value
  const sub = () => {
    // value = value - 1;

    setValue(value - 1);

    // Same goes for this function also.
  };

  return (
    <>
      <h1>Simple Counter App</h1>
      <h3>Counter Value : {value}</h3>
      {/* Buttons to increase and decrease the counter value */}
      <button onClick={add}>Increase Value</button>
      <button onClick={sub}>Decrease Value</button>
    </>
    // Now we know that we use the useState hook to manage the state of the variable and update the UI whenever the value changes without even manipulating the DOM directly. Even if we want we can use that variable in multiple places in the UI and it will update all the places whenever the value changes.
  );
}

export default App;