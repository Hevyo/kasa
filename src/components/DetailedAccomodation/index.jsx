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
            <div className='mainContainer__detailedAccomodationContainer'>
                <div className='mainInfos'>
                    <h2 className='mainInfos__title'>{accomodationChosen.title}</h2>
                    <p className='mainInfos__location'>{accomodationChosen.location}</p>
                    <div className='mainInfos__tags'>
                        {accomodationChosen.tags.map((tag, index) => (
                            <AccomodationTag tagTitle={tag} key={`${tag}-${index}`} />
                            )
                        )}
                    </div>
                </div>
                <div className='hostInfos'>
                    <div className='hostInfos__hostIntroduction'>
                        <p className='hostInfos__hostIntroduction--hostName'>{accomodationChosen.host.name}</p>
                        <img className='hostInfos__hostIntroduction--hostPicture'src={accomodationChosen.host.picture} alt={accomodationChosen.host.name}/>
                    </div>
                    <div className='hostInfos__hostRate'>
                        {range.map((rangeElem) =>
                            accomodationChosen.rating >= rangeElem ? (
                                <i className="fa-solid fa-star hostInfos__hostRate--redStar" key={rangeElem.toString()} />
                            ) : <i className="fa-solid fa-star hostInfos__hostRate--greyStar" key={rangeElem.toString()} />
                        )}
                    </div>
                </div>
            </div>
            <div className='mainContainer__detailedAccomodationinfoTabs'>
                <InfoTab title="Description" info={(<p className='infoTab__boxInfo--info'>{accomodationChosen.description}</p>)}/>
                <InfoTab title="Équipements" info={equipmentsList}/>
            </div>
        </div>
    )
}

export default DetailedAccomodation