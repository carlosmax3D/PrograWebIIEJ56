'use client';
import { useState } from 'react';
const Counter = (props) => {
 const [count, setCount] = useState(0);
 return (
   <div className="flex items-center justify-center space-x-8 p-10">
     <button onClick={
        (event) => {
            console.log(event);
            setCount(count - 1)
        }}
   className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded">
       Decrement {props.usuario}
     </button>
     <p className="text-4xl font-semibold text-gray-800">{count}</p>
     <button onClick={() => setCount(count + 1)}
className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded">Increment </button>
   </div>
 );
};
export default Counter;