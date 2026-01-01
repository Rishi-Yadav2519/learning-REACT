import React from "react";


/*
function Card(props) {
  // We get the props object by default in the function component as parameter and access it's values using dot notation such as props.title (which we have used in app.jsx file).
  console.log("Props: ", props);
  
    // We have created a card component to make it reusable same from the app.jsx file
  return (
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
      <img
        src="https://picsum.photos/301"
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">Lorem</h2>
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            tempora ipsum soluta amet corporis accusantium aliquid consectetur
            eaque!
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
        >
          Read more
        </button>
      </div>
    </div>
  );
}
*/


function Card({ title = "Default Title" }) {
    // Now we know about a way to use acess props in our component but it is very basic for react to understand so they give us a better way to directly declare the key in parameter itself and it will access the value of that key from props object internally.
    // This is called destructuring in JavaScript.
    // But as we are referring JS in parameter so we have to use {} curly braces to indicate that we are using JS expression in JSX.
    // We can give a default value to the title prop in case no title is passed while using the component by using = equal sign and then the default value after that. 
  return (
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100">
      <img
        src="https://picsum.photos/301"
        alt=""
        className="object-cover object-center w-full rounded-t-md h-30 bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
          {/* <h2 className="text-xl font-semibold tracking-wide">{title || "No Title"}</h2> */}
          {/* Using the title prop inside the component.*/}
          {/* We can also give a default title in case no title is passed like this also but it is not the best method */}
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            tempora ipsum soluta amet corporis accusantium aliquid consectetur
            eaque!
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
        >
          Read more
        </button>
      </div>
    </div>
  );
}

// Now we can see that the card component which we used in app.jsx file is showing the title we have passed as prop to it.
// We can create multiple cards with different titles by just using the component again and again with different title props.
// We can also pass other props such as content, image url etc. to make it more dynamic.

// We can see in the two cards used in app.jsx file that the first card doesn't have any title prop passed to it so it is showing nothing as title.

export default Card;