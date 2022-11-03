import {useState} from "react";


function HogsTile ({name, image}){

    const displayInfo =()=> {
        
    }

    return(
       <div className="ui eight wide column">
        <img onClick= {displayInfo} src={image}></img>
        <p>Name: {name}</p>
        <p>Speciality: </p>
        <p>Weight: </p>
        <p>Greased: </p>
        <p> Highest Medal Achieved: </p>
       </div>
    )
}

export default HogsTile;