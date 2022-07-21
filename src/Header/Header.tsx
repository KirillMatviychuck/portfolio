import classes from './Header.module.scss'
import {Nav} from "./Nav/Nav";

export const Header = () => {
    return (
        <div className={classes.header}>
            <Nav />
        </div>
    )
}