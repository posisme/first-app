function SkillsCards(props){
    
        let cards = props.peopleVal.skills.map((j,i)=>{return <SkillsCard skill={j} index={i}/>;})
        return cards;
    }
    
    
    


function SkillsCard(props){
    console.log("P",props)
    return (
        <div className="skillscard" id={"skills-"+props.index}>
            <h3 className="skillscard__title">{props.skill.title}</h3>
            <p className="skillscard__description">{props.skill.description}</p>
            <img className="skillscard__picture" src={props.skill.photo} />
        </div>
    )
}
export default SkillsCards;

