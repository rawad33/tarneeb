import React, { useEffect, useContext, useState } from 'react'
import './Tarneeb.css'
import chair from "../../img/chair.png";

import { UserContext } from "../../../App";

const Tarneeb = () => {
    const {
        userName,
        setUserName,
        userPic,
        setUserPic,
        nav,
        setNav,
        userEmail, setUserEmail
    } = useContext(UserContext);

    const [palyer1Name, setPlayer1Name] = useState('Player 1')
    const [palyer1Pic, setPlayer1Pic] = useState(chair)

    useEffect(() => {

        fetch('/api/users/connectedUsers', {
            method: "POST",
            body: JSON.stringify({ userEmail }),
            headers: {
                "Content-Type": "application/json",
            },
        })
    }, [])

    const csc = () => {
        setPlayer1Name(userName)
        setPlayer1Pic(userPic)
    }
    return (
        <div className='tarneeb__page'>
            <h1>Tarneeb</h1>
            <div className="tarneeb__app">
                <div className='tarneeb__room'>
                    <div className="room_player" onClick={csc}>
                        <img src={palyer1Pic} alt={palyer1Name} />
                        <h3>{palyer1Name}</h3>
                    </div>
                    <div className='room_player' >
                        <img src={palyer1Pic} alt={palyer1Name} />
                        <h3>{palyer1Name}</h3>
                    </div>

                </div>
                <div className="tarneeb__table"></div>
            </div>
        </div>
    )
}
export default Tarneeb;