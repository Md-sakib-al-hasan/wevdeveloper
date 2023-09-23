import { useState } from "react"

export default function Counter(){
    const [count,setCount]  = useState(0);
    const handleClick7= () =>{
          const newCount = count+1;
          setCount(newCount);
    }
    const handleClick8= () =>{
          const newCount = count-1;
          setCount(newCount);
    }
    return (
        <div style={{border: '2px solid yellow'}}>
            <h3>counter: {count} </h3>
            <button onClick={handleClick7}>Add</button>
            <button onClick={handleClick8}>Reduces</button>
        </div>
    )
}