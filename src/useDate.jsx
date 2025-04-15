import React from 'react'
import React, { useEffect } from 'react'
import { useState } from 'react'

const useDate = () => {
    //Crea uno stato currDate con la data/ora nel momento in cui il componente viene renderizzato.
    const [currDate, setCurrDate] = useState(new Date())//stato che la data del momento in cui viene creato

    //gestisce aggiornamento
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrDate(new Date())
        }, 1000)
        return ()=> {
            clearInterval(interval)//cancella l'intervallo quando il componente viene smontato
        }
    },[])


  return currDate 
}

export default useDate