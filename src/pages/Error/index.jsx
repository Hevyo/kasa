import "./index.css"
import { Link } from "react-router-dom"

function Error() {
    return (
        <div className="errorContainer">
            <p className="errorContainer__404">404</p>
            <h1 className="errorContainer__errorMessage">
                Oups! La page que vous demandez n'existe pas.
            </h1>
            <Link to="./" className="errorContainer__linkToHome">
                Retourner sur la page d'accueil
            </Link>
        </div>
    )
}

export default Error
