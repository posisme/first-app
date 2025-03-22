import HobbyCard from "./HobbyCard";

function HobbyGallery(props) {
    return (
        <div className="hobby-gallery">
            {props.hobbies.map((prop,index)=>(
                <div key={index}>
                    <HobbyCard name={prop.name} description={prop.description} materials={prop.materials} />
                </div>
            ))}
        </div>
    )
}

export default HobbyGallery;