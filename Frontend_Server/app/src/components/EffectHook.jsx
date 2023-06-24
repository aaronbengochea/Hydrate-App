import React, { useState, useEffect } from 'react';
import axios from "axios";



function EffectTutorial() {
    const [data, setData] = useState(1);
    const [count, setCount] = useState(0);


    //does it twice, figure out why
    useEffect(() => {
        console.log("Checking in on Startup")
        
    }, []);


    return(
        <div>
            <h2>Effect Hook</h2>
            <p>{data}</p>
            <p>{count}</p>
            <button onClick={() => {setCount(count + 1); setData(data + data)}}>Click Me</button>
        </div>
);
};

export {EffectTutorial};













