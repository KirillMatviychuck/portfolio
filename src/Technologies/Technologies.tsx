import classes from './Technologies.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skills} from "./Skill/Skills";

export const Technologies = () => {
    return (
        <div className={classes.skillsBlock}>
            <div className={`${styleContainer.container} ${classes.skillsContainer}`}>
                <h2 className={classes.skills}>Skills</h2>
                <div className={classes.title}>
                    <Skills title={'JS'} description={'There will be technologies what I know'}/>
                    <Skills title={'React'} description={'There will be technologies what I know'}/>
                    <Skills title={'Redux'} description={'There will be technologies what I know'}/>
                </div>
            </div>
        </div>
    )
}