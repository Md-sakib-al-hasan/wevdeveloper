import { useState } from "react"

export default function Player (){
    const [team,setTeam] = useState(11);
    const handleAdd = () => {
        setTeam(team+1);
    }
    const handleremove = () => {
        setTeam(team-1);
    }
    const styletem= {
        margin: '15px',
        padding: '15px',
        border: '2px solid purple',
        borderRadius: '15px',
    }
   return(
     <div style={styletem}>
        <h3>Players:{team}</h3>
        <button onClick={handleAdd} >Add</button>
        <button onClick={handleremove} >Remove</button>
     </div>
   )
}