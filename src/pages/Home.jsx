import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";
import { Card } from "../components/Card.jsx";
import { Planet } from "../components/Planet.jsx";
import { Starship } from "../components/Starship.jsx";


export const Home = () => {
	const [characters, setCharacters] = useState();
	const [planets, setplanets] = useState();
	const [starships, setStarships] = useState();
	const { store, dispatch, getCharacters, getPlanets, getStarships} = useGlobalReducer()

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
		if(store.starships.length == 0) {
			getStarships();
		}
	}, [])

	useEffect(() => {
		setCharacters(store.characters)
	}, [store.characters])

	useEffect(() => {
		setplanets(store.planets)
	}, [store.planets])

	useEffect(() => {
		setStarships(store.starships)
	}, [store.starships])

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
			<h1 className="text-light justify-content-center mt-5">Starships</h1>
			<div className="scroller d-flex col-10 overflow-auto mx-auto">
				{starships?.map((starship,index)=>{
					return<Starship key={starship.uid} name={starship.name} uid={starship.uid}  />
				})}
				
			</div>
		</div>
	);
}; 