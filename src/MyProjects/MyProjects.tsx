import classes from './MyProjects.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import {ProjectItem} from './ProjectItem/ProjectItem'
import {Title} from '../common/components/title/Title';
import todolistImg from '../assets/images/todolist.jpg'
import socialImg from '../assets/images/socialnet.jpg'
import passGen from '../assets/images/projects/passgenerator.png'
import React, {useState} from "react";
//use require to import the module
const Fade = require("react-reveal/Fade")

export const MyProjects = () => {
    const socialNetwork = {
        backgroundImage: `url(${socialImg})`,
    }
    const todolist = {
        backgroundImage: `url(${todolistImg})`,
    }
    const passwordGenerator = {
        backgroundImage: `url(${passGen})`,
    }
    const [projectState, setProjectState] = useState([
        {
            title: 'Social network', description: 'Social network app with using react hooks, routing,\n' +
                'working with REST API, login/logout flow,\n' +
                'pagination, form and validation, file uploading, using\n' +
                'unit tests for code workability', style: socialNetwork
        },
        {
            title: 'Todolist', description: 'Todolist app created with react hooks. routing and \n' +
                'redirects, material UI, REST API request/response flow, unit-tests.', style: todolist
        },
        {
            title: 'Password Generator', description: 'Password generator with customizable values. \n' +
                'Using TypeScript for best code control during development', style: passwordGenerator
        }
    ])
    return (
        <div className={classes.myProjectsBlock} id={'projects'}>
            <Fade>
                <div className={`${styleContainer.container} ${classes.projectsContainer}`}>
                    <Title text={'My Projects'}/>
                    <div className={classes.projectItems}>
                        {projectState.map(el => <ProjectItem title={el.title} description={el.description}
                                                             style={el.style}/>)}
                    </div>
                </div>
            </Fade>
        </div>
    )
}