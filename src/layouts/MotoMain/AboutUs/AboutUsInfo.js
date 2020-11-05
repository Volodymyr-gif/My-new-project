import React from 'react';
import "./_aboutus.scss";
import NavigationMoto from "../../../Components/Navigation/navigation";

const MotoDescribe = () => {
    return(
        <div>
            <p className="describeOurPage">
                It is the place of people who love motorcycle from the start to the end.<br/> Here you can find people to
                talk about everything, related with motorcycle style of life.<br/>
                You can organization the meeting motorcyclist from any part of the Earth<br/> to drink some beer, talk about
                your passion, organise some tour or just relax.<br/>
                I hope you find here everything you want.<br/> We make our page responsive for your smartphone devices and
                actualize information up to date.<br/>
                Enjoy.
            </p>.
        </div>
    );
}
const AboutUsInfo = () => {
    return (
        <header className="container">
            <NavigationMoto/>
            <MotoDescribe/>
        </header>
    );
}

export default AboutUsInfo; 