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
    if (yRand === 0) {
      y = board.table.A;
    } else if (yRand === 1) {
      y = board.table.B;
    } else if (yRand === 2) {
      y = board.table.C;
    } else if (yRand === 3) {
      y = board.table.D;
    } else if (yRand === 4) {
      y = board.table.E;
    } else if (yRand === 5) {
      y = board.table.F;
    } else if (yRand === 6) {
      y = board.table.G;
    } else if (yRand === 7) {
      y = board.table.H;
    } else if (yRand === 8) {
      y = board.table.I;
    } else if (yRand === 9) {
      y = board.table.J;
    }
    const stringChoice = `${y}:${x}`;
    if (arrayOfBotChoices.includes(stringChoice) || arrayOfBotChoices >= 100) {
      botAttack();
    } else arrayOfBotChoices.push(stringChoice); return { y, x };
  };
  const attackEnemy = (objKey, xCoord) => {
    if (whosTurnIsIt === playersNumber) {
      const shotFired = enemyBoard.receiveAttack(objKey, xCoord);
      if (shotFired !== 1) {
        if (whosTurnIsIt === 0) {
          whosTurnIsIt = 1;
        } else {
          const groupedCoords = botAttack();
          board.receiveAttack(groupedCoords.y, groupedCoords.x);
          whosTurnIsIt = 0;
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
  };
}

const MutateTurnTo0 = () => {
  whosTurnIsIt = 0;
};

export { MutateTurnTo0, Player };
