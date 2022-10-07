import Styles from '../css/Styles.module.css';
import Text from './text';
import React, { useState } from 'react';

function Button(){
    const [ text, setText ] = React.useState("Yay! anyone clicked me yet");
    const [ emoji, setEmoji ] = React.useState(":D");
    const [ cont, setCont ] = React.useState(1);
    const [ mode, setMode] = React.useState(Styles.text);
    const [ btnMode, setBtnMode ] = React.useState(Styles.button);

    function messageChanger(){
        setCont(cont + 1);

        if(cont == 1){
            setText("hm?");
            setEmoji(":)");
        }

        if(cont == 2){
            setText("hey!");
            setEmoji(":|");
        }

        if(cont == 3){
            setText("stop, it hurts");
            setEmoji(":(");
        }

        if(cont == 4){
            setText("I SAID STOP!");
            setEmoji(">:(");
            setMode(Styles.rageText);
            setBtnMode(Styles.rageButton)
        }
    }

    return(
        <>
            <button onClick={messageChanger} className={btnMode}>{emoji}</button>
            <Text value={text} mode={mode}/>
        </>
    );
}

export default Button;