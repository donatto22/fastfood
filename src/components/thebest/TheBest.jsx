import Tag from './Tag'
import './theBest.css'
import './theBest-responsive.css'

import { CiHeart } from "react-icons/ci"
import { CiDeliveryTruck } from "react-icons/ci"
import { CiStickyNote } from "react-icons/ci"
import Mv from '../misionvision/Mv'

const TheBest = () => {
    return (
        <div id="theBest">
            <Mv/>
            <div id="theBestContainer">
                <div id="theBest-content">
                    <div id="theBest-content-text">
                        <h2>Porqué somos el mejor servicio de comida rápida?</h2>

                        <p>Nuestro servicio de comida rápida mantiene sus estándares con la calidad del producto ofreciendo lo que todos queremos de manera rápida.</p>
                    </div>

                    <div id="theBest-content-tags">
                    <Tag icon={<CiHeart />} description="Calidad" />
                    <Tag icon={<CiDeliveryTruck />} description="Delivery rápido" />
                    <Tag icon={<CiStickyNote />} description="Fácil de ordenar" />
                    </div>
                </div>

                <div id="theBest-chef" data-aos="fade-down" data-aos-duration="1000" data-aos-once="true">
                    <img src='/chef.webp' loading='lazy' alt="chef de restaurante" />
                </div>
            </div>
        </div>
    )
}

export default TheBest