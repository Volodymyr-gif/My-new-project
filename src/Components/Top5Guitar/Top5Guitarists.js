import React from "react";
import "../../layouts/GuitarMain/GuitarPage/_guitarPage.scss";
import jeffBeck from "./photo/jeffBeck.jpg";
import keithRichards from "./photo/keithrichards.jpg";
import jimmyPage from "./photo/jimmiepage.jpg";
import ericClapton from "./photo/ericclapton.jpg";
import jimiHendrix from "./photo/jimihendrix.jpg";

const Top5 = () => {
    return (
        <>
            <p className="top5">5 Greatest Guitarists <br/> <span>by RollingStone magazine</span></p>
            <div className="mainGuitarist">
                <div>
                    <img src={jeffBeck}/>
                    <h2>5.Jeff Beck</h2>
                    <p>Jeff Beck has the combination of brilliant technique with personality. It’s like he’s saying,
                        “I’m Jeff Beck. I’m right here. And you can’t ignore me.” Even in the Yardbirds, he had a tone
                        that was melodic but in-your-face – bright, urgent and edgy, but sweet at the same time. You
                        could tell he was a serious player, and he was going for it. He was not holding back.</p>
                </div>
                <div>
                    <img src={keithRichards}/>
                    <h2>4.Keith Richards</h2>
                    <p className="brighterText">I remember being in junior high school, hearing "Satisfaction" and being
                        freaked out by what it
                        did to me. It's a combination of the riff and the chords moving underneath it. Keith wrote
                        two-and three-note themes that were more powerful than any great solo. He played the vibrato
                        rhythm and the lead guitar in "Gimme Shelter."</p>
                </div>
                <div>
                    <img src={jimmyPage}/>
                    <h2>3.Jimmy Page</h2>
                    <p>He had this vision of how to transcend the stereotypes of what the guitar can do. If you follow
                        the guitar on "The Song Remains the Same" all the way through, it evolves through so many
                        different changes – louder, quieter, softer, louder again. He was writing the songs, playing
                        them, producing them – I can't think of any other guitar player since Les Paul that can claim
                        that. By Joe Perry</p>
                </div>
                <div>
                    <img src={ericClapton} width={"305px"} height={"305px"}/>
                    <h2>2.Eric Clapton</h2>
                    <p>Eric Clapton is basically the only guitar player who influenced me – even though I don’t sound
                        like him. There was a basic simplicity to his playing, his style, his vibe and his sound. He
                        took a Gibson guitar and plugged it into a Marshall, and that was it. The basics. The blues. His
                        solos were melodic and memorable – and that’s what guitar solos should be, part of the song. I
                        could hum them to you.</p>
                </div>
                <div>
                    <img src={jimiHendrix}/>
                    <h2>1.Jimi Hendrix</h2>
                    <p>Jimi Hendrix exploded our idea of what rock music could be: He manipulated the guitar, the whammy
                        bar, the studio and the stage. On songs like "Machine Gun" or "Voodoo Chile," his instrument is
                        like a divining rod of the turbulent Sixties – you can hear the riots in the streets and napalm
                        bombs dropping in his "Star-Spangled Banner."
                    </p>
                </div>
            </div>
        </>
    )
}

export default Top5;