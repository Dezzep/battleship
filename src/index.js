import './styles.scss';
import { Player } from './player';
import Gameboard from './gameboard';

const player1Board = Gameboard();
const aiBoard = Gameboard();
let gameOver = false;
let writeOnce = false;

// for now the ship pieces will be hardcoded in.
player1Board.addShipToTable(player1Board.shipPieces[0], player1Board.table.A, 2);
player1Board.addShipToTable(player1Board.shipPieces[1], player1Board.table.B, 4);
player1Board.addShipToTable(player1Board.shipPieces[2], player1Board.table.C, 4);
player1Board.addShipToTable(player1Board.shipPieces[3], player1Board.table.F, 6);
player1Board.addShipToTable(player1Board.shipPieces[4], player1Board.table.I, 7);

aiBoard.addShipToTable(aiBoard.shipPieces[0], aiBoard.table.A, 2);
aiBoard.addShipToTable(aiBoard.shipPieces[1], aiBoard.table.B, 4);
aiBoard.addShipToTable(aiBoard.shipPieces[2], aiBoard.table.C, 4);
aiBoard.addShipToTable(aiBoard.shipPieces[3], aiBoard.table.F, 6);
aiBoard.addShipToTable(aiBoard.shipPieces[4], aiBoard.table.I, 7);

const human = Player(player1Board, aiBoard);

export default function appendPlayerBoardToDom(whosBoard, isItPlayerBoard) {
  let tableObject;
  let mainDiv;
  let h2;
  if (isItPlayerBoard) {
    tableObject = human.board.table;
    mainDiv = document.getElementById('players-game-board');
    mainDiv.className = whosBoard;
    mainDiv.id = 'players-game-board';
    h2 = document.createElement('h2');
    h2.innerText = 'Your Board';
    h2.style.color = 'green';
  } else {
    tableObject = human.enemyBoard.table;
    mainDiv = document.getElementById('enemy-board');
    mainDiv.className = whosBoard;
    mainDiv.id = whosBoard;
    h2 = document.createElement('h2');
    h2.innerText = 'Enemy Board';
    h2.style.color = 'red';
  }
  Object.keys(tableObject).forEach((key, value) => {
    const createDiv = document.createElement('div');
    const para = document.createElement('p');
    para.innerText = key;
    para.className = 'letters';
    createDiv.append(para);
    createDiv.className = key;
    const row = Object.values(tableObject)[value];
    row.forEach((tile, i) => {
      const tileDiv = document.createElement('div');
      if (isItPlayerBoard) {
        tileDiv.className = 'players-tile';
        if (tile.length > 2) {
          tileDiv.className = 'ship players-tile';
        }
      } else {
        tileDiv.className = `attackable-tile ${i}`;
      }
      createDiv.append(tileDiv);
    });
    mainDiv.append(createDiv);
  });

  document.body.append(mainDiv);
  const numberRow = () => {
    const parentDiv = document.createElement('div');
    for (let i = 0; i < 11; i += 1) {
      const div = document.createElement('div');
      if (i === 0) {
        div.className = 'hidden';
      } else {
        div.className = 'numbers';
        div.innerText = i;
        div.style.color = 'black';
        div.style.background = 'rgba(47, 70, 202, 0.49)';
        div.style.padding = '0.5em';
      }
      parentDiv.className = 'numbers';
      parentDiv.style.background = 'rgba(47, 70, 202, 0.489)';
      parentDiv.append(div);
    }
    mainDiv.prepend(h2, parentDiv);
  };
  numberRow();
}

appendPlayerBoardToDom('player-board', 'yes');
appendPlayerBoardToDom('enemy-board');

const interpolateDivColumnToObjectSelector = (column) => {
  if (column === 'A') {
    return human.enemyBoard.table.A;
  }
  if (column === 'B') {
    return human.enemyBoard.table.B;
  }
  if (column === 'C') {
    return human.enemyBoard.table.C;
  }
  if (column === 'D') {
    return human.enemyBoard.table.D;
  }
  if (column === 'E') {
    return human.enemyBoard.table.E;
  }
  if (column === 'F') {
    return human.enemyBoard.table.F;
  }
  if (column === 'G') {
    return human.enemyBoard.table.G;
  }
  if (column === 'H') {
    return human.enemyBoard.table.H;
  }
  if (column === 'I') {
    return human.enemyBoard.table.I;
  }
  if (column === 'J') {
    return human.enemyBoard.table.J;
  }
  return 1;
};
const isGameOver = () => {
  if (human.board.gameOver() === 33) {
    gameOver = true;
  }
  if (human.enemyBoard.gameOver() === 33) {
    gameOver = true;
    writeOnce = true;
  }
};
const a = document.querySelectorAll('.A > .players-tile');
const b = document.querySelectorAll('.B > .players-tile');
const c = document.querySelectorAll('.C > .players-tile');
const d = document.querySelectorAll('.D > .players-tile');
const e = document.querySelectorAll('.E > .players-tile');
const f = document.querySelectorAll('.F > .players-tile');
const g = document.querySelectorAll('.G > .players-tile');
const h = document.querySelectorAll('.H > .players-tile');
const i = document.querySelectorAll('.I > .players-tile');
const j = document.querySelectorAll('.J > .players-tile');

const botMove = () => {
  const botsMove = human.groupedCoords;
  let color = 'blue';
  if (human.status.result === 'hit') {
    color = 'red';
  }

  if (!gameOver || writeOnce === false) {
    if (gameOver) { writeOnce = true; } // the game is considered won before this occurs
    if (botsMove.yLetter === 'A') {
      a[botsMove.xAxis].style.background = color;
    }
    if (botsMove.yLetter === 'B') {
      b[botsMove.xAxis].style.background = color;
    }
    if (botsMove.yLetter === 'C') {
      c[botsMove.xAxis].style.background = color;
    }
    if (botsMove.yLetter === 'D') {
      d[botsMove.xAxis].style.background = color;
    }
    if (botsMove.yLetter === 'E') {
      e[botsMove.xAxis].style.background = color;
    }
    if (botsMove.yLetter === 'F') {
      f[botsMove.xAxis].style.background = color;
    }
    if (botsMove.yLetter === 'G') {
      g[botsMove.xAxis].style.background = color;
    }
    if (botsMove.yLetter === 'H') {
      h[botsMove.xAxis].style.background = color;
    }
    if (botsMove.yLetter === 'I') {
      i[botsMove.xAxis].style.background = color;
    }
    if (botsMove.yLetter === 'J') {
      j[botsMove.xAxis].style.background = color;
    }
  }
};

const attackTilesByClicking = () => {
  document.querySelectorAll('.attackable-tile').forEach((tile) => {
    tile.addEventListener('click', () => {
      const column = tile.parentElement.className;
      const arrOfNumbs = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
      arrOfNumbs.forEach((element) => {
        if (tile.className.includes(element)) {
          const rowAttack = element;
          const columnAttack = interpolateDivColumnToObjectSelector(column);
          const attemptedAttack = human.attackEnemy(columnAttack, rowAttack);
          if (attemptedAttack !== 1) { // if the tile was not previously clicked --> valid to click
            if (attemptedAttack === 'hit' && !gameOver) {
              tile.style.background = 'red';
            } else if (!gameOver) {
              tile.style.background = 'blue';
            }
            isGameOver();
            botMove();
            isGameOver();
          }
        }
      });
    });
  });
};
attackTilesByClicking();
