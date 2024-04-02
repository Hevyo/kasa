import data from '../../datas/logements.json'
import AccomodationItem from '../AccodomationItem';
import { Link } from 'react-router-dom';
import './index.css'

function AccomodationCards() {
    return (
        <div className='accomodationContainer'>
            <ul className='accomodationContainer__list'>
                {data.map(({id, title, cover}) =>
                    <Link to={`/accomodation/${id}`}>
                        <AccomodationItem key={id} title={title} cover={cover}/>
                    </Link>
                )}
			</ul>
        </div>
    )
}

export default AccomodationCards;