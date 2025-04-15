import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const PlanetDetails = () => {
    const { uid } = useParams()
    const [planet, setplanet] = useState({})
    const { store, dispatch } = useGlobalReducer()

    useEffect(() => {
        getEachplanet() // here the function is being invoked
    }, [])

    const getEachplanet = async () => {
        let response = await fetch("https://www.swapi.tech/api/planets/" + uid)
        let data = await response.json()
        setplanet(data.result.properties);
        
    }
    
    return (
        <div className="text-center mt-3 text-light ">
           {/* if planet has properties, it will show them */}
          { planet && planet.name &&(
            <>
            <h1>Name:</h1>
            <h3>{planet.name}</h3>
            <h1>Diameter:</h1>
            <h3>{planet.diameter}</h3>
            <h1>Population:</h1>
            <h3>{planet.population}</h3>
            <h1>Gravity:</h1>
            <h3>{planet.gravity}</h3>
            </>
          )}
        </div>
    );
};