import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
// import './index.css'

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <div>
//     <h1>Hello World</h1>
//     <p>My Name Is Krunal</p>
//   </div>
// )

let newArray = ["krunal", "parth", "nirmal", "divyesh", "sona", "dhaval"];
// root.render(
//   newArray.map((e) => {
//     return (
//       <div>
//         <h1>{e}</h1><hr />
//       </div>)
//   })
// )

// =====================TASK-1====================
let array = newArray.map((e, i) => {
  return (
    <div>
      <h1>
        {i + 1} {e}
      </h1>
      <hr />
    </div>
  );
});

root.render(array);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
