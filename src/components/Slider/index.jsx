import { useState } from "react"
import "./index.css"

function Slider({ pictures, title, id }) {
    const [index, setIndex] = useState(0)
    const currentPicture = pictures[index]

    const handlePrevious = () => {
        const newIndex = index - 1
        setIndex(newIndex < 0 ? pictures.length - 1 : newIndex)
    }

    const handleNext = () => {
        const newIndex = index + 1
        setIndex(newIndex >= pictures.length ? 0 : newIndex)
    }

    return (
        <div className="slider">
            {pictures.length > 1 && (
                <div>
                    <button className="slider__button" onClick={handlePrevious}>
                        <i className="fa-solid fa-chevron-left slider__button__icon"></i>
                    </button>
                    <button
                        className="slider__button slider__button--right"
                        onClick={handleNext}
                    >
                        <i className="fa-solid fa-chevron-right slider__button__icon" />
                    </button>
                    <p className="slider__imageCounter">
                        {index + 1}/{pictures.length}
                    </p>
                </div>
            )}
            <img
                className="slider__image"
                src={currentPicture}
                alt={`${title} cover`}
                key={`${id}-picture-${index}`}
            />
        </div>
    )
}

export default Slider
