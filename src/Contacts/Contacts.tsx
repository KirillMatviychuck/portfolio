import classes from './Contacts.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import {Title} from "../common/components/title/Title";


export const Contacts = () => {
    return (
        <div className={classes.contactsBlock}>
            <div className={`${styleContainer.container} ${classes.contactsContainer}`}>
                <Title text={'Get in touch'}/>
                <form className={classes.contactForm}>
                    <div className={classes.inputsBlock}>
                        <input type="text" placeholder={'Your Name'}/>
                        <input type="email" placeholder={'Your Email'}/>
                    </div>
                    <textarea/>
                    <button className={classes.submitBtn}>Send message</button>
                </form>
            </div>
        </div>
    )
}