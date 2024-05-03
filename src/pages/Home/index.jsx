import AccomodationCards from "../../components/AccomodationCards"
import "./index.css"

function Home() {
    return (
        <div className="mainContainer">
            <div className="mainContainer__bannerHome">
                <h1 className="mainContainer__bannerHome--slogan">
                    Chez vous, partout et ailleurs
                </h1>
            </div>
            <AccomodationCards />
        </div>
    )
}

export default Home
