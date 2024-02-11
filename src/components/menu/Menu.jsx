import './menu.css'
import './menu-responsive.css'

const Menu = () => {
    return (
        <div id="menu" data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">
            <div id="menu-left">
                <div id="logo">
                    <img src="/lockerglogo.png" alt="" />
                </div>
                FastFood
            </div>

            <div id="menu-right">
                <a href="#inicio">Inicio</a>
                <a href="#food">Comida</a>
                <a href="#coments">Comentarios</a>
            </div>
        </div>
    )
}

export default Menu
