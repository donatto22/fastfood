import CategoryCards from './components/categorycards/CategoryCards'
import Header from './components/header/Header'
import Menu from './components/menu/Menu'
import TheBest from './components/thebest/TheBest'
import Footer from './components/footer/Footer'

import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
        <Menu/>
        <Header/>
        <CategoryCards/>
        <TheBest/>

        <Footer/>
        </>
    )
}

export default App
