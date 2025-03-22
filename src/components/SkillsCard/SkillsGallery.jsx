import SkillsCards from "./SkillsCard";
import peopleVals from "../../assets/people.json";

function SkillsGallery(){
    let cards = [];
    peopleVals.forEach((peopleVal,i)=>{
        cards.push(<SkillsCards index={i} peopleVal={peopleVal} />)
    })
    return cards;
}

export default SkillsGallery;