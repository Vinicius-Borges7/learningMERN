import Styles from '../css/Styles.module.css';
import React, { useState } from 'react';

function Text({value, mode}){
    return(
        <>
            <p className={mode}>{value}</p>
        </>
    );
}

export default Text;