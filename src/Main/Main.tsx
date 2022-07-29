import classes from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import portfolioPhoto from '../assets/photo/myPortfolioPhoto.png'

export const Main = () => {
    const myPhoto = {
        backgroundImage: `url(${portfolioPhoto})`,
    }
    return (
        <div className={classes.mainBlock} id={'main'}>
            <div className={`${styleContainer.container} ${classes.container}`}>
                <div className={classes.description}>
                    <p>HELLO, I'M</p>
                    <h1>KIRILL MATVIICHUK</h1>
                    <p>FRONT-END DEVELOPER</p>
                </div>
                <div className={classes.image}>
                    <div className={classes.photo} style={myPhoto}></div>
                </div>
            </div>
        </div>
    )
}