import {useState} from 'react';
export default function  ControlledComponent()  {
    const  [inputValue, setInputValue] =  useState('');
    const  handleChange = (event) => {
        setInputValue(event.target.value);
    };
return  (
<form>
    <label>Input Value:
    <input  onKeyDown={(e)=>{}} type="text" value={inputValue} onChange={handleChange} />
    </label>
    <p>Input Value: {inputValue}</p>
</form>
)};