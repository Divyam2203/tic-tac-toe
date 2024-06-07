import { useState } from "react";

export default function Player({
  initialPlayerName,
  symbol,
  isActive,
  onNameChange,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialPlayerName);

  function clickHandler() {
    setIsEditing((editing) => !editing);
    if (isEditing) {
      onNameChange(symbol, playerName);
    }
  }
  function nameChangeHandler(event) {
    setPlayerName(event.target.value);
  }

  let nameField = <span className="player-name">{playerName}</span>;
  let buttonCaption = "Edit";

  if (isEditing) {
    nameField = (
      <input
        type="text"
        required
        value={playerName}
        onChange={nameChangeHandler}
      ></input>
    );
    buttonCaption = "Save";
  }

  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        <span className="player-symbol">{symbol}</span>
        {nameField}
      </span>
      <button onClick={clickHandler}>{buttonCaption}</button>
    </li>
  );
}
