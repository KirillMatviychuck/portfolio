import classes from './Nav.module.scss'

export const Nav = () => {
    return (
        <div className={classes.nav}>
            <a href="#main">Main</a>
            <a href="#skill">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contacts">Contacts</a>
        </div>
    )
}