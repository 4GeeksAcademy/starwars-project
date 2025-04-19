import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Starship = (props) => {

    const { store, dispatch } = useGlobalReducer()

    const handleFavs = () => {
        dispatch({ type: "toggle_favorites", payload: props.name })
    }
    return (
        <div className="text-center mt-5 mx-2">
            <div className="card" style={{ minWidth: "18rem" }}>
                <img src="https://i0.wp.com/gatecrashers.fan/wp-content/uploads/2021/07/gc-header-1-1.jpg?fit=1200%2C675&ssl=1" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-name">{props.name}</h5>
                    <p className="card-text">"Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur."</p>
                    <div className="d-flex">
                        <Link to={`/starships/${props.uid}`} className="btn btn-primary">Learn more</Link>
                        <span className="toggle mt-2 m-2" onClick={() => handleFavs()}><i class="fa-regular fa-heart fa-2xl" style={{ color: "#ef0658" }}></i></span>
                    </div>
                </div>
            </div>
        </div>
    );
}; 