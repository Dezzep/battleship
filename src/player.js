let turnTrackerNumber = 0;
let whosTurnIsIt = 0;
const arrayOfBotChoices = [];
function Player(playerBoard, opposingBoard) {
  const board = playerBoard;
  const enemyBoard = opposingBoard;
  if (turnTrackerNumber > 1) { // -just in case a new game is called
    turnTrackerNumber = 0; // -avoids future bugs
  }
  const playersNumber = turnTrackerNumber;
  turnTrackerNumber += 1;

  const botAttack = () => {
    const x = Math.floor(Math.random() * 10);
    const yRand = Math.floor(Math.random() * 10);
    let y;
    let yLetter; // this is to aid with dom manipulation
    if (yRand === 0) {
      y = board.table.A;
      yLetter = 'A';
    } else if (yRand === 1) {
      y = board.table.B;
      yLetter = 'B';
    } else if (yRand === 2) {
      y = board.table.C;
      yLetter = 'C';
    } else if (yRand === 3) {
      y = board.table.D;
      yLetter = 'D';
    } else if (yRand === 4) {
      y = board.table.E;
      yLetter = 'E';
    } else if (yRand === 5) {
      y = board.table.F;
      yLetter = 'F';
    } else if (yRand === 6) {
      y = board.table.G;
      yLetter = 'G';
    } else if (yRand === 7) {
      y = board.table.H;
      yLetter = 'H';
    } else if (yRand === 8) {
      y = board.table.I;
      yLetter = 'I';
    } else if (yRand === 9) {
      y = board.table.J;
      yLetter = 'J';
    }
    const stringChoice = `${yLetter}:${x}`;
    console.log(stringChoice);
    // this should be rewritten to work with an array which has 100 elements in it
    // then pops them out if they get selected -- just for effeciency
    if (arrayOfBotChoices.includes(stringChoice)) {
      botAttack();
    } else arrayOfBotChoices.push(stringChoice); return { y, x, yLetter };
  };
  const botAttacksThePlayersBoard = () => {
    const groupedCoords = botAttack();
    board.receiveAttack(groupedCoords.y, groupedCoords.x);
    whosTurnIsIt = 0;
    return groupedCoords;
  };
  const attackEnemy = (objKey, xCoord) => {
    if (whosTurnIsIt === playersNumber) {
      const shotFired = enemyBoard.receiveAttack(objKey, xCoord);
      if (shotFired !== 1) {
        if (whosTurnIsIt === 0) {
          whosTurnIsIt = 1;
        } else {
          botAttacksThePlayersBoard();
        }
        if (shotFired === 'hit') {
          return ('hit');
        }
        return ('miss');
      }
    }
    return 1;
  };
  return {
    board,
    playersNumber,
    attackEnemy,
    enemyBoard,
    botAttacksThePlayersBoard,
  };
}

const MutateTurnTo0 = () => {
  whosTurnIsIt = 0;
};

export { MutateTurnTo0, Player };
