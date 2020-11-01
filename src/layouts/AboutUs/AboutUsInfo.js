import React from 'react';
import "./_aboutus.scss";

const AboutUsInfo = () => {
    return (
        <header className="container">
            <nav className="nav-part">
                <div className="main-icon">
                    <a href="#" className="first-nav-word">MOTORCYCLE</a>
                    <a href="#" className="second-nav-word">STYLE</a>
                </div>

                <ul className="nav-li">
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Type of motorcycle</a></li>
                    <li><a href="#">World's news</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="burger">
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
            <div>
                <p className="describeOurPage">
                    It is the place of people who love motorcycle from the start to the end.<br/> Here you can find people to
                    talk about everything, related with motorcycle style of life.<br/>
                    You can organization the meeting motorcyclist from any part of the Earth<br/> to drink some beer, talk about
                    your passion, organise some tour or just relax.<br/>
                    I hope you find here everything you want.<br/> We make our page responsive for your smartphone devices and
                    actualize information up to date.<br/>
                    Enjoy.
                </p>.

            </div>
        </header>
    );
}

export default AboutUsInfo; 