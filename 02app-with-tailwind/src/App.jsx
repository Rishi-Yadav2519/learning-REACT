import React from "react";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  return (
    <>
      <h2 className="bg-blue-950 text-white p-2 rounded-2xl w-70 text-2xl mb-4 border-2 font-bold">
        React with tailwind
      </h2>
      {/* We can add the tailwind CSS in out react file as well which gives us more control over styling. Tailwind gives us some pre-made elements and we can also consider devui.io for some pre-made UI elements to ease our work*/}
      
      <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
        <img
          src="https://picsum.photos/301"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-60 bg-gray-500"
        />
        <div className="flex flex-col justify-between p-3 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">Lorem</h2>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio tempora ipsum soluta amet corporis accusantium aliquid
              consectetur eaque!
            </p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-2 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
            Read more
          </button>
        </div>

        <Card />
      </div>

      {/* We have added a card from devui.io in out app but what if have to use it multiple times?
      That would be a problem. So we will create a component of the card and use it as per need. */}
      {/* We can see that we have maded the card in a new file and we used that card in our app without writing the same code again and again. That card is called a component.*/}

      {/* But we can see that our card contains the same values for all the cards which maybe we want to change in each card. Maybe from the database or any other source. So we can use props for this kind of work. Props is nothing else but just the parameters passed to the component as we are passing parameters to a function in JavaScript. */}

      {/* Default props of an component or function is just empty object. We can simply give the value to our props while using the component in key value pair using = equal sign to assign a value to a key. */}
      <Card title="Card Added From Component"/>

      {/* We can pass object and array as props to the component by storing them in variables and then passing them to the component through {} curly braces as curly braces are indicator for JSX that we are going to use JavaScript expressions inside the JSX. */}
    </>
  );
}

export default App;
