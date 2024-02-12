import './header.css'
import './header-responsive.css'

const Header = () => {
    return (
        <div id="header">
            <div id="header-container">
                <div id="header-content">
                    <div id='title-header' data-aos="fade-right" data-aos-duration="1500">Tu comida <text className="strong-text">FAVORITA</text> en tu lugar preferido</div>
                    <div id='description-header' data-aos="fade-right" data-aos-duration="1700">A quien no le gusta comer desde la comodidad de su casa?</div>

                    <div id="header-button" data-aos="fade-up" data-aos-duration="2000" data-aos-once="true">
                        <button>
                            Ordenar ahora
                        </button>
                    </div>
                </div>

                <div id="header-burger" data-aos="fade-left" data-aos-duration="2000" data-aos-once="true">
                    <img src="/burger.webp" alt="imagen hamburguesa" />
                </div>
            </div>
        </div>
    )
}

export default Header