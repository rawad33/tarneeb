import React from "react"
import "./LogIn.css"

import { useHistory } from "react-router-dom";

const LogIn = () => {
    const history = useHistory()
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let { userEmail, password } = e.target.elements;
        userEmail = userEmail.value;
        password = password.value
        console.log(userEmail, password)
    }
    const handleRegisrtPage = () => {
        history.push("/register")
    }
    return (
        <div className="login__page">


            <h1>Log-In</h1>
            <form onSubmit={handleLoginSubmit}>
                <label>Email:</label>
                <input type='text' name='userEmail' placeholder="User Email" required />
                <label>Password:</label>
                <input type='password' name='password' placeholder="Password" required />
                <button type='submit'>Log-In</button>
            </form>
            <button onClick={handleRegisrtPage}>Register</button>
        </div>
    )

}
export default LogIn