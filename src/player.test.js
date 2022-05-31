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
test('When the player fires and lands a hit, the string: "hit" is returned ', () => {
  player2Board.addShipToTable(player2Board.shipPieces[2], player2Board.table.C, 5);
  expect(human.attackEnemy(human.enemyBoard.table.C, 5)).toBe('hit');
});

test('When the player attacks and then the ai attacks, the player can attack again', () => {
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
test('A players attack is registered in the hitsAndMisses array', () => {
  human.attackEnemy(human.enemyBoard.table.A, 2);
  expect(human.enemyBoard.hitsAndMisses).toStrictEqual(["A2"]);
});
test('Both Players have different objects as boards.', () => {
  expect(human.board === ai.board).toBeFalsy();
});
