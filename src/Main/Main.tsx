import classes from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import portfolioPhoto from '../assets/photo/portfolioPhoto.jpg'
// @ts-ignore
import ReactTypingEffect from 'react-typing-effect';
import React from "react";
//use require to import the module
const Fade = require("react-reveal/Fade")

export const Main = () => {
    const myPhoto = {
        backgroundImage: `url(${portfolioPhoto})`,
    }
    return (
        <div className={classes.mainBlock} id={'main'}>
            <div className={`${styleContainer.container} ${classes.container}`}>
                <Fade left>
                    <div className={classes.description}>
                        <p>HELLO, I'M</p>
                        <h1>KIRILL MATVIICHUK</h1>
                        <p>
                            <ReactTypingEffect
                                text={["FRONT-END DEVELOPER"]}
                                eraseSpeed={50}
                            />
                        </p>
                        {/*<p>FRONT-END DEVELOPER</p>*/}
                    </div>
                </Fade>
                <Fade right>
                    <div className={classes.image}>
                        <div className={classes.photo} style={myPhoto}></div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}