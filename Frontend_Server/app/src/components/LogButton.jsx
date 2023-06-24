import React from 'react';


let waterDrankTotal = 0;
let waterDrankToday = 0;


function AddWaterButton() {

  function ComputeWater(){
    waterDrankToday++;
    waterDrankTotal++;
    document.getElementById("output").innerHTML = waterDrankToday;
    document.getElementById('output2').innerHTML = waterDrankTotal;
  }


  return(
  <div>
    <div>
      <button type="button" onClick={ComputeWater}>Water +1</button>
    </div>

    <div>
      <p>Total 32oz bottles drank today: <span id="output">{waterDrankToday}</span></p>
      <p>Total All-Time bottles drank: <span id="output2">{waterDrankTotal}</span></p>
    </div>
  </div>

);
}

function ResetDailyButton(){

  function ResetDaily(){

    let drankMessage = "Bottles drank today: " + waterDrankToday;
    waterDrankToday = 0;

    if (waterDrankToday === 0){
      let resetMessage = "Today's total water reset to 0!";
  
      document.getElementById("output").innerHTML = 0;
      document.getElementById('msg').innerHTML = resetMessage;
      document.getElementById('msg2').innerHTML = drankMessage;
    }
  }

  return(
    <div>
    <div>
      <button type="button" onClick={ResetDaily}>Daily Reset</button>
    </div>
    <p><span id='msg'></span></p>
    <p><span id='msg2'></span></p>
    </div>
  );
  
}

export {AddWaterButton, ResetDailyButton};