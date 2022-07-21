import classes from './Skills.module.scss'
import React from "react";

type PropsType = {
    title: string
    description: string
    img: {backgroundImage: string}
}

export const Skills: React.FC<PropsType> = ({title, description, img}) => {
    return (
        <div className={classes.skill}>
            <div className={classes.icon} style={img}></div>
            <div className={classes.skillsTitle}><h2>{title}</h2></div>
            <div className={classes.description}>{description}</div>
        </div>
    )
}