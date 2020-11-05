import React from "react";
import "./_typeofmotorcycle.scss";
import NavigationMoto from "../../../Components/Navigation/navigation";
import MotorcycleType from "../../../Components/MotorcycleTypes/MotorcycleType";

const TypeOfMotorcycle = () => {
    return (
        <>
            <header>
                <NavigationMoto/>
            </header>
            <main className="MotoTypeContainer">
                <MotorcycleType/>
            </main>
        </>
    );
}
export default TypeOfMotorcycle;