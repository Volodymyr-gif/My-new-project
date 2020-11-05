import React, {useState} from 'react';
import "../../layouts/GuitarMain/GuitarPage/_guitarPage.scss"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

const styleTrue = {
    transform: "translateY(0px)",
    opacity: "1",
    zIndex: "1",
    transition: "2s",
    backgroundColor: "rgba(139,69,19,0.7)",
    borderRadius: "10px",
    padding: "30px 10px 30px 0",
    position: "fixed",
    left: "0",
    top: "80px"
}
const styleFalse = {
    transform: "translateY(50px)",
    backgroundColor: "rgba(139,69,19,0.7)",
    opacity: "0",
    transition: "2s",
    position: "fixed",
    left: "0",
    top: "100px",
}

const NavGuitar = () => {
    const [showMenu, setShowMenu] = useState(false);
    window.addEventListener("resize", () => setShowMenu(false));
    let menu;
    if (showMenu) {
        menu =
            <ul className="navBurgerGuitar" style={styleTrue}>
                <li><a href="/guitarPage/guitarHistory">Short guitars history</a></li>
                <li><a href="/guitarPage/guitarsType">Type of the guitars</a></li>
                <li><a href="/guitarPage/contact">Contact</a></li>
            </ul>
    } else {
        menu =
            <ul className="navBurgerGuitar" style={styleFalse}>
                <li><a href="/guitarPage/guitarHistory">Short guitars history</a></li>
                <li><a href="/guitarPage/guitarsType">Type of the guitars</a></li>
                <li><a href="/guitarPage/contact">Contact</a></li>
            </ul>
    }
    return (
        <header className="guitarNav">
            <nav className="nav-Guitar">
                <div className="main-icon">
                    <a href="/guitarPage" className="first-nav-word">Guitar</a>
                    <a href="/guitarPage" className="second-nav-word">lifestyle</a>
                </div>

                <ul className="nav-li">
                    <li><a href="/guitarPage/guitarHistory">Short guitars history</a></li>
                    <li><a href="/guitarPage/guitarsType">Type of the guitars</a></li>
                    <li><a href="/guitarPage/contact">Contact</a></li>
                </ul>

                <div className="burgerGuitar">
                    <FontAwesomeIcon
                        icon={faBars}
                        onClick={() => setShowMenu(!showMenu)}
                    />
                </div>
                {menu}
            </nav>
        </header>
    )
}
export default NavGuitar;