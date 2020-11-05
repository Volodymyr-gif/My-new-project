import React from 'react';
import "./_motorcyclepage.scss";
import NavigationMoto from "../../../Components/Navigation/navigation";
import styled, {keyframes} from 'styled-components';
import {pulse} from "react-animations";

const Pulse = styled.div`animation: 10s ${keyframes`${pulse}`} infinite`;

const MotorcyclePage = () => {
    return (
        <header className="container">
           <NavigationMoto/>
            <Pulse><span className="greetingText">WE WILL<br/> INSTILL YOU A PASSION<br/> FOR MOTORCYCLES</span></Pulse>
        </header>
    );
}

export default MotorcyclePage;