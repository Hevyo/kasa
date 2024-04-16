import WhiteLogo from "../../assets/WhiteLogo.png"
import "./index.css"

function Footer() {
    return (
        <div className="footer">
            <img className="footer__logo" src={WhiteLogo} alt="Logo de Kasa" />
            <p className="footer__rightsinfos">
                © 2020 Kasa. All rights reserved
            </p>
        </div>
    )
}
export default Footer
