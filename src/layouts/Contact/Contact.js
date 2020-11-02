import React from "react";
import "./_contact.scss";

const Contact = () => {
    return (
        <>
            <header>
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
            </header>
            <main className="formBack">
                <div className="background">
                    <div className="formIntroduce">FILL OUT THE FORM<br/> AND WE WILL FIND THE BEST MOTORCYCLE
                        TYPE<br/> SPECIAL FOR YOU
                    </div>
                    <form className="userData">
                        <input type="text" placeholder="Enter your name"/>
                        <input type="text" placeholder="Enter your surname"/>
                        <select placeholder="Choose which one you prefer better">
                            <option>Choose your best type of riding:</option>
                            <option>Wood ride</option>
                            <option>Ride in the city</option>
                            <option>Long distance riding</option>
                            <option>Fast riding</option>
                            <option>Making some tricks</option>
                            <option>Off-road driving</option>
                        </select>
                        <input type="number" placeholder="How years old are you"/>
                        <button className="btnForm">Send the form</button>
                    </form>

                    <aside className="contact">
                        Contact:
                        <div>email: motofuns@gmail.com</div>
                        <div>tel.num: 555-666-111</div>

                    </aside>
                </div>
            </main>

        </>
    );
}

export default Contact