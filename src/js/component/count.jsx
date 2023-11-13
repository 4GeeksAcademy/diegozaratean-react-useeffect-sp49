import React, { useState, useEffect} from "react";

const Count = () => {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(20)

    function sumar(){
        console.log('sumar')
        setCount(count + 1)
    }

    function restar(){
        console.log('restar')
        setCount2(count2 - 1)
    }

    //useEffect( funcion de callback,lo que yo quieero observar)
    useEffect( ()=>{
        console.log('Count cambio')
    },[count])

    useEffect( ()=>{
        console.log('Count2 cambio')
    },[count2])

    useEffect( ()=>{
        console.log('Cambio el componente Count')
    },[])


	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Count!</h1>
            <button onClick={sumar}>Sumar</button>
            <p> el valor de Count es: {count} </p>
            <button onClick={restar}>Restar</button>
            <p> el valor de Count2 es: {count2} </p>
            
		</div>
	);
};

export default Count;
