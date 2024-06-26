import { Link } from "react-router-dom"
import Logo from "../../assets/Logo.png"
import "./index.css"
import { useLocation } from "react-router-dom"

function Header() {
    const location = useLocation()
    const { pathname } = location

    return (
        <nav className="navbar">
            <img className="navbar__logo" src={Logo} alt="logo de Kasa" />
            <div className="navbar__linklist">
                <Link
                    to="./"
                    className={`navbar__link ${
                        pathname === "/" && "navbar__link--active"
                    }`}
                >
                    Accueil
                </Link>
                <Link
                    to="./About"
                    className={`navbar__link ${
                        pathname === "/About" && "navbar__link--active"
                    }`}
                >
                    A Propos
                </Link>
            </div>
        </nav>
    )
}
export default Header
