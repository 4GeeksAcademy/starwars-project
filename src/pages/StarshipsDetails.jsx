import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const StarshipsDetails = () => {
    const { uid } = useParams()
    const [starship, setstarship] = useState({})
    const { store, dispatch } = useGlobalReducer()

    useEffect(() => {
        getEachstarship() // here the function is being invoked
    }, [])

    const getEachstarship = async () => {
        let response = await fetch("https://www.swapi.tech/api/starships/" + uid)
        let data = await response.json()
        setstarship(data.result.properties);
        
    }
    
    return (
        <div className="text-center mt-3 text-light ">
           {/* if starship has properties, it will show them */}
          { starship && starship.name &&(
            <>
            <h1>Name:</h1>
            <h3>{starship.name}</h3>
            <h1>Consumables:</h1>
            <h3>{starship.consumables}</h3>
            <h1>Passengers:</h1>
            <h3>{starship.passengers}</h3>
            <h1>Length:</h1>
            <h3>{starship.length}</h3>
            </>
          )}
        </div>
    );
};