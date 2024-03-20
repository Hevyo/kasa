import data from '../../datas/logements.json'
import AccomodationItem from '../AccodomationItem';
import './index.css'

function AccomodationCards() {
    return (
        <div className='accomodationContainer'>
            <ul className='accomodationContainer__list'>
                {data.map(({id, title, cover}) =>
                    <AccomodationItem key={id} title={title} cover={cover}/>
                )}
			</ul>
        </div>
    )
}

export default AccomodationCards;