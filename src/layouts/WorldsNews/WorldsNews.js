import React, {useEffect, useState} from 'react';
import "./_worldsnews.scss";
import norton from "./photo/nortonnews.jpg";
import helmet from "./photo/helmetnews.jpg";
import winner from "./photo/King-of-the-Baggers.jpg";
import harley from "./photo/Harley-Davidson.jpg";
import motouber from "./photo/motouber.png";
import hayabusa from "./photo/hayabusa.jpg";
import warrior from "./photo/motogp.jpg";
import ktm from "./photo/ktm.png";
import abs from "./photo/trail-125-abs.jpg";
import styled, {keyframes} from "styled-components";
import {slideInLeft, slideInRight} from "react-animations";

const SlideInLeft = styled.div`animation: 3s ${keyframes`${slideInLeft}`} `;
const SlideInRight = styled.div`animation: 3s ${keyframes`${slideInRight}`} `;


const WorldsNews = () => {
    const [showImages, setShowImages] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowImages(true)
        }, 2000);
        return () => clearTimeout();
    }, [])
    return (
        <>
            <header className="newsContainer">
                <nav className="nav-part">
                    <div className="main-icon">
                        <a href="#" className="first-nav-word">MOTORCYCLE</a>
                        <a href="#" className="second-nav-word">STYLE</a>
                    </div>

                    <ul className="nav-li">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Type of motorcycle</a></li>
                        <li><a href="#">World's news</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <div className="burger">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </nav>
            </header>
           <div className="userInfo">Here you will see news from around the world:</div>
            <main className="mainContainer">
                <div className="article">
                    {
                        showImages && <SlideInLeft>
                            <div className="imageArticle"><img src={norton} width={"400px"} height={"350px"}/></div>
                        </SlideInLeft>
                    }
                    <div className="articleInfo">
                        <h2 className="articleName">
                            Norton Trademarks Suggest New Models Are Coming
                        </h2>
                        <hr className="compartment"/>
                        <span className="articleData">WADE THIEL OCTOBER 30, 2020</span>
                        <p className="articleContent">
                            TVS Has Some Plans For Norton
                            Norton Motorcycles has really gone through the wringer lately, but it seems with TVS
                            directing things, the company is on the right track. Recently the company filed trademark
                            applications with the European Intellectual Property Office for five new model names.

                            These names include: Norton Ranger, Norton Electra, Norton Fastback, Norton Navigator, and
                            Norton Nomad. The patent applications are for “Vehicles; apparatus for locomotion by land;
                            motorcycles; mopeds; scooters; mobility scooters / motor scooters; parts and fittings for
                            motorcycles and vehicles,” according to Motorcycle.com.

                            The company also trademarked various types of the Norton name, including Norton Atlas. The
                            patents suggest that these will be for all kinds of merchandise that Norton will sell
                            alongside the motorcycles, which is clearly a smart move.

                            All of the names for the motorcycles have been used in the past. The company used all of
                            them from the 60s through the 70s. While these names were used in the past. I doubt the new
                            bikes will resemble the old ones. I believe Norton will use these to make thoroughly modern
                            motorcycles, though some of them may have retro styling.

                            It will be interesting to see where TVS takes this. So far, I’ve been impressed with how the
                            company is handling previous customers who have been waiting on bikes or for service. It
                            seems the new Norton is trying to right the wrongs of the Stuart Garner-era Norton
                            Motorcycles, and I hope this new lineup will take that a step further.
                        </p>
                    </div>
                </div>
                <div className="article">
                    <div>
                        <h2 className="articleName">
                            HJC Brings New Helmets And Carbon Versions To NA And EU
                        </h2>
                        <hr className="compartment"/>
                        <span className="articleData"> CHASE HADDEN OCTOBER 28, 2020</span>
                        <p className="articleContent">
                            HJC Is Back With Four Helmets For Your Safety
                            Europe is the mecca of open-face helmet owners. It’s as if every time you see an individual
                            riding a scooter you can bet they have an open-face helmet on. It makes sense, with such
                            crowded and densely populated areas you want to ensure you have the most visibility
                            possible; especially if you’re going low speeds weaving through traffic.

                            The new HJC i30 is a new open-face option for both American and European riders featuring a
                            full visor/ Pinlock shield with a quick-release button built-in for easy and quick removal
                            of the visor. It wouldn’t be a modern helmet if it didn’t include a drop-down sun visor, and
                            HJC wants to make sure it provides a lot more coverage than their previous models. The i30
                            is DOT certified with sizes ranging from SX to 2XL and comes with a price point of $149.99
                            to $154.99 depending on what colour option (6 total) you choose.

                            For our dual-sport riders, the new ECE-certified HJC C80 is just for you. This modular
                            design includes an easily accessible single touch button to release the modular potion,
                            making it easy and safe to use while on the go. A sun visor, robust ventilation, and large
                            visor are packaged around a polycarbonate shell with an MSRP coming in at €249.90 and
                            currently only available in Europe.

                            The HJC F70 Carbon and V30 Carbon helmets are the final helmets on the new lid docket with
                            HJC looking to explore more Carbon options of their existing models.
                        </p>
                    </div>
                    {showImages && <SlideInRight>
                        <div className="imageArticle"><img src={helmet} width={"470px"} height={"380px"}/></div>
                    </SlideInRight>}
                </div>
                <div className="article">
                    {showImages && <SlideInLeft>
                        <div className="imageArticle"><img src={winner} width={"400px"} height={"350px"}/></div>
                    </SlideInLeft>}
                    <div>
                        <h2 className="articleName">
                            Tyler O’Hara Wins The King Of The Baggers Race On An Indian Challenger
                        </h2>
                        <hr className="compartment"/>
                        <span className="articleData"> WADE THIEL OCTOBER 26, 2020</span>
                        <p className="articleContent">
                            Winning At Laguna Seca
                            The field of race-tuned baggers looked somewhat odd at Laguna Seca, but the racing was
                            anything but. The racers whipped the bagger motorcycles around the racetrack with surprising
                            speed. It’s safe to say King of the Baggers was a success.

                            Tyler O’Hara riding an Indian Challenger, only one of the bikes in the race from the
                            company, managed to come out on top at the end of the race. He had to battle back from near
                            the back of the pack and after going off-track at one point near the beginning of the race.
                            He eventually won by 1.9 seconds, beating out one of the many Harley-Davidsons in the field.
                            O’Hara said this after the race, according to Visordown:

                            “It’s just so fun, like you said, being able to be part of this whole King of the Baggers. I
                            haven’t seen people that excited about motorcycle racing in a long time. People were jumping
                            up and down and hooting and hollering. It was just fun to put on a show with these guys. My
                            hats off to everybody who rode a bagger this weekend because some of the bikes out there
                            didn’t look too fun to be on. So, hats off to the team.”

                            I’m looking forward to seeing more of these races in the future, and I love that Harley and
                            Indian will be duking it out around the racetrack.
                        </p>
                    </div>
                </div>
                <div className="article">
                    <div>
                        <h2 className="articleName">
                            Harley-Davidson Recalls The LiveWire
                        </h2>
                        <hr className="compartment"/>
                        <span className="articleData">WADE THIEL OCTOBER 21, 2020</span>
                        <p className="articleContent">
                            It Could Unexpectedly Shut Down
                            Harley-Davidson’s LiveWire is one of the most controversial motorcycles of the last decade.
                            The electric bike has a pretty big issue for riders. It could unexpectedly shut down,
                            according to the NHTSA.

                            The NHTSA estimates that around one percent of the 1,012 units involved in this recall could
                            be affected. The issue is a software problem, so it’s not a piece of hardware like the
                            battery or motor, which is a good thing.

                            The On-Board Charging System’s software is the culprit here. It could cause the bike to shut
                            down. Riders would sometimes see the Traction Control, ABS, and Failure Indicator lights
                            come on which is a warning that the engine is about to shut down. However, loss of power
                            could happen without any warning.

                            If this happens, the rider might not be able to get the bike to start again. If the bike
                            does start again, there’s a risk it would simply happen again.
                        </p>
                    </div>
                    {showImages && <SlideInRight>
                        <div className="imageArticle"><img src={harley} width={"400px"} height={"350px"}/></div>
                    </SlideInRight>}
                </div>
                <div className="article">
                    {showImages && <SlideInLeft>
                        <div className="imageArticle"><img src={motouber} width={"400px"} height={"350px"}/></div>
                    </SlideInLeft>}
                    <div>
                        <h2 className="articleName">
                            Paris Gets Uber’s Motorcycle Ride-Hailing Service
                        </h2>
                        <hr className="compartment"/>
                        <span className="articleData"> WADE THIEL OCTOBER 16, 2020</span>
                        <p className="articleContent">
                            Another Way To Get Around
                            Paris is a wonderful city and you’ll see plenty of two-wheeled machines buzzing about. Now
                            some of those will be Uber riders. The company recently expanded its ride-hailing service to
                            Paris.

                            The service is already operating in Asian countries such as Indonesia, Thailand, and India.
                            The company has seen success in those markets so it makes sense for it to seek out new
                            markets in different countries around the world.

                            The service is quite simple. You hail a ride just like you would with a car. Every UberMoto
                            rider supplies a helmet, gloves, and jacket for the passenger.

                            While this sounds like a nice addition to the transportation system in Paris, Le Repaire Des
                            Motards tested the UberMoto app. A single ride ended up costing €56 ($65 USD). The ride was
                            only a little over six miles. At those prices, I can’t imagine many people will be jumping
                            for joy over the service.

                            The service only really makes sense in places where lane filtering or lane splitting is
                            possible. That means most American cities are out at the moment. However, things could
                            change in the future. It will be interesting to see what happens. The service is just
                            currently in a testing phase in Paris.
                        </p>
                    </div>
                </div>
                <div className="article">

                    <div>
                        <h2 className="articleName">
                            A New Hayabusa Is On The Way
                        </h2>
                        <hr className="compartment"/>
                        <span className="articleData">WADE THIEL OCTOBER 9, 2020</span>
                        <p className="articleContent">
                            Bigger, Better, Faster
                            The Suzuki Hayabusa might still be for sale in the U.S. but elsewhere in the world, it has
                            been ruled out due to emissions. So, Suzuki is now getting ready to release a new Hayabusa
                            and, according to Motorcycle News, the new bike will go on sale in the spring of 2021.

                            This likely means Suzuki will reveal the new bike soon. Motorcycle News reports that in
                            order for the new motorcycle to still be able to do the speeds the Hayabusa is known for,
                            Suzuki will have to increase the displacement of the already rather large engine. This new
                            bike will likely be a 1440cc engine instead of a 1340cc engine. It’s a relatively modest
                            bump up in displacement, and the bike is expected to still produce around 197 hp.

                            Suzuki will also likely equip the new bike with Suzuki Intelligent Ride System that is
                            already on the V-Strom 1050 XT. This will help make controlling all that power easy. This
                            added technology would also put lean-sensitive ABS, multiple ride modes, hill-hold control,
                            cruise control, and a new TFT dash on the bike.

                            According to reports, the twin-spar frame will remain, which is a bit of a surprise, but
                            then there’s nothing really wrong with it, so I’m not going to complain about that. The
                            suspension will be the latest Kayaba front and rear. The price is unknown as of yet.
                        </p>
                    </div>
                    {showImages && <SlideInRight>
                        <div className="imageArticle"><img src={hayabusa} width={"400px"} height={"350px"}/></div>
                    </SlideInRight>}
                </div>
                <div className="article">
                    {showImages && <SlideInLeft>
                        <div className="imageArticle"><img src={warrior} width={"400px"} height={"350px"}/></div>
                    </SlideInLeft>}
                    <div>
                        <h2 className="articleName">
                            MotoGP 2020 Season Opener Was Not Without Drama
                        </h2>
                        <hr className="compartment"/>
                        <span className="articleData">WADE THIEL SEPTEMBER 10, 2020</span>
                        <p className="articleContent">
                            It Could Be A Very Interesting Year, Indeed
                            So far 2020 has not been a good year for MotoGP, but the 2020 season officially kicked off
                            in Jerez on a scorching hot day. Ducati and Yamaha filled the top five spots, and Marc
                            Marquez crashed, which resulted in an injury that he will need surgery for. This year could
                            be interesting in terms of the leaderboard.

                            2020 was already a bit of a shakeup for MotoGP what with the late start to the season due to
                            COVID-19, and now that the season is underway, we’ll see who is prepared and who isn’t.
                            According to Bruce Allen of Late-Braking MotoGP reposted to Motorcycle.com, “two riders
                            failed to start, five failed to finish, and several others went walkabout and re-entered.”

                            According to a release from Honda Marquez suffered “transverse diaphyseal fracture to his
                            right humerus” and will have surgery on Tuesday. He nearly crashed, worked his way back to
                            third place, and then had a bad high-side that threw him pretty hard. Fabio Quartararo
                            walked away from the race with his first MotoGP victory.

                            It will be interesting to see how things go in the rest of the season. We’re just glad to
                            see the racers back out there doing what they do best.
                        </p>
                    </div>
                </div>
                <div className="article">
                    <div>
                        <h2 className="articleName">
                            KTM And CFMoto Are Working On A 750cc Range Of Motorcycles
                        </h2>
                        <hr className="compartment"/>
                        <span className="articleData"> WADE THIEL SEPTEMBER 8, 2020</span>
                        <p className="articleContent">
                            Manufactured In China
                            KTM and CFMoto are working together on some new motorcycles that will be manufactured in
                            China. At a recent investor presentation, it was revealed that the range of 750cc
                            motorcycles will be a part of a “massive increase in cooperation level” with CFMoto,
                            according to Motorcycle.com.

                            The bikes that will be produced will feature a 750cc twin-cylinder engine. there will be
                            several different machines that will come out of this collaboration, including a 750 Duke,
                            750 Adventure, and a 750 Supermoto. All of these bikes will be made in Hangzhou, China.

                            These motorcycles were expected to go to just China buyers. That was reported after previous
                            presentations from KTM about its arrangement with CFMoto. However, the new presentation said
                            that these three motorcycles will be for global markets. This means Chinese-made KTMs will
                            be sold in various markets around the world. However, before that, CFMoto will release its
                            own adventure bike that is based on this design. That bike will be called the MT800, and it
                            should be launched in the first quarter of 2021.

                            One thing that was not clear from this recent presentation was the timeline. Beyond the date
                            for the MT800, the timeline for these new motorcycles has not been shared.
                        </p>
                    </div>
                    {showImages && <SlideInRight>
                        <div className="imageArticle"><img src={ktm} width={"400px"} height={"350px"}/></div>
                    </SlideInRight>}
                </div>
                <div className="article">
                    {showImages && <SlideInLeft>
                        <div className="imageArticle"><img src={abs} width={"400px"} height={"350px"}/></div>
                    </SlideInLeft>}
                    <div>
                        <h2 className="articleName">
                            Honda Bringing The 2021 CT125 ABS To The U.S.
                        </h2>
                        <hr className="compartment"/>
                        <span className="articleData">SIMON BERTRAM SEPTEMBER 4, 2020</span>
                        <p className="articleContent">
                            Mini-moto lovers, rejoice! Honda has just updated their US website with news that should
                            have everyone reaching for their wallets.

                            After success in the US with the Monkey and the GROM, Honda is bringing over the CT125 ABS
                            to pair with the Super Cub C125 to make the mini-moto stable four bikes strong.

                            For the US, however, the CT125 will be renamed as the “Trail 125 ABS.”
                            Available in just one color, Glowing Red, the bike is the perfect mini-scrambler for all
                            your on-road and slightly-off-road needs.
                            It is powered by the same tiny 125cc air-cooled, fuel-injected, four-stroke single that the
                            Super Cub 125 thumps along with. It is mated to a 4-speed semi-automatic that should have
                            you puttering along in fine style.
                            Disc brakes front and back with, as one would assume, ABS help stop the lightweight. Full
                            wet weight is 259 lbs, and it has a 1.4 US gallon tank.
                            Suspension travel is 3.9 inches up front, and 3.4 inches out back.
                            A handy parcel/tie-down shelf above the rear wheel means you can possibly even make this
                            mini-scrambler into a day trip bike, with some extra gas or camping supplies along.

                            Base price for the 2021 Honda Trail 125 ABS is $3,899 + $190 destination charge. It is
                            available now at Honda Powersports dealers nationwide for order.
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}


export default WorldsNews;