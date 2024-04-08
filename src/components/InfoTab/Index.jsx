import { useState , useRef } from 'react'
import './index.css'

function InfoTab({title, info}) {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    const contentRef = useRef();
    
    return (
        <div className='infoTab'>
            <button className='infoTab__button' onClick={toggle}>
                <h2 className='infoTab__button__title'>{title}</h2>
                <i className={isOpen ? 'fa-solid fa-chevron-up infoTab__button--arrowDown' : 'fa-solid fa-chevron-up infoTab__button--arrow'} />
            </button>
            <div className='infoTab__boxInfo' ref={contentRef} style={isOpen ? {height: contentRef.current.scrollHeight + "px"} : {height : "0px"}}>
                {info}
            </div> 
        </div>
    )
}

export default InfoTab