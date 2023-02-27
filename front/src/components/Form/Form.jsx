import { useState } from "react";
import validation from "./validation";

const Form = ({ login }) => {

    const [userData, setUserData] = useState({
        username: '',
        password: ''
    })

    const [errors, setErrors] = useState({
        username: '',
        password: ''
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
            <label htmlFor="username" >Usuario: </label>
            <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
            {errors.username && <p>{errors.username}</p>}

            <br />
            <label htmlFor="password" >Contraseña: </label>
            <input type="password" name="password" value={userData.password} onChange={handleInputChange} />
            {errors.password && <p>{errors.password}</p>}

            <br />
            <button type="submit">Entrar</button>
        </form>
    )
}

export default Form;