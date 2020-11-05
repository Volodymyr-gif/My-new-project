import React, {useState} from 'react';
import "../../layouts/MotoMain/MotorcyclePage/_motorcyclepage.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const styleTrue = {
    transform: "translateX(0px)",
    opacity: "1",
    zIndex: "1",
    transition: "2s",
    backgroundColor: "black",
    borderRadius: "10px",
    padding: "30px 30px 30px 0",
    position: "fixed",
    left: "0",
    top: "80px"
}
const styleFalse = {
    transform: "translateX(50px)",
    backgroundColor: "black",
    opacity: "0",
    transition: "2s",
    position: "fixed",
    left: "0",
    top: "100px",
}
const NavigationMoto = () => {
    const [showMenu, setShowMenu] = useState(false);
    window.addEventListener("resize", () => setShowMenu(false));
    let menu;
    if (showMenu) {
        menu =
            <ul className="navBurger" style={styleTrue}>
                <li><a href="/motorcyclePage/aboutUs">About us</a></li>
                <li><a href="/motorcyclePage/motorcycleType">Type of motorcycle</a></li>
                <li><a href="/motorcyclePage/worldsNews">World's news</a></li>
                <li><a href="/motorcyclePage/motoContact">Contact</a></li>
            </ul>
    } else {
        menu =
            <ul className="navBurger" style={styleFalse}>
                <li><a href="/motorcyclePage/aboutUs">About us</a></li>
                <li><a href="/motorcyclePage/motorcycleType">Type of motorcycle</a></li>
                <li><a href="/motorcyclePage/worldsNews">World's news</a></li>
                <li><a href="/motorcyclePage/motoContact">Contact</a></li>
            </ul>
    }
    return (
        <nav className="nav-part">
            <div className="main-icon">
                <a href="/motorcyclePage" className="first-nav-word">MOTORCYCLE</a>
                <a href="/motorcyclePage" className="second-nav-word">STYLE</a>
            </div>

            <ul className="nav-li">
                <li><a href="/motorcyclePage/aboutUs">About us</a></li>
                <li><a href="/motorcyclePage/motorcycleType">Type of motorcycle</a></li>
                <li><a href="/motorcyclePage/worldsNews">World's news</a></li>
                <li><a href="/motorcyclePage/motoContact">Contact</a></li>
            </ul>
            <div className="burger">
                <FontAwesomeIcon
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </div>
            {menu}
        </nav>
    )
}
export default NavigationMoto;