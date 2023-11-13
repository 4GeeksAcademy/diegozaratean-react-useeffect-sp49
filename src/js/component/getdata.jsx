import React, { useState, useEffect } from "react";

const Getdata = () => {

    const [personajes, setPersonajes] = useState([])

    function getPersonajes(){
        console.log('getPersonajes')
        // fetch != GET. react == js
        // fetch  GET, POST, PUT, DELETE
        fetch('https://rickandmortyapi.com/api/character')
        .then( (response)=> response.json())
        .then( (data)=> setPersonajes(data.results))
    }

    useEffect( ()=>{
        console.log('se cargo el componenete')
        getPersonajes()
    },[])
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">Rick y Morty Characters !</h1>			
            { personajes.map( (item)=> <p key={item.id} >{item.name} <img src={item.image} alt="" /></p>  ) }
		</div>
	);
};

export default Getdata;
