import './footer.css'

import { TiSocialFacebook } from "react-icons/ti"
import { TiSocialGooglePlus } from "react-icons/ti"
import { TiSocialLinkedin } from "react-icons/ti"

const Footer = () => {
    return (
        <div id="footer">
            <svg viewBox="0 0 1440 320"><path fill="#0b1830" fillOpacity="1" d="M0,320L48,282.7C96,245,192,171,288,165.3C384,160,480,224,576,234.7C672,245,768,203,864,160C960,117,1056,75,1152,69.3C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div id="footer-container">
                <div id="fc-left">
                    <div id="fc-title">
                        <h3>FastFood</h3>
                        <p>Porque sabemos lo importante es para ti el tiempo y calidad.</p>
                    </div>

                    <div id="fc-socials">
                        <TiSocialFacebook />
                        <TiSocialGooglePlus />
                        <TiSocialLinkedin />
                    </div>
                </div>

                <div id="fc-right">
                    <div className="fc-links">
                        <div className="fc-links-title">
                            Negocio
                        </div>

                        <div className="fc-links-content">
                            <p><a href="#">Visión y Misión</a></p>
                            <p><a href="#">Comentarios</a></p>
                        </div>
                    </div>

                    <div className="fc-links">
                        <div className="fc-links-title">
                            Contacto
                        </div>

                        <div className="fc-links-content">
                            <p>(+51) 987 654 321</p>
                            <p>Lima, Perú. 987</p>
                        </div>
                    </div>

                    <div className="fc-links">
                        <div className="fc-links-title">
                            Referidos
                        </div>

                        <div className="fc-links-content">
                            <p><a href="https://marenol.vercel.app/projects">Más proyectos</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer