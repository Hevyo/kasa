import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'
import './index.css'

function Header() {
    return(
        <nav className="navbar">
            <img className="navbar__logo" src={Logo} alt="logo de Kasa" />
            <div className="navbar__linklist">
                <Link to='./' className="navbar__link">Accueil</Link>
                <Link to='./About' className="navbar__link">A Propos</Link>
            </div>
        </nav>
    )
}
export default Header

