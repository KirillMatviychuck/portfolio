import React from "react";
import classes from './ProjectItem.module.scss'


type PropsType = {
    title: string
    description: string
    style: {backgroundImage: string}
}

export const ProjectItem: React.FC<PropsType> = ({title, description, style}) => {
    return (
        <div className={classes.project}>
            <div className={classes.image} style={style}>
                <button className={classes.viewBtn}>View</button>
            </div>
            <div className={classes.projectInfo}>
                <h3 className={classes.projectTitle}>{title}</h3>
                <span className={classes.description}>{description}</span>
            </div>
        </div>
    )
}