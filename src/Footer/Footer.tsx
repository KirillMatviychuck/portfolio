import classes from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import instagram from '../assets/images/footer/insta.png'
import linkedin from '../assets/images/footer/linkedin.png'
import telegram from '../assets/images/footer/telegram.png'
import {Title} from "../common/components/title/Title";

export const Footer = () => {
    return (
        <div className={classes.footer} id={'contacts'}>
            <div className={`${styleContainer.container} ${classes.footerContainer}`}>
                <Title text={'Kirill'}/>
                <div className={classes.socialIcons}>
                    <a href="https://t.me/kirillmt"><div className={classes.icon}><img src={telegram}/></div></a>
                    <a href="https://www.linkedin.com/in/kirill-matviichuk/"><div className={classes.icon}><img src={linkedin}/></div></a>
                    <a href="https://www.instagram.com/kirill.mt/"><div className={classes.icon}><img src={instagram}/></div></a>
                </div>
                <div className={classes.rights}>© 2022 All Rights Reserved.</div>
            </div>
        </div>
    )
}