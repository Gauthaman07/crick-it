import React from 'react';
import * as classes from './elements.module.scss'

const Customloader = ({ message = "Loading..." }) => {
    return (
        <div className={classes.loaderContainer}>
            <div className={classes.spinner}></div>
            <p className={classes.loaderMessage}>{message}</p>
        </div>
  
    );
};

export default Customloader;
