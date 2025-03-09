import "./Card.css"
import { useState } from "react";

function randVal() {
    let values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let rand = Math.floor(Math.random() * values.length);
    return values[rand];
}

function randSuit() {
    let suits = ["S", "C", "H", "D"];
    let rand = Math.floor(Math.random() * suits.length);
    return suits[rand];
}



function Card(props) {
    
    const [val, setVal] = useState(randVal())
    const [suit, setSuit] = useState(randSuit())
    var cn = " ";
    if (props.card) {
       setVal("Jo");
       setSuit("Jo");
    }
    if (suit == "S" || suit == "C") {
        cn = "black";
    } else if(suit == "D" || suit == "H"){
        cn = "red";
    } else {
        setSuit("blue");
    }

    const handleClick = () => {
        setVal(randVal()); // Update value on click
        setSuit(randSuit()); // Update suit on click
    }

    return (
        <div className={cn} onClick={handleClick}>
            <h1>{val}</h1>
            <h1>{suit}</h1>
        </div>
    )
}

export default Card;