import "./CardBox.css"
import Card from "./Card/Card";

function CardBox(props) {
    let cards = [];
    for (let i = 0; i < props.count; i++) {
        if(props.card == "joker"){
            cards.push(<Card key={i} card={props.card}/>);
        }
        else{
            cards.push(<Card key={i}/>)
        }
        
    }

    return (
        <div className="CardBox-div">
            {cards}
        </div>
    );
}

export default CardBox;