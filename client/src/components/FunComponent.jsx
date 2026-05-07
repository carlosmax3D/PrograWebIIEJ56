import { useState, useEffect } from "react";
import Menu from './Menu'
import { useAuth } from "../Authentication/AuthContext";

function FunChild(props){
    const [dots, setDots] = useState("")
    var interval = null
    useEffect(()=>{
        console.dir("He sido cargado")
        interval = setInterval(() => {
            console.dir(dots);
            setDots(dots+".")
        }, 500);
        return ()=>{
            console.dir("No me quiero ir, Sr Stark.")
            clearInterval(interval)
        }
    },[dots])
    return <h1>Loading{dots.split("")
        .map((value)=>{return "."})}</h1>
}

function FunComponent(props){
    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);
    const incrementaCount = () => setCount(count+1)
      const {user, login} = useAuth();
    useEffect(()=>{
        console.log("Montado");
        setTimeout(()=>{setData('Hola papu');
      login({"user": "carlos"})

        },4000);
    },[])
    return <>
    <Menu></Menu>
        <p>Hola, {props.name}</p>
        <p>Este es un contador {count}</p>
        <button onClick={incrementaCount}>Incrementa</button>
        {data ? data : <FunChild/>}
    </>
}

export default FunComponent;