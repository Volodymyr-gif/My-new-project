import React, {useEffect, useState} from 'react';
import styled, {keyframes} from 'styled-components';
import {rotateInDownRight, rotateInDownLeft, zoomIn} from "react-animations";
import './_choosepage.scss';
import guitar from "./photo/guitar.jpg"
import motorcycle from "./photo/motorcycle.jpg"

const RotateInDownLeft = styled.div`animation: 3s ${keyframes`${rotateInDownLeft}`} `;
const RotateInDownRight = styled.div`animation: 3s ${keyframes`${rotateInDownRight}`} `;
const ZoomIn = styled.div`animation: 4s ${keyframes`${zoomIn}`} 3`;

const ChoosePage = () => {
    const [showImages, setShowImages] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowImages(true)
        }, 3500);
        return () => clearTimeout();
    }, [])


    const ImageAnimation = () => {
        return (
            <div className="mainImages">
                <div>
                    <RotateInDownLeft>
                        <h2 className="textToChoose">LEARN TO PLAY THE GUITAR</h2>
                        <img onClick={""} alt={"guitar"} src={guitar} width={"480px"} height={"749px"}/>
                    </RotateInDownLeft>
                </div>
                <ZoomIn><span>OR</span></ZoomIn>
                <div>
                    <RotateInDownRight>
                        <h2 className="textToChoose">LEARN TO RIDE A MOTORCYCLE</h2>
                        <a href="http://localhost:3000/MotorcyclePage/MotorcyclePage.js">
                            <img alt={"motorcycle"} src={motorcycle} width={"500px"}/>
                        </a>
                    </RotateInDownRight>
                </div>
            </div>
        )
    }

    return (

        <header className="firstContainer">
            <div className="parentContainer">
                <h1 className="mainQuestion">
                    HELLO MY DEAR USER. <br/>
                    I HAVE ONE QUESTION. <br/>
                    WHAT WOULD YOU LIKE BETTER TO LEARN? <br/>
                </h1>
                {showImages && <ImageAnimation/>}
            </div>
        </header>
    );
}

export default ChoosePage;