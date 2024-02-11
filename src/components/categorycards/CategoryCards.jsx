import './categoryCard.css'
import './categoryCard-responsive.css'

// eslint-disable-next-line react/prop-types
const CategoryCard = ({ imageAlt, aos, seconds, delay, image, categoryName, description }) => {
    return (
        <div id="category-card" data-aos={aos} data-aos-duration={seconds} data-aos-delay={delay} data-aos-once='true'>
            <div id="category-image">
                <img src={image} loading='lazy' alt={imageAlt}/>
            </div>

            <div id="category-title">
                <h3>{categoryName}</h3>
            </div>

            <div id="category-description">
                <p>{description}</p>
            </div>
        </div>
    )
}

const CategoryCards = () => {
    return  (
        <div id="category-cards">
            <div id="category-container">
                <CategoryCard imageAlt="hamburguesa" aos="fade-right" seconds="1800" delay="400" image='./hamburguesa.webp' categoryName="Hamburguesas" description="Incluye especiales de tres carnes"/>
                <CategoryCard imageAlt="salchipapa" aos="fade-right" seconds="1400" delay="200" image='./salchipapa.webp' categoryName="Salchipapas" description="Hasta con doble queso para más explosión de sabores"/>
                <CategoryCard imageAlt="pizza" aos="fade-right" seconds="1000" image='./pizza.webp' categoryName="Pizzas" description="Clásicas y aperitivos"/>
            </div>
        </div>
    )
}

export default CategoryCards
