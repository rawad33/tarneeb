import React from "react"
import "./Register.css"
import { useHistory } from "react-router-dom";
const Register = () => {
    const history = useHistory()
    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        let { userEmail, name, imgurl, password } = e.target.elements;
        userEmail = userEmail.value;
        name = name.value
        imgurl = imgurl.value
        password = password.value
        console.log(userEmail, name, imgurl, password)

        fetch('/api/users/register', {
            method: "POST",
            body: JSON.stringify({ userEmail, name, imgurl, password }),
            headers: {
                "Content-Type": "application/json"
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                history.replace("/")
            })

    }

    return (
        <div className="register__page">
            <h1>Register</h1>
            <form onSubmit={handleRegisterSubmit}>
                <label>Email:</label>
                <input type='text' name='userEmail' placeholder="User Email" required />
                <label>Name:</label>
                <input type='text' name='name' placeholder="Nmae" required />

                <label> Profile Picture:</label>
                <input type='text' name='imgurl' placeholder="User Img" required />
                <label>Password:</label>
                <input type='password' name='password' placeholder="Password" required />
                <button type='submit'>Register</button>
            </form>
        </div>
    )

}
export default Register