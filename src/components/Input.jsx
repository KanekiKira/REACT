import { useState } from "react";

const Input = () => {
    const [firstText,setText] = useState('');
    return (
        <>
        <h2>
        {firstText}
        </h2>
        <input type="text" onChange={(e)=>{setText(e.target.value)}}/>
        </>
    )
}

export default Input;