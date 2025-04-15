import { useState } from 'react'
import { useSwitch } from './useSwitch'

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

