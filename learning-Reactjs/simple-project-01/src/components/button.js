import Styles from '../css/Styles.module.css';
import Text from './text';

function Button(){
    let cont = 0;
    let text = "Yay! anyone clicked me yet";
    let emoji = ":D";

    function messageChanger(){
        cont = cont + 1;
        

        if(cont == 1){
            text = "hm?";
            emoji = ":)";
        }

        if(cont == 2){
            text = "hey!";
            emoji = ":|";
        }

        if(cont == 3){
            text = "stop, it hurts";
            emoji = ":(";
        }

        if(cont == 4){
            text = "I SAID, S T O P ! ! ! !";
            emoji = ">:(";
        }
        
        console.log(cont);
        console.log(text);
        console.log(emoji);
    }

    return(
        <>
            <button onClick={messageChanger} className={Styles.button}>{emoji}</button>
            <Text value={text}/>
        </>
    );
}

export default Button;