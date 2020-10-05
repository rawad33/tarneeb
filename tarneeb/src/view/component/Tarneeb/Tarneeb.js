import React, { useEffect, useContext, useState } from 'react'
import './Tarneeb.css'
import chair from "../../img/chair.png";
import table from '../../img/badge.png'
import { UserContext } from "../../../App";


const players = [
    { name: 'player 1', pic: chair },
    { name: 'player 2', pic: chair },
    { name: 'player 3', pic: chair },
    { name: 'player 4', pic: chair }
]

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

    const [palyer, setPlayer] = useState(players)


    useEffect(() => {

        fetch('/api/users/connectedUsers', {
            method: "POST",
            body: JSON.stringify({ userEmail }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                let { success, error, info } = data;
                if (success) {
                    console.log(info)
                }
            });


    }, [])

    const handleSitPlayer = (index) => {
        players[index].name = userName;
        players[index].pic = userPic
        const newPlayers = [...players]
        setPlayer(newPlayers)


    }
    return (
        <div className='tarneeb__page'>
            <h1>Tarneeb</h1>
            <div className="tarneeb__app">

                <div className='tarneeb__room'>
                    <div className="room_player" onClick={() => handleSitPlayer(0)}>
                        <img src={palyer[0].pic} alt={palyer[0].name} />
                        <h3>{palyer[0].name}</h3>
                    </div>
                    <div className='room__player-table'>
                        <div className="room_player" onClick={() => handleSitPlayer(3)}>
                            <img src={palyer[3].pic} alt={palyer[3].name} />
                            <h3>{palyer[3].name}</h3>
                        </div>
                        <img src={table} alt="table" id='table' />
                        <div className="room_player" onClick={() => handleSitPlayer(1)}>
                            <img src={palyer[1].pic} alt={palyer[1].name} />
                            <h3>{palyer[1].name}</h3>
                        </div>
                    </div>
                    <div className='room_player' onClick={() => handleSitPlayer(2)} >
                        <img src={palyer[2].pic} alt={palyer[2].name} />
                        <h3>{palyer[2].name}</h3>
                    </div>

                </div>
                <div className="tarneeb__table">
                    <div className='table__playerName'>
                        <span className='playr-col'>
                            {palyer[0].name}
                        </span>
                        <span className='playr-col'>
                            {palyer[1].name}
                        </span>
                        <span className='playr-col'>
                            {palyer[2].name}
                        </span>
                        <span className='playr-col'>
                            {palyer[3].name}
                        </span>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Tarneeb;