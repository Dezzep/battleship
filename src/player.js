let turnTrackerNumber = 0;
let whosTurnIsIt = 0;
let status = {};
const groupedCoords = {};
function Player(playerBoard, opposingBoard) {
  const board = playerBoard;
  const enemyBoard = opposingBoard;

  if (turnTrackerNumber > 1) { // -just in case a new game is called
    turnTrackerNumber = 0; // -avoids future bugs
  }
  const playersNumber = turnTrackerNumber;
  turnTrackerNumber += 1;
  const arrayOfChoices = [];
  const arrayOfLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  arrayOfLetters.forEach((letter) => {
    for (let i = 1; i < 11; i += 1) {
      arrayOfChoices.push(letter + i);
    }
  });

  const botAttack = () => {
    const x = Math.floor(Math.random() * arrayOfChoices.length);
    const selection = arrayOfChoices[x];
    arrayOfChoices.splice(x, 1);
    let xAxis;
    const splitTheSelectedElementFromArrayOfChoices = selection.split('');
    const yLetter = splitTheSelectedElementFromArrayOfChoices[0];

    if (splitTheSelectedElementFromArrayOfChoices.length === 3) {
      xAxis = selection[1] + selection[2];
      xAxis -= 1;
    } else {
      xAxis = selection[1];
      xAxis -= 1;
    }
    let y;
    if (yLetter === 'A') {
      y = board.table.A;
    } else if (yLetter === 'B') {
      y = board.table.B;
    } else if (yLetter === 'C') {
      y = board.table.C;
    } else if (yLetter === 'D') {
      y = board.table.D;
    } else if (yLetter === 'E') {
      y = board.table.E;
    } else if (yLetter === 'F') {
      y = board.table.F;
    } else if (yLetter === 'G') {
      y = board.table.G;
    } else if (yLetter === 'H') {
      y = board.table.H;
    } else if (yLetter === 'I') {
      y = board.table.I;
    } else if (yLetter === 'J') {
      y = board.table.J;
    }
    groupedCoords.y = y;
    groupedCoords.xAxis = xAxis;
    groupedCoords.yLetter = yLetter;
    return { y, xAxis, yLetter };
  };
  const attackEnemy = (objKey, xCoord) => {
    if (whosTurnIsIt === playersNumber) {
      const shotFired = enemyBoard.receiveAttack(objKey, xCoord);
      if (shotFired !== 1) {
        if (whosTurnIsIt === 0) {
          whosTurnIsIt = 1;
          botAttack();
          status.result = board.receiveAttack(groupedCoords.y, groupedCoords.xAxis);
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
    groupedCoords,
    status,
  };
}

const MutateTurnTo0 = () => {
  whosTurnIsIt = 0;
};

export { MutateTurnTo0, Player };
