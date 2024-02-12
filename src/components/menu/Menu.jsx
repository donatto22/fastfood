import './menu.css'
import './menu-responsive.css'

import { MdOutlineMenu } from "react-icons/md"
import { useEffect, useState } from 'react'
import { isMobile } from 'react-device-detect'

const Menu = () => {

    const [menu, setMenu] = useState(false)

    useEffect(() => {
        isMobile && setMenu(false)
        !isMobile && setMenu(true)
    }, [])
    
    return (    
        <div id="menu" data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">
            <div id="menu-left">
                <div id="logo">
                    <img src="/lockerglogo.png" alt="" />
                </div>

                <div>
                    FastFood
                </div>
            </div>

            <div id="burger-menu" onClick={() => { setMenu(!menu)}}>
                <MdOutlineMenu />
            </div>

            {
                menu &&
                (
                    <div id="menu-right">
                        <a href="#inicio">Inicio</a>
                        <a href="#food">Comida</a>
                        <a href="#coments">Comentarios</a>
                    </div>
                )
            }
        </div>
    )
}

export default Menu
