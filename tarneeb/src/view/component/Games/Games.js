import React from "react";
import "./Games.css";
import tarneeb from "../../img/tarneeb.png";
import { useHistory } from "react-router-dom";

const Games = () => {
    const history = useHistory()
    const handleClick = () => {
        history.push("/tarneeb")
        window.location.reload()
    }
    return (
        <div className="Games__page">
            <h1>Games </h1>
            <div className="categories">
                <ul className="categories__tarneeb" onClick={handleClick}>
                    <h2>Tarneeb</h2>
                    <img src={tarneeb} alt="tarneeb" />
                </ul>

            </div>
        </div>

    );
};
export default Games;
