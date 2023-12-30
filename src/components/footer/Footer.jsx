import './footer.css'

import { TiSocialFacebook } from "react-icons/ti"
import { TiSocialGooglePlus } from "react-icons/ti"
import { TiSocialLinkedin } from "react-icons/ti"

const Footer = () => {
    return (
        <div id="footer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0B1830" fill-opacity="1" d="M0,128L48,154.7C96,181,192,235,288,218.7C384,203,480,117,576,106.7C672,96,768,160,864,165.3C960,171,1056,117,1152,128C1248,139,1344,213,1392,250.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
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