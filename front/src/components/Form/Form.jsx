import { useState } from "react";
import validation from "./validation";
import style from './Form.module.css';


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
        <form className={style.formContenedor} onSubmit={handleSubmit}>
            <label className={style.formLabel} htmlFor="username" >Usuario</label>
            <input className={style.formInput} type="text" name="username" value={userData.username} onChange={handleInputChange} />
            {errors.username && <p className={style.formError}>{errors.username}</p>}

            <br />
            <label className={style.formLabel} htmlFor="password" >Contraseña</label>
            <input className={style.formInput} type="password" name="password" value={userData.password} onChange={handleInputChange} />
            {errors.password && <p className={style.formError}>{errors.password}</p>}

            <br />
            <button className={style.formBtn} type="submit">Entrar</button>
        </form>
    )
}

export default Form;