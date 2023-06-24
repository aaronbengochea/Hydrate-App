import axios from 'axios';
import React from 'react';



function Leaderboard(){

    let temp = ''

    axios.get('http://localhost:5000/backend_check')
    .then(res => {
        //temp = res.data;
        console.log(res)
    })



    return(
        <div>
            <h2>Leaderboard</h2>
            <p>Will contain user competitive stats</p>
            <div>{temp}</div>               
        </div>
    );
}

export {Leaderboard};