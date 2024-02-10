import './header.css'
import './header-responsive.css'

const Header = () => {
    return (
        <div id="header">
            <div id="header-container">
                <div id="header-content">
                    <h1 data-aos="fade-right" data-aos-duration="1500">Tu comida FAVORITA en tu lugar preferido</h1>
                    <p data-aos="fade-right" data-aos-duration="1700">A quien no le gusta comer desde la comodidad de su casa?</p>

                    <div id="header-button" data-aos="fade-up" data-aos-duration="2000">
                        <button>
                            Ordenar ahora
                        </button>
                    </div>
                </div>

                <div id="header-burger" data-aos="fade-left" data-aos-duration="2000">
                    <img src="/burger.webp" alt="imagen hamburguesa" />
                </div>
            </div>
        </div>
    )
}

export default Header