import React from "react";
import './App.scss';
import ChoosePage from "../ChoosePage/ChoosePage";
import MotorcyclePage from "../MotoMain/MotorcyclePage/MotorcyclePage";
import AboutUsInfo from "../MotoMain/AboutUs/AboutUsInfo";
import WorldsNews from "../MotoMain/WorldsNews/WorldsNews";
import TypeOfMotorcycle from "../MotoMain/TypeOfMotorcycle/TypeOfMotorcycle";
import Contact from "../MotoMain/Contact/Contact";
import GuitarPage from "../GuitarMain/GuitarPage/GuitarPage";
import GuitarHistory from "../GuitarMain/GuitarsHistory/GuitarsHistory";
import GuitarsType from "../GuitarMain/TypeOfGuitars/GuitarsType";
import GuitarContact from "../GuitarMain/GuitarContact/GuitarContact";
import {Route, BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Route exact path='/' component={ChoosePage}/>

            <Route exact path='/motorcyclePage' component={MotorcyclePage}/>

            <Route exact path='/motorcyclePage/aboutUs' component={AboutUsInfo}/>
            <Route exact path='/motorcyclePage/motorcycleType' component={TypeOfMotorcycle}/>
            <Route exact path='/motorcyclePage/worldsNews' component={WorldsNews}/>
            <Route exact path='/motorcyclePage/motoContact' component={Contact}/>

            <Route exact path='/guitarPage' component={GuitarPage}/>

            <Route exact path='/guitarPage/guitarHistory' component={GuitarHistory}/>
            <Route exact path='/guitarPage/guitarsType' component={GuitarsType}/>
            <Route exact path='/guitarPage/contact' component={GuitarContact}/>

        </BrowserRouter>
    );
}

export default App;
