import React from "react"
import "./LogIn.css"

import { useHistory } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const LogIn = () => {
    const history = useHistory()
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let { userEmail, password } = e.target.elements;
        userEmail = userEmail.value;
        password = password.value
        console.log(userEmail, password)

        fetch('/api/users/logIn', {
            method: "POST",
            body: JSON.stringify({ userEmail, password }),
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((res) => res.json())
            .then((data) => {
                const { success, error } = data
                if (success) {
                    history.replace("/mainPage")
                }
                else {
                    confirmAlert({
                        title: 'Confirm to submit',
                        message: `${error}`,
                        buttons: [
                            {
                                label: 'Ok',
                                onClick: () => { }
                            },

                        ]
                    });
                }
            })
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
            <button id="registerBtn" onClick={handleRegisrtPage}>Register</button>
        </div>
    )

}
export default LogIn