import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";
import { Card } from "../components/Card.jsx";
import { Planet } from "../components/Planet.jsx";


export const Home = () => {
	const [characters, setCharacters] = useState();
	const [planets, setplanets] = useState();
	const { store, dispatch, getCharacters, getPlanets} = useGlobalReducer()

	useEffect(() => {
		if(store.characters.length == 0) {
			getCharacters();
		}
	}, [])

	useEffect(() => {
		if(store.planets.length == 0) {
			getPlanets();
		}
	}, [])

	useEffect(() => {
		setCharacters(store.characters)
	}, [store.characters])

	useEffect(() => {
		setplanets(store.planets)
	}, [store.planets])

	return (
		<div className="text-center mt-3 justify-content-center">
			<h1 className="text-light justify-content-center">CHARACTERS</h1>
			<div className="scroller mt-4 d-flex col-10 overflow-auto mx-auto">
				{characters?.map((character,index)=>{
					return<Card key={character.uid} name={character.name} uid={character.uid}  />
				})}
				
			</div>
			<h1 className="text-light justify-content-center mt-5">Planets</h1>
			<div className="scroller d-flex col-10 overflow-auto mx-auto">
				{planets?.map((planet,index)=>{
					return<Planet key={planet.uid} name={planet.name} uid={planet.uid}  />
				})}
				
			</div>
		</div>
	);
}; 