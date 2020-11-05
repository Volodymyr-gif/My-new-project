import React from "react";
import "./_contact.scss";
import NavigationMoto from "../../../Components/Navigation/navigation";

const Form = () => {
    return (
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