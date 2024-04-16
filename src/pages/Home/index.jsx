import AccomodationCards from "../../components/AccomodationCards"
import "./index.css"

function Home() {
    return (
        <div className="mainContainer">
            <div className="mainContainer__bannerHome">
                <p className="mainContainer__bannerHome--slogan">
                    Chez vous, partout et ailleurs
                </p>
            </div>
            <AccomodationCards />
        </div>
    )
}

export default Home
