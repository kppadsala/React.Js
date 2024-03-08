import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'


// ==================Task-1=========25/12/2023========
const root = ReactDOM.createRoot(document.getElementById("root"));
let countryArr=["India","USA","Russia","China","Taiwan","Pakistan","Shri Lanka","Bangladesh","UAE"]
root.render(
  countryArr.map((e) => {
    return (<div>
      <h2>My Country Name Is {e}</h2><hr />
    </div>)
  })
)
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
