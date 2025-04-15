import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
export const Card = (props) => {

    const { store, dispatch } = useGlobalReducer()

    const handleFavs = () => {
        dispatch({ type: "toggle_favorites", payload: props.name })
    }
    return (
        <div className="text-center mt-5 mx-2">
            <div className="card" style={{ minWidth: "15rem" }}>
                <img src="https://png.pngtree.com/png-vector/20230729/ourmid/pngtree-chewbacca-clipart-cartoon-chewbacca-from-star-wars-character-vector-eps-png-image_6793964.png" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-name">{props.name}</h5>
                    <p className="card-text">"Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur."</p>
                    <div className="d-flex p-2">
                        <Link to={`/characters/${props.uid}`} className="btn btn-primary">Learn more</Link>
                        <span className="toggle mt-2 m-1" onClick={() => handleFavs()}><i class="fa-regular fa-heart fa-2xl" style={{ color: "#ef0658" }}></i></span>
                    </div>
                </div>
            </div>
        </div>
    );
}; 