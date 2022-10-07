import Styles from '../css/Styles.module.css';

function Text({value}){
    return(
        <>
            <p className={Styles.Text}>{value}</p>
        </>
    );
}

export default Text;