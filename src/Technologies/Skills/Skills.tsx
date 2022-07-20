import classes from './Skills.module.css'
import React from "react";

type PropsType = {
    title: string
    description: string
}

export const Skills: React.FC<PropsType> = ({title, description}) => {
    return (
        <div className={classes.skill}>
            <div className={classes.icon}></div>
            <h3>{title}</h3>
            <span className={classes.description}>{description}</span>
        </div>
    )
}