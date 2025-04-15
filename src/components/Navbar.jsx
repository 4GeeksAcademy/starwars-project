import useGlobalReducer from "../hooks/useGlobalReducer"; 
import { Link } from "react-router-dom";
import storeReducer from "../store";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()
	return (
		<nav className="navbar navbar-light bg-dark">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src="https://img.icons8.com/?size=100&id=21576&format=png&color=000000" /></span>
				</Link>
				<div className="dropdown">
					<button className="btn btn-light dropdown-toggle btn-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorite
					</button>
					<ul className="dropdown-menu ">
						{store.favorites.length > 0 ? store.favorites.map((favorite, index) => (
							<li className="text-primary">{favorite}</li>
						))
							: <li>
								Add a favorite
							</li>}
					</ul>
				</div>
			</div>
		</nav>
	);
};