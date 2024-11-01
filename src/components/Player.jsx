import { useState } from "react";

export default function Player({initialName, symbol , isActive , onChangeName}){
  const [playerName,setPlayerName] = useState(initialName);
  const [ isEditing , setIsEditing] = useState(false);

  function handleEditingClick(){
    setIsEditing((editing) => !editing);
   if(isEditing){
    onChangeName(symbol,playerName);
   }
  }
  function handleChange(e){
    setPlayerName(e.target.value);
  }

  let editableplayerName = <span className="player-name">{playerName}</span>;

  if(isEditing){
    editableplayerName = <input type="text" required value={playerName} onChange={handleChange}/>
  }

    return(
        <li className={isActive ? 'active':undefined}>
        <span className="player">
        {editableplayerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditingClick}>{isEditing ? 'Save' : 'Edit'}</button>
      </li>
    );
}