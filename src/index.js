import './styles.scss';
import { Player } from './player';
import Gameboard from './gameboard';

const player1Board = Gameboard();
const aiBoard = Gameboard();

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
        if (tile.length > 2) {
          tileDiv.className = 'ship';
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

const attackTilesByClicking = () => {
  document.querySelectorAll('.attackable-tile').forEach((tile) => {
    tile.addEventListener('click', () => {
      console.log(tile.parentElement.className);
      console.log(tile.className);
      if (tile.className.includes('0')) {
        console.log('tru fam');
      }
    });
  });
};
attackTilesByClicking();