import data from '../../datas/logements.json';
import Slider from '../Slider';
import InfoTab from '../InfoTab/Index';

function DetailedAccomodation({id}) {
    const accomodationChosen = data.find((accomodation) => accomodation.id === `${id}`)

    const equipmentsList = accomodationChosen.equipments.map((equipment) => (
        <ul>
        <li>{equipment}</li>
        </ul>
    ))

    console.log(accomodationChosen)
    return (
        <div className='mainContainer'>
            <Slider pictures={accomodationChosen.pictures} title={accomodationChosen.title} id={id} />
            <h2>{accomodationChosen.title}</h2>
            <p>{accomodationChosen.location}</p>
            <InfoTab title="Description" info={accomodationChosen.description}/>
            <InfoTab title="Équipements" info={equipmentsList}/>
        </div>
    )
}

export default DetailedAccomodation