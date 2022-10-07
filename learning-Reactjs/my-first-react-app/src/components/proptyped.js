import PropTypes from 'prop-types';
import Styles from '../css/teste.module.css';

proprop.protoTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
}

function proprop({name, age}){
    return(
        <div className={Styles.littleguy}>
            <h1>i arent michael jackson! :(</h1>
            <p>my R E A L name is {name}</p>
            <p>and i have {age} years old</p>
        </div>
    )
}



export default proprop;