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

const appendPlayerBoardToDom = () => {
  const mainDiv = document.createElement('div');
  mainDiv.id = 'players-game-board';
  const tableObject = human.board.table;
  Object.keys(tableObject).forEach((key, v) => {
    const createDiv = document.createElement('div');
    createDiv.innerText = key;
    createDiv.className = key;
    const row = Object.values(tableObject)[v];
    row.forEach((tile) => {
      const tileDiv = document.createElement('div');
      tileDiv.innerText = tile;
      createDiv.append(tileDiv);
    });
    mainDiv.append(createDiv);
  });
  // Object.values(tableObject).forEach((value) => {
  //   for (let i = 0; i < value.length; i += 1) {
  //     const childDiv = document.createElement('div');
  //     childDiv.innerText = value[i];
  //     childDiv.className = 'x-coord';
  //     createDiv.append(childDiv);
  //     console.log(value[i]);
  //   }
  //   console.log(value);
  // });

  document.body.append(mainDiv);
};
appendPlayerBoardToDom();
// const createPlayerBoard = (DivID) => {
//   // creates the grid along with the alphebetical Y axis and the numerical X axis.
//   const boardDiv = document.createElement('div');
//   const lettersForColumns = ['numbers', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
//   boardDiv.id = DivID;
//   lettersForColumns.forEach((element, i) => {
//     const createChildDiv = document.createElement('div');
//     createChildDiv.className = `column ${element}`;
//     boardDiv.append(createChildDiv);
//     lettersForColumns.forEach((e, index) => {
//       const createGrandChildDiv = document.createElement('div');
//       if (i === 0) {
//         if (index !== 0) {
//           createGrandChildDiv.innerText = index;
//         }
//         createGrandChildDiv.className = 'numbers';
//       }
//       if (index - 1 === -1) {
//         createGrandChildDiv.className = 'identify';
//         if (element !== 'numbers') {
//           createGrandChildDiv.innerText = element;
//         }
//       } else if (createGrandChildDiv.className !== 'numbers') {
//         createGrandChildDiv.className = index - 1;
//       }
//       createChildDiv.append(createGrandChildDiv);
//     });
//   });
//   document.body.append(boardDiv);
// };

// const prettyMuchDoEverythingDomRelatedAllAtOnceInANiceAndDescriptiveFunctionThatMightBeAFunctionThatsJustTurningIntoAJoke = () => {
//   createPlayerBoard('players-game-board');
// };
// prettyMuchDoEverythingDomRelatedAllAtOnceInANiceAndDescriptiveFunctionThatMightBeAFunctionThatsJustTurningIntoAJoke();

// const player1BoardTiles = document.querySelectorAll('#players-game-board > .A > div, #players-game-board .B > div,#players-game-board .C > div, #players-game-board .D > div,#players-game-board .E > div,#players-game-board .F > div,#players-game-board .G > div,#players-game-board .H > div,#players-game-board .I > div,#players-game-board .J > div');
// const splitPlayer1BoardTilesInto10 = (board) => {
  
// }
// const linkBattleShipPositionToDom = () => {
//   player1BoardTiles.forEach((element) => {
//     if (element.className !== 'identify') {
//       console.log(element);
//     }
//   })
//   const tableObject = human.board.table
//   Object.keys(tableObject).forEach(key => {
//     console.log(key, tableObject[key]);
//   });
// };

// const changeAColor = () => {

//   player1BoardTiles.forEach((element) => {
//     element.addEventListener('click', () => {
//       if (element.className !== 'identify') {
//         element.style.background = 'black';
//       }
//     });
//   });
// };
// changeAColor();
// linkBattleShipPositionToDom();
