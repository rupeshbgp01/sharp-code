import React, { useState } from "react";
import { useDispatch } from "react-redux"
import {useNavigate } from 'react-router-dom'
import { login } from "../../Services/Operations/apiAuth"
import "./Forms.css";
export default function Login() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })


    const { email, password } = formData

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const handleOnSubmit = async(e) => {
        e.preventDefault()
        dispatch(login(email, password, navigate))
}

    return (
        <div className="login">
        <div className="login__container">
            <h1 className="title"> Login</h1>
            {/* <form onSubmit={handleOnSubmit} className="form__box"> */}
            <form  className="form__box">
                <div className="form-control">

                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div className="form-control">

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={handleOnChange}
                        required
                    />
                </div>
                <div className="form-control ">
                    <label></label>
                    <button className="primary-btn btn">Coming Soon</button>
                    {/* <button type="submit" className="primary-btn btn">Login</button> */}
                </div>
                <a className="createnewact" href="">Forget password?</a> |
                <a className="createnewact" href="/register"> create new account?</a>
            </form>
        </div>

        </div>
    );
   

}

