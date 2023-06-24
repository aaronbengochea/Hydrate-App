
import React from 'react';
import { useState} from 'react';



function StateTutorial() {



    const [inputValue, setInputValue] = useState("Aaron");

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
    }


    return(
        <div>
            <h2>State Hook</h2>
            <input placeholder='Enter here..' onChange={onChange}/>
            <p>{inputValue}</p>
        </div>
);
};

export {StateTutorial};