import { useState } from "react";
import { Link } from "react-router-dom";

function RecipeCard(props) {
    const [showMore, setShowMore] = useState(false);
    
    return (
        <div className="card">
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description">{showMore ? props.description : props.description.slice(0, 50) + "..."}</p>
            <button
                onClick={() => setShowMore(!showMore)}
                className="card__button card__button--toggle"
            >
                {showMore ? "Read Less" : "Read More"}
            </button>
            <Link to={props.link} className="card__link">View Recipe</Link>
        </div>
    );
}

export default RecipeCard;