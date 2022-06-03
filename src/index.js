import './styles.scss';
import { Player } from './player';
import Gameboard from './gameboard';

const player1Board = Gameboard();
const aiBoard = Gameboard();
let gameOver = false;

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
  const mainDiv = document.createElement('div');
  mainDiv.id = 'players-game-board';
  mainDiv.className = whosBoard;
  let tableObject;
  if (isItPlayerBoard) {
    tableObject = human.board.table;
  } else {
    tableObject = human.enemyBoard.table;
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
    mainDiv.prepend(parentDiv);
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
  console.log(botsMove.yLetter);
  if (botsMove.yLetter === 'A') {
    a[botsMove.xAxis].style.background = 'black';
  }
  if (botsMove.yLetter === 'B') {
    b[botsMove.xAxis].style.background = 'black';
  }
  if (botsMove.yLetter === 'C') {
    c[botsMove.xAxis].style.background = 'black';
  }
  if (botsMove.yLetter === 'D') {
    d[botsMove.xAxis].style.background = 'black';
  }
  if (botsMove.yLetter === 'E') {
    e[botsMove.xAxis].style.background = 'black';
  }
  if (botsMove.yLetter === 'F') {
    f[botsMove.xAxis].style.background = 'black';
  }
  if (botsMove.yLetter === 'G') {
    g[botsMove.xAxis].style.background = 'black';
  }
  if (botsMove.yLetter === 'H') {
    h[botsMove.xAxis].style.background = 'black';
  }
  if (botsMove.yLetter === 'I') {
    i[botsMove.xAxis].style.background = 'black';
  }
  if (botsMove.yLetter === 'J') {
    j[botsMove.xAxis].style.background = 'black';
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
              if (human.enemyBoard.gameOver() === 'game over' || human.board.gameOver() === 'game over') {
                gameOver = true;
              }
            } else if (!gameOver) {
              tile.style.background = 'blue';
            }
            botMove();
          }
        }
      });
    });
  });
};
attackTilesByClicking();
