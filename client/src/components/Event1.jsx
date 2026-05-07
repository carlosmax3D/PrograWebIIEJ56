'use client';
const Counter = () => {
 const handleClick = (event) => {
    console.log(event)
   alert('You clicked me!');
 };
 return (
   <div className="p-10 flex items-center">
     <button onClick={handleClick}
       className="bg-green-400 px-4 py-2 rounded mx-auto">Click me
     </button>
   </div>
 );
};

export default Counter;