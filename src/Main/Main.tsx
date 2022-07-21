import classes from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'

export const Main = () => {
    return (
        <div className={classes.mainBlock} id={'main'}>
            <div className={`${styleContainer.container} ${classes.container}`}>
                <div className={classes.description}>
                    <p>HELLO, I'M</p>
                    <h1>KIRILL MATVIICHUK</h1>
                    <p>FRONT-END DEVELOPER</p>
                </div>
                <div className={classes.photo}>PHOTO</div>
            </div>
        </div>
    )
}