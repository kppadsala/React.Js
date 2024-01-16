// import React, { Component } from 'react'

// export default class Counter extends Component {
    //     constructor() {
        //         super();
        //         this.state = {
//             count:0
//         }
//     }
//   render() {
//     return (
//         <div className='text-black'>
//             <h1>Counter is {this.state.count }</h1>
//             <Button className='bg-primary border-0' onClick={()=>this.setState({count:this.state.count+1})}>INC COUNTER</Button>
//       </div>
//     )
//   }
// }
import React, { useState } from 'react'
import { Button } from 'reactstrap'

export default function Counter() {
    let [count, setcount] = useState(0)
    const inccount=() => {
        console.log('--inccount--', inccount);
        setcount(count+1)
    }
    return (
        <div className='text-black'>
            <h1>counter is {count}</h1>
            <Button className='bg-dark' onClick={inccount}>Inc Count</Button>
        </div>
  )
}

