import React from "react";

function Board({ className, state, onClick, index }) {
    console.log(className)
    const classes = (className ? `${className} square` : `square`)
    //console.log(classes);
    return (
        <span className={classes + (state === "X" ? ` fc-aqua` : ` fc-white`)}
             onClick={() => onClick(index)}>
           {state}
        </span>
    )
}
export {Board}