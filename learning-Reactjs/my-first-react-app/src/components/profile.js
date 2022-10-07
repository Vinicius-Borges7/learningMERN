import Styles from '../css/teste.module.css';

function Profile({name, age, phone, email}){
    return(
        <div className={Styles.littleguy}>
            <h1>Welcome {name}!</h1>
            <p>these are your registrated informations</p>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Cellphone: {phone}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export default Profile;