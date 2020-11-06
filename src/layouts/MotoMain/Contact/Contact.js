import React from "react";
import "./_contact.scss";
import NavigationMoto from "../../../Components/Navigation/navigation";
import emailjs from "emailjs-com";
import {init} from 'emailjs-com';

init("user_tLKAs9kqzGwUjsbC5E3Tr");

const Form = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_q54lcvq', 'template_s14ju38', e.target, 'user_tLKAs9kqzGwUjsbC5E3Tr')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <form onSubmit={sendEmail} className="userData">
            <input type="text" placeholder="Enter your name" name='name'/>
            <input type="text" placeholder="Enter your surname" name='surname'/>
            <select placeholder="Choose which one you prefer better" name='subject'>
                <option>Choose your best type of riding:</option>
                <option>Wood ride</option>
                <option>Ride in the city</option>
                <option>Long distance riding</option>
                <option>Fast riding</option>
                <option>Making some tricks</option>
                <option>Off-road driving</option>
            </select>
            <input type="number" placeholder="How years old are you" name='age'/>
            <input className="btnForm" type='submit' value='Send the form'></input>
        </form>
    );
}
const ContactForm = () => {
    return (
        <aside className="contact">
            Contact:
            <div>email: motofuns@gmail.com</div>
            <div>tel.num: 555-666-111</div>
        </aside>
    );
}
const Contact = () => {
    return (
        <>
            <header>
                <NavigationMoto/>
            </header>
            <main className="formBack">
                <div className="background">
                    <div className="formIntroduce">FILL OUT THE FORM<br/> AND WE WILL FIND THE BEST MOTORCYCLE
                        TYPE<br/> SPECIAL FOR YOU
                    </div>
                    <Form/>
                    <ContactForm/>
                </div>
            </main>
        </>
    );
}

export default Contact