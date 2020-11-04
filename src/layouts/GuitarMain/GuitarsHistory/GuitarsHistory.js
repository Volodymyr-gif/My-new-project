import React, {useState, useEffect} from "react";
import "./_guitarshistory.scss";
import styled, {keyframes} from 'styled-components';
import {slideInLeft, slideInRight, slideInUp} from "react-animations";
import firstGuitar from "./photo/guitar1.jpg";

const SlideInLeft = styled.div`animation: 2s ${keyframes`${slideInLeft}`} `;
const SlideInRight = styled.div`animation: 3s ${keyframes`${slideInRight}`} `;
const SlideInUp = styled.div`animation: 2s ${keyframes`${slideInUp}`} `;

const GuitarHistory = () => {
    const [firstWord, setFirstWord] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setFirstWord(true);
        }, 1000);
        return () => clearTimeout();
    }, []);

    const [secondWord, setSecondWord] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setSecondWord(true);
        }, 2000)
        return () => clearTimeout();
    }, []);

    const [mainWord, setMainWord] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setMainWord(true);
        }, 4000)
        return () => clearTimeout();
    }, [])

    return (

        <main className="guitarContainer">
            <header className="guitarNav">
                <nav className="nav-Guitar">
                    <div className="main-icon">
                        <a href="#" className="first-nav-word">Guitar</a>
                        <a href="#" className="second-nav-word">lifestyle</a>
                    </div>

                    <ul className="nav-li">
                        <li><a href="#">Short guitars history</a></li>
                        <li><a href="#">Type of the guitars</a></li>
                        <li><a href="#">Guitar world's news</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className="burger">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </nav>
            </header>
            <aside className="animationGuitar" style={{display: "flex", justifyContent: "spaceBetween"}}>
                <div>
                    {firstWord && <SlideInLeft>
                        <div className="theWordRightAnimation">First there was a word</div>
                    </SlideInLeft>}<br/>
                    {secondWord && <SlideInRight>
                        <div className="theWordLeftAnimation">And then...</div>
                    </SlideInRight>}<br/>
                    {mainWord && <SlideInUp>
                        <div className="guitarWord">the guitar :</div>
                    </SlideInUp>}
                </div>
                <img src={firstGuitar} width={"800px"} height={"500px"} style={{borderRadius: "40px", padding: "20px"}}/>
            </aside>
            <div className="guitarsHistory">
                <p>Playing the guitar, be it a beginner electric guitar or an acoustic electric guitar for advanced
                    players, is not just an intellectual exercise or a way to please your senses and find the sonic you.
                    It is also a way to connect with the many people who did so over the last centuries.

                    And a proof of that is the fact that the use of this instrument can be traced way back to the 13th
                    century. With quite a rich history, an interesting evolution, and significant transformations
                    behind, this string instrument holds a noteworthy place in the musical journey of mankind.

                    Whether you’re a beginner guitar player or you’ve already reached a senior level, we have
                    highlighted below some of the most important stages in the history of this noble instrument.


                    Controversial beginnings
                    Today’s resources as far as the guitar history is regarded are easily accessible and one Google
                    search will get you quick yet diverse answers to various questions. Some history books say that this
                    instrument was invented by the classical-era Greeks.

                    However, some historians disagree saying that the well-known Greek instrument called Kithara is not
                    the starting point, even though it is a string instrument. This version is based on the fact that
                    the Kithara was actually a type of lyra or harp.

                    To further spice up the evolution of this musical item, we can also add that archaeologists have
                    found stringed guitars from the ancient Babylonian, Sumerian, and Egyptian civilizations, some of
                    the earliest stringed instruments including the bowl harps and the tanburs.


                    If the guitar is defined as a musical instrument that features a flat wooden soundboard, a long
                    fretted neck, a flat back, and ribs, then its beginnings can also be related to Turkey as the first
                    image of such an instrument was found there and it pictures a 3300-year-old Hittite guitar.

                    The name of the instrument itself points to another specific “birth land” as it comes from the
                    ancient Sanskrit word “ Tar” which means string. The guitar is said to have reached Europe from the
                    Persian Chartar, an instrument that featured 4 strings only to evolve to variations of 3 to 5
                    strings from Roman times till the Middle Ages.</p>
            </div>
        </main>
    );
}

export default GuitarHistory;