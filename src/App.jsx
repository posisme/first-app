import "./sass/styles.scss";
import HobbyGallery from "./components/HobbyCard/HobbyGallery";

const hobbyData = [
    {
        name:"Skiing",
        description: "Skiing is a winter sport where individuals glide over snow using skis attached to their feet, often on groomed slopes or natural terrain.",
        materials:["Skis and bindings","ski boots","ski poles"]
    },
    {
        name:"Bowling",
        description:"Bowling is a sport in Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, nesciunt!",
        materials:["Bowling ball","Bowling shoes","Bowling lane and pins"]
    },
    {
        name:"Belegarth",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto sequi aliquam corporis, similique asperiores rerum sint officia facilis libero non.",
        materials:["weapons","shield","armor"]
    },
    {
        name:"Chess",
        description:"Chess is a strategic board game where two players compete to checkmate the opponent's king using a set of 16 pieces with unique movement rules.",
        materials: ["Chessboard", "Chess pieces", "Chess clock"]
    }
]

function App() {
    return(
        <HobbyGallery hobbies={hobbyData}/>
    )
    
}

export default App
