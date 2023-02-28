import styles from "./Form.module.css";
import { useState } from "react";
import validation from "./validation";

const Form = ({ login }) =>{

    const [userData, setUserData] = useState ({
        username: "",
        password: ""
    })

 const [errors, setErrors] = useState ({
        username:"",
        password:""
    })

    const handleInputChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }
   
    return (
        <form onSubmit={handleSubmit}>
            <label className={styles.datos} htmlFor="">Email: example@example.com</label><br />
            <label className={styles.datos} htmlFor="">Password: asd123</label> <br />
            <label htmlFor="username">Email: </label>
            <input  type="text" name="username" value={userData.username} onChange={handleInputChange}
             /> <br />
            {errors.username && <p style={{color: "red"}}>{errors.username}</p>}

            <label htmlFor="password">Password: </label>
            <input  type="password" name="password" value={userData.password} onChange={handleInputChange}
             /> <br />
            {errors.password && <p style={{color: "red"}}>{errors.password}</p>}
            <button>Entrar</button>
        </form>
    )
}

export default Form;