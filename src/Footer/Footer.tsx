import classes from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import instagram from '../assets/images/footer/insta.png'
import github from '../assets/images/footer/github.png'
import telegram from '../assets/images/footer/telegram.png'
import {Title} from "../common/components/title/Title";
//use require to import the module
const Fade = require("react-reveal/Fade")

export const Footer = () => {
    return (
        <div className={classes.footer} id={'contacts'}>
            <Fade>
                <div className={`${styleContainer.container} ${classes.footerContainer}`}>
                    <Title text={'Kirill'}/>
                    <div className={classes.socialIcons}>
                        <a href="https://t.me/kirillmt">
                            <div className={classes.icon}><img src={telegram}/></div>
                        </a>
                        <a href="https://github.com/KirillMatviychuck">
                            <div className={classes.icon}><img src={github}/></div>
                        </a>
                        <a href="https://www.instagram.com/kirill.mt/">
                            <div className={classes.icon}><img src={instagram}/></div>
                        </a>
                    </div>
                    <div className={classes.rights}>© 2022 All Rights Reserved.</div>
                </div>
            </Fade>
        </div>
    )
}