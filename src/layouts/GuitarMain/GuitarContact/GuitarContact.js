import React from "react";
import "./guitarcontact.scss";
import NavGuitar from "../../../Components/NavigationGuitar/NavGuitar";
import emailjs from 'emailjs-com';
import {init} from 'emailjs-com';

init("user_tLKAs9kqzGwUjsbC5E3Tr");

const GuitarForm = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_q54lcvq', 'template_6cch76j', e.target, 'user_tLKAs9kqzGwUjsbC5E3Tr')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <>
            <form onSubmit={sendEmail} className="GuitarUserData">
                <input type="text" placeholder="Enter your name" name='name'/>
                <input type="text" placeholder="Enter your surname" name='surname'/>
                <select placeholder="Choose which one you prefer better" name='subject'>
                    <option>Choose your guitar prefer:</option>
                    <option>Acoustic guitar</option>
                    <option>Electro guitar</option>
                    <option>Ukulele</option>
                    <option>Banjo</option>
                    <option>Bass guitar</option>
                </select>
                <select name='object'>
                    <option>Your level of playing guitar :</option>
                    <option>Beginner</option>
                    <option>Middle</option>
                    <option>Professional</option>
                </select>
                <input type="number" placeholder="How years old are you" name='age'/>
                <input className="btnForm" type='submit' value='Send the form'></input>
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