import React from "react";
import classes from './ProjectItem.module.scss'


type PropsType = {
    title: string
    description: string
    style: {backgroundImage: string}
    urlAddress: string
}

export const ProjectItem: React.FC<PropsType> = ({title, description, style, urlAddress}) => {
    return (
        <div className={classes.project}>
            <div className={classes.image} style={style}>
                <a href={urlAddress} className={classes.viewBtn}>View</a>
            </div>
            <div className={classes.projectInfo}>
                <h3 className={classes.projectTitle}>{title}</h3>
                <span className={classes.description}>{description}</span>
            </div>
        </div>
    )
}