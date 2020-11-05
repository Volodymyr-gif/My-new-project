import React from "react";
import "./_guitarPage.scss";
import NavGuitar from "../../../Components/NavigationGuitar/NavGuitar";
import Top5 from "../../../Components/Top5Guitar/Top5Guitarists";


const GuitarPage = () => {
    return (
        <main className="guitarContainer">
            <NavGuitar/>
            <div className="guitarMainText">
                <p>Welcome to our perfect guitar world were every person can find some magic with guitar </p>
            </div>
            <Top5/>
        </main>
    );
}

export default GuitarPage;