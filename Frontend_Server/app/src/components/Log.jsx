import React from 'react';
import { AddWaterButton, ResetDailyButton } from './LogButton';

function Log(){


    
    return(
        <div>
            <h2>Log Component</h2>
                <p></p>
                <div className='button'>
                    <AddWaterButton/> 
                </div>
                <div>
                    <ResetDailyButton/>
                </div>
        </div>

    )
}


export {Log}; 
