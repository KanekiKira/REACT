import { useState } from "react";


const Counter = () => {
    const [counter,setCounter] = useState(0);
    function increment() {
        setCounter(counter + 1);
    }
    function decrement(){
        setCounter(counter - 1);
    }
    return <div className="container" style={{display:"flex",justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        <h2 style={{color:'blue'}}>{counter}</h2>
        <button style={{color:'green',width:'60px',height:'30px',fontSize:'20px'}} onClick={increment}>+</button>
        <button style={{color:'red',width:'60px',height:'30px',fontSize:'20px',margin:'20px'}} onClick={decrement}>-</button>
    </div>
}


export default Counter;