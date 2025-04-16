import React, { useEffect } from 'react'
import { useState } from 'react'

export const useSwitch = (initialValue = false) => {
    //se metto false Tutti i componenti userebbero false come valore iniziale, 
    //senza possibilità di personalizzarlo
    const [change, setChange] = useState(initialValue)//se metto false Tutti i componenti partirebbero da false 

    //Evito di scrivere () => setIsOn(!isOn) ogni volta nel componente.
   const toggle = () => {
    setChange(!change)
    //setChange(curr => !curr)
   }
   
  return [change, toggle]
    //posso tornare anceh oggetto: return { value: change, toggle }
}

// come uso Usare Questo Hook 
//   Toggle UI: Interruttori, menu a scomparsa, modal.

// Gestione stati booleani: Caricamenti, abilitazioni, flag.

// Esempio (con callback):

// const toggle = () => {
//   setChange(prev => {
//     const newValue = !prev;
//     console.log(`Passato da ${prev} a ${newValue}`);
//     return newValue;
//   });
// };