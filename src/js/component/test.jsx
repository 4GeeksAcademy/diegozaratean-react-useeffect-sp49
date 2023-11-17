import React from "react";

const Test = () => {
    function traertareas(){
        console.log('traertareas')
        fetch('https://playground.4geeks.com/apis/fake/todos/user/morty')
        .then( (response)=> response.json() )
        .then( (data)=> console.log(data) )

    }

    function creartareas(){
        console.log('creartareas')

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([])
        };
        fetch('https://playground.4geeks.com/apis/fake/todos/user/morty1',requestOptions)
        .then( (response)=> response.json() )
        .then( (data)=> console.log(data) )

    }

    

	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Test!</h1>		
            <button onClick={traertareas}>traer tareas</button>	
            <button onClick={creartareas}> Crear usuario</button>	
		</div>
	);
};

export default Test;
