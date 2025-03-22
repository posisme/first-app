function HobbyCard(props){

    let materials = [];
    for(let i =0;i<props.materials.length;i++){
        materials.push(<li key={i}>{props.materials[i]}</li>)
    }

    return (
        <div className="hobby">
            <h3 className="hobby__card">{props.name}</h3>
            <p className="hobby__text">{props.description}</p>
            <ul>
                {materials}
            </ul>
        </div>
    )
}
export default HobbyCard;