import classes from './Technologies.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {Skills} from "./Skills/Skills";
import {Title} from "../common/components/title/Title";
import reactRedux from "../assets/images/react.png";
import htmlCss from "../assets/images/data.png";
import unitTests from "../assets/images/test2.png";
import materialUI from "../assets/images/graphic-design-icon-5.jpg";
import {useState} from "react";

export const Technologies = () => {
    const react = {
        backgroundImage: `url(${reactRedux})`,
    }
    const html = {
        backgroundImage: `url(${htmlCss})`,
    }
    const tests = {
        backgroundImage: `url(${unitTests})`,
    }
    const design = {
        backgroundImage: `url(${materialUI})`,
    }
    const [skillState, setSkillState] = useState([
        {title: 'DEVELOPMENT', description: 'React, Redux, REST API etc', img: react},
        {title: 'FOUNDATION', description: 'JS, TS, HTML5, CSS3, SCSS', img: html},
        {title: 'TESTING', description: 'Unit Tests, Storybook', img: tests},
        {title: 'DESIGN', description: 'Material UI, Ant-Design', img: design}
        ])

    return (
        <div className={classes.technologiesBlock} id={'skill'}>
            <div className={`${styleContainer.container} ${classes.technologiesContainer}`}>
                <Title text={'Skills'} />
                <div className={classes.technologies}>
                    <div className={classes.technologiesFirstBlock}>
                        {skillState.map(sk => <Skills title={sk.title} description={sk.description} img={sk.img} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}