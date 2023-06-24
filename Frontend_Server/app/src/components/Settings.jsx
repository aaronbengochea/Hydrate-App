import React, { useEffect } from 'react';
import { EffectTutorial } from './EffectHook';
import {ReducerTutorial} from './ReducerHook'
import { StateTutorial } from './StateHook';


function Settings(){

    useEffect(() => {
        console.log("Checking in on Startup")
    }, []);


    return(
        <div>
            <h2>Testing Page</h2>
            <p></p>
     

            <div>
            <StateTutorial/>
            </div>

            <p></p>

            <div>
            <ReducerTutorial/>
            </div>

            <p></p>
            {/* <div>
            <EffectTutorial/>
            </div> */}

        </div>
 
 
 )
}

export {Settings};