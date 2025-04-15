import { useState } from 'react'
import { useSwitch } from './useSwitch'
import React from 'react'

//1.
// function App() {
//   //usando useSwitch voglio ritornarmi un array che ha come primo argomento isOn e toogle 
//   const [isOn, toggle] = useSwitch()//se non passo niente utilizzera il false di default

//   return (
//     <>
//       <h2>Custom Hooks</h2>
//       <h3>il valore e: {isOn? "ON": "OFF"}</h3>
//       <button onClick={toggle}>Cambia stato</button>
//       {/* <button onClick={toggle}>{isOn ? "ON" : "OFF"}</button> */}
//     </>
//   )
// }

// export default App

//2.

//non ce {} quindi non oggetto
// import useDate from './useDate'

// function App(){

//   const currDate = useDate()

//   return(
//     <div>
//       <h1>Data e ora attuali:</h1>
//       <p>{currDate.toLocaleString()}</p>
//     </div>
//   )
// }

// export default App


import useCustomPointer from "./useCustomPointer";

function App() {
  const customPointer = useCustomPointer("🔥");//<span>"🔥"</span>

  return (
    <div>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      {customPointer}
    </div>
  );
}

export default App;