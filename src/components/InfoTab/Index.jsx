import { useState } from 'react'
import './index.css'
import arrow from '../../assets/arrow_back.png'

// function InfoTab({title, info}) {
//     const [isOpen, setIsOpen] = useState(false)

//     return isOpen ? (
//         <div className='infoTab'>
//             <button className='infoTab__button' onClick={() => setIsOpen(false)}>
//                 <h2 className='infoTab__button--title'>{title}</h2>
//                 <img className='infoTab__button--arrow' src={arrow} alt="flèche pour ouvrir et fermer l'onglet"></img>
//             </button>
//             <div className='infoTab__boxInfo'>
//                 <p className={isOpen ? 'infoTab__boxInfo--info' : 'infoTab__boxInfo--hideInfo'}>{info}</p> 
//             </div>
//         </div>
//     ) : (
//     <div className='infoTab'>
//         <button className='infoTab__button' onClick={() => setIsOpen(true)}>
//             <h2 className='infoTab__button--title'>{title}</h2>
//             <img className='infoTab__button--arrowDown' src={arrow} alt="flèche pour ouvrir et fermer l'onglet"></img>
//         </button>
//     </div>
//     )
// }

function InfoTab({title, info}) {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    

    return (
        <div className='infoTab'>
            <button className='infoTab__button' onClick={toggle}>
                <h2 className='infoTab__button__title'>{title}</h2>
                <i className={isOpen ? 'fa-solid fa-chevron-up infoTab__button--arrowDown' : 'fa-solid fa-chevron-up infoTab__button--arrow'} />
            </button>
            <div className={ isOpen ? 'infoTab__boxInfo active' : 'infoTab__boxInfo'}>
                {info}
            </div> 
        </div>
    )
}

export default InfoTab