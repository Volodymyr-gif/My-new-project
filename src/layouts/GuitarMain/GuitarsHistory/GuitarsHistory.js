import React from "react";
import "./_guitarshistory.scss";
import NavGuitar from "../../../Components/NavigationGuitar/NavGuitar";
import HistoryAnim from "../../../Components/GuitarHistoryAnimation/HistoryAnim";
import GuitarHistoryInfo from "../../../Components/GuitarHistoryAnimation/GuitarHistoryInfo";


const GuitarHistory = () => {
    return (
        <main className="guitarContainer">
            <NavGuitar/>
            <HistoryAnim/>
            <GuitarHistoryInfo/>
        </main>
    );
}

export default GuitarHistory;