/* eslint-disable no-undef */
import { MutateTurnTo0, Player } from './player';
import Gameboard from './gameboard';

let player1Board = Gameboard();
let player2Board = Gameboard();
let human = Player(player1Board, player2Board);
let ai = Player(player2Board, player1Board);

beforeEach(() => {
  player1Board = Gameboard();
  player2Board = Gameboard();
  human = Player(player1Board, player2Board);
  ai = Player(player2Board, player1Board);
  MutateTurnTo0();
});
test('player is aware that they landed a hit', () => {
  player2Board.addShipToTable(player2Board.shipPieces[2], player2Board.table.C, 5);
  expect(human.attackEnemy(human.enemyBoard.table.C, 5)).toBe('hit');
});

test('player can attack after enemy attacks succesfully', () => {
  human.attackEnemy(human.enemyBoard.table.A, 2);
  expect(human.enemyBoard.hitsAndMisses.length).toBe(1);
  expect(human.attackEnemy(human.enemyBoard.table.A, 4)).toBeTruthy();
});

test('player can not attack if it is not their turn', () => {
  human.attackEnemy(human.enemyBoard.table.A, 5);
  ai.attackEnemy(ai.enemyBoard.table.A, 3);
  expect(ai.attackEnemy(ai.enemyBoard.table.A, 1)).toBe(1);
  expect(human.attackEnemy(human.enemyBoard.table.A, 1)).toBeTruthy();
});
test('attack is registered in right spot', () => {
  human.attackEnemy(human.enemyBoard.table.A, 2);
  expect(human.enemyBoard.hitsAndMisses).toStrictEqual(["A2"]);
});
test('player1 board different than player2', () => {
  expect(human.board === ai.board).toBeFalsy();
});
