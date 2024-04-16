import "./index.css"

function AccomodationItem({ cover, title }) {
    return (
        <li className="accomodationItem">
            <img
                className="accomodationItem__cover"
                src={cover}
                alt={`${title} cover`}
            />
            <h2 className="accomodationItem__title">{title}</h2>
        </li>
    )
}

export default AccomodationItem
