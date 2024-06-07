export default function Log({turns}){
  return(
    <ol id="log">
      {turns.map((turn) => <li key={`${turn.square.col}${turn.square.row}`}> {turn.player} slected {turn.square.col},{turn.square.row} </li> )}
    </ol>
  )
}