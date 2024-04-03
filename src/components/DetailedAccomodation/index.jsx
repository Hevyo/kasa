import data from '../../datas/logements.json';
import Slider from '../Slider';
import InfoTab from '../InfoTab/Index';
import AccomodationTag from '../AccomodationTag';
import './index.css'

function DetailedAccomodation({id}) {
    const accomodationChosen = data.find((accomodation) => accomodation.id === `${id}`)

    const equipmentsList = 
        <ul className='infoTab__boxInfo--info'>
            {accomodationChosen.equipments.map((equipment, index) => (
                <li key={`${equipment}-${index}`}>{equipment}</li>
                )
            )}
        </ul>

    const range = [1, 2, 3, 4 , 5]
   
    return (
        <div className='mainContainer'>
            <Slider pictures={accomodationChosen.pictures} title={accomodationChosen.title} id={id} />
            <h2>{accomodationChosen.title}</h2>
            <p>{accomodationChosen.location}</p>
            <p>{accomodationChosen.host.name}</p>
            <img src={accomodationChosen.host.picture} alt={accomodationChosen.host.name}/>
            {accomodationChosen.tags.map((tag, index) => (
                <AccomodationTag tagTitle={tag} key={`${tag}-${index}`} />
                )
            )}
            {range.map((rangeElem) =>
				accomodationChosen.rating >= rangeElem ? (
					<i className="fa-solid fa-star starRed" key={rangeElem.toString()} />
				) : <i className="fa-solid fa-star starGrey" key={rangeElem.toString()} />
			)}
            <div className='infoTabs__container'>
            <InfoTab title="Description" info={(<p className='infoTab__boxInfo--info'>{accomodationChosen.description}</p>)}/>
            <InfoTab title="Équipements" info={equipmentsList}/>
            </div>
        </div>
    )
}

export default DetailedAccomodation