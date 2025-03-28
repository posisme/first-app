import Recipes from "./components/Recipe/Recipes";
import RecipeDetail from "./components/Recipe/RecipeDetail";
import "./sass/styles.scss";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// const hobbyData = [
//   { name: "Skiing", description: "Skiing is a winter sport where individuals glide over snow using skis attached to their feet, often on groomed slopes or natural terrain.", materials: ["Skis and bindings", "Ski boots", "Ski poles"]},
//   { name: "Bowling", description: "Bowling is a sport in which players roll a heavy ball down a lane to knock down a set of pins, aiming for the highest score.", materials: ["Bowling ball", "Bowling shoes", "Bowling lane and pins"]},
//   { name: "Belegarth", description: "Belegarth is a full-contact medieval combat sport where participants engage in battles using foam-padded weapons and wear period-inspired armor.", materials: ["Foam-padded weapons", "Safety-approved armor", "Tunic or period-style"]},
//   { name: "Chess", description: "Chess is a strategic board game where two players compete to checkmate the opponent's king using a set of 16 pieces with unique movement rules.", materials: ["Chessboard", "Chess pieces", "Chess clock"]}
// ]

function App() {
    return (
        <Router>
            <nav className="navbar">
                <Link to="/classdemo.html" className="navbar__link navbar__link--home">Home</Link>
            </nav>
            <Routes>
                <Route path="/classdemo.html" element={<Recipes />} />
                <Route path="/recipe/:id" element={<RecipeDetail />} />
            </Routes>
        </Router>
    );
}

export default App
