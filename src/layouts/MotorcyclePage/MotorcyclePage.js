import React, {useEffect, useState} from 'react';
import "./_motorcyclepage.scss";
import styled, {keyframes} from 'styled-components';
import {pulse} from "react-animations";


const Pulse = styled.div`animation: 10s ${keyframes`${pulse}`} infinite`;

const MotorcyclePage = () => {

//     const navSlide = () => {
//         const burger = document.querySelector(".burger");
//         const nav = document.querySelector(".nav-li");
//         const navLinks = document.querySelectorAll(".nav-li li ");
//
//         burger.addEventListener("click", () => {
//             nav.classList.toggle("nav-active");
//
//             navLinks.forEach((link, index) => {
//
//                 if (link.style.animation) {
//                     link.style.animation = ""
//                 } else {
//                     link.style.animation = `navLinkFade 0.5s ${index / 2 + 2}s ease-in forwards`;
//                 }
//             });
//         });
//     }
// navSlide();

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

            <Pulse><span className="greetingText">WE WILL<br/> INSTILL YOU A PASSION<br/> FOR MOTORCYCLES</span></Pulse>
        </header>
    );
}


export default MotorcyclePage;