import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const CharacterDetails = () => {
    const { uid } = useParams()
    const [character, setCharacter] = useState({})
    const { store, dispatch } = useGlobalReducer()

    useEffect(() => {
        getEachCharacter() // here the function is being invoked
    }, [])

    const getEachCharacter = async () => {
        let response = await fetch("https://www.swapi.tech/api/people/" + uid)
        let data = await response.json()
        setCharacter(data.result.properties);
        
    }
    
    return (
        <div className="text-center mt-3 text-light ">
           {/* if character has properties, it will show them */}
          { character && character.name &&(
            <>
            <h1>Name:</h1>
            <h3>{character.name}</h3>
            <h1>gender:</h1>
            <h3>{character.gender}</h3>
            <h1>haircolor:</h1>
            <h3>{character.hair_color}</h3>
            <h1>Birthyear:</h1>
            <h3>{character.birth_year}</h3>
            </>
          )}
        </div>
    );
};