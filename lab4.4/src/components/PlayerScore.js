function PlayerScore(props) {
  let classes = 'card active';
  if (props.active === true) {
    classes += ' active';
  }
  return (
    <div className={classes}>
      <h1>Player {props.name}</h1>
      <p className='player-score'>0</p>
    </div>
  );
}
export default PlayerScore;
