import React from "react";
import "./guitarcontact.scss";
import NavGuitar from "../../../Components/NavigationGuitar/NavGuitar";

const GuitarForm = () => {
    return (
        <>
            <form className="GuitarUserData">
                <input type="text" placeholder="Enter your name"/>
                <input type="text" placeholder="Enter your surname"/>
                <select placeholder="Choose which one you prefer better">
                    <option>Choose your guitar prefer:</option>
                    <option>Acoustic guitar</option>
                    <option>Electro guitar</option>
                    <option>Ukulele</option>
                    <option>Banjo</option>
                    <option>Bass guitar</option>
                </select>
                <select>
                    <option>Your level of playing guitar :</option>
                    <option>Beginner</option>
                    <option>Middle</option>
                    <option>Professional</option>
                </select>
                <input type="number" placeholder="How years old are you"/>
                <button className="btnForm">Send the form</button>
            </form>
        </>
    );
}
const GuitarContact = () => {
    return (
        <main className="guitarContainer">
            <NavGuitar/>
            <div className="guitarForm">
                <div className="backgroundGuitarForm">
                    <div className="formGuitar">Fill out the form and <br/>
                        we will select courses especially for you
                    </div>
                    <GuitarForm/>
                    <aside className="contact">
                        Contact:
                        <div>email: motofuns@gmail.com</div>
                        <div>tel.num: 555-666-111</div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
export default GuitarContact;