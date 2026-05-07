'use client';
import { useState } from 'react';
function CheckLogin(props) {
 const [isLoggedIn, setLoggedIn] = useState(false);
 const toggleLogin = () => {
    if (props.usuario == '')
        props.funcion('Carlos')
    else props.funcion('')
   setLoggedIn(!isLoggedIn);
 };
 const handleLogin = () => {
   if (isLoggedIn) console.log('User is logged in');
   else console.log('User is logged out');
 };
 return (
   <div>
     <h2 className="text-3xl text-center mb-4">
       {isLoggedIn ? 'User is logged in' : 'User is not logged in'}
     </h2>
     <button onClick={handleLogin}
       className="bg-green-400 hover:bg-green-500 px-2 py-3 rounded mr-3">
       Check Login
     </button>
     <button onClick={toggleLogin}
       className="bg-green-400 hover:bg-green-500 px-2 py-3 rounded">
       {isLoggedIn ? 'Log Out' : 'Log In'}
     </button>
   </div>
 );
}
export default CheckLogin;