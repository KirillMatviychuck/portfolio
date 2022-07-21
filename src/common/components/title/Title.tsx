import classes from './Title.module.scss'
import React from "react";

type PropsType = {
    text: string
}

export const Title: React.FC<PropsType> = ({text}) => {
    return (
        <div className={classes.title}>
            <h2>{text}</h2>
        </div>
    )
}