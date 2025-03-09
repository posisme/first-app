import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faArrowUp, faCropSimple } from '@fortawesome/free-solid-svg-icons';
import peopleVals from "../../assets/people.json";

function BioCards(){
    let cards = [];
    peopleVals.forEach((peopleVal,i)=>{
        cards.push(<BioCard index={i} peopleVal={peopleVal} />)
    })
    return cards;
}


function BioCard(props) {
    
    const [collapse, setCollapse]  = useState('collapsed');
    
    let peopleVal = props.peopleVal;
    let biopieces = peopleVal.bio.match(/^(([^\s]*)\s){20}/);
    let bioshort;
    let showexpand = true;
    console.log(biopieces)
    
    if(!biopieces){
        bioshort = peopleVal.bio;
        showexpand = false;
        console.log("hey")
    }
    else{
        bioshort = biopieces[0];
    }
    const [biotext, setBiotext] = useState(bioshort);
    if(!peopleVal.picture){
        peopleVal.picture = "placeholder-picture.svg"
    }

    const handleShowmore = () => {
        if(collapse == 'collapsed'){
            setCollapse(null);
            setBiotext(peopleVal.bio);
        } else {
            setCollapse('collapsed');
            setBiotext(bioshort);
        }
        
    }
    let id = "biocard-"+props.index;
    return (
        <div className="biocard" id={id} >
            <h2 className='biocard__name'>{peopleVal.name}</h2>
            <img className='biocard__picture' src={peopleVal.picture} alt={peopleVal.name} />
            <p className='biocard__bio'>{ biotext }
                
                { showexpand ? <span className={'biocard__showmore '+ collapse} onClick={handleShowmore}>{ collapse ? <FontAwesomeIcon icon={faArrowDown} /> : <FontAwesomeIcon icon={faArrowUp} />}</span> : ""}
            </p>
            <h3 className='biocard__skillshead'>Skills</h3>
            <ul className='biocard__skills'>
                {peopleVal.skills.map((skill,index) =>(
                    <li className='biocard__skill'>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default BioCards;