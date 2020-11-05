import React, {useState, useEffect} from "react";
import "../../layouts/GuitarMain/GuitarsHistory/_guitarshistory.scss";
import styled, {keyframes} from 'styled-components';
import {slideInLeft, slideInRight, slideInUp} from "react-animations";
import firstGuitar from "./photo/guitar1.jpg";

const SlideInLeft = styled.div`animation: 2s ${keyframes`${slideInLeft}`} `;
const SlideInRight = styled.div`animation: 3s ${keyframes`${slideInRight}`} `;
const SlideInUp = styled.div`animation: 2s ${keyframes`${slideInUp}`} `;


const HistoryAnim = () => {
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
    return(
        <>
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
        </>
    )
}
export default HistoryAnim;