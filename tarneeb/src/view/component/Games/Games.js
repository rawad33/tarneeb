import React from "react";
import "./Games.css";
import tarneeb from "../../img/tarneeb.png";

const Games = () => {
    return (
        <div className="Games__page">
            <h1>Games </h1>
            <div className="categories">
                <div className="categories__tarneeb">
                    <h2>Tarneeb</h2>
                    <img src={tarneeb} alt="tarneeb" />
                </div>

            </div>
        </div>

    );
};
export default Games;
