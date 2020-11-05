import React from "react";
import "./_guitarstype.scss";
import NavGuitar from "../../../Components/NavigationGuitar/NavGuitar";
import GuitarTypes from "../../../Components/GuitarTypes/GuitarTypes";

const GuitarsType = () => {
    return (
        <main className="guitarContainer">
            <NavGuitar/>
            <GuitarTypes/>
        </main>
    )
}
export default GuitarsType;