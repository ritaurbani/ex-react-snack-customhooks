import React, { useEffect, useState } from 'react'
//passiamo componente che vogliamo far vedere
const useCustomPointer = (component) => {
    //cambiare cursore mouse
    //creare elemneto fittizio che segue mouse> 
    //quindi calcolare posizione mouse sempre
    //questo elemento (fire) segue sempre il mouse quindi i pointer events sono attivi su di lui
    

    const [position, setPosition] = useState({x:0, y:0})

useEffect(()=>{
    //quando si fa addeventlsitener in un userEffect > fare cleanup function
    const handleMouseMove = event => {
        setPosition({x: event.clientX, y: event.clientY})
    }
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove)
},[])
  return (
<div 
style={{
    position:"fixed",//per stare sopra e seguire il mouse
    top: position.y,//fuoco stare nella stessa posizione del mouse
    left:position.x,//inteso come top lef x y
    transform: "translate(-50%, -50%)", //per girare l icona 
    cursor: "none" //icona copre sempre freccia
}}>
    {/* //inseriamo in un contenitore */}
    {component}
</div>

  )
  
}

export default useCustomPointer
