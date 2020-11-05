import React from 'react';
import "./_worldsnews.scss";
import NavigationMoto from "../../../Components/Navigation/navigation";
import MotoNews from "../../../Components/MotoNews/MotoNews";


const WorldsNews = () => {
    return (
        <>
            <header className="newsContainer">
                <NavigationMoto/>
            </header>
            <div className="userInfo">Here you will see news from around the world:</div>
            <main className="mainContainer">
                <MotoNews/>
            </main>
        </>
    );
}


export default WorldsNews;