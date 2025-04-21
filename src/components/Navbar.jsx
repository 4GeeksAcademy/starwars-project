import  useGlobalReducer  from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
import storeReducer from "../store";

export const Navbar = () => {
    const { store, dispatch } = useGlobalReducer();

    const handleRemoveFavorite = (name) => {
        dispatch({ type: "toggle_favorites", payload: name });
    };
    return (
        <nav className="navbar navbar-light bg-dark">
            <div className="container">
                <Link to="/">
                    <span className="navbar-brand mb-0 h1">
                        <img src="https://img.icons8.com/?size=100&id=21576&format=png&color=000000" />
                    </span>
                </Link>
                <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle btn-lg" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorites
                    </button>
                    <ul className="dropdown-menu">
                        {store.favorites.length > 0 ? store.favorites.map((favorite, index) => (
                            <li className="text-primary d-flex justify-content-between align-items-center px-2" key={index}>
                                {favorite}
                                <button
                                    className="btn btn-sm btn-light ms-2 mt-1"
                                    onClick={() => handleRemoveFavorite(favorite)}
                                >
                                   <i class="fa-solid fa-trash"></i> 
                                </button>
                            </li>
                        )) : (
                            <li className="px-2">Add a favorite</li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};