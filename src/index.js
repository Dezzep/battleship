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

console.log(player1Board);
console.log(aiBoard);

const createPlayerBoard = (DivID) => {
  const boardDiv = document.createElement('div');
  const lettersForColumns = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  boardDiv.id = DivID;
  lettersForColumns.forEach((element) => {
    const createChildDiv = document.createElement('div');
    createChildDiv.className = `column ${element}`;
    boardDiv.append(createChildDiv);
    lettersForColumns.forEach((e, index) => {
      const createGrandChildDiv = document.createElement('div');
      createGrandChildDiv.className = index;
      createChildDiv.append(createGrandChildDiv);
    });
  });
  document.body.append(boardDiv);
};
createPlayerBoard('players-game-board');
