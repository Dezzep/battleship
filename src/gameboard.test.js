/* eslint-disable no-undef */
import Gameboard from './gameboard';

let sea = Gameboard();
afterEach(() => {
  sea = Gameboard();
});

test('Incoming attack reports hit on hit', () => {
  sea.addShipToTable(sea.shipPieces[2], sea.table.B, 3);
  expect(sea.receiveAttack(sea.table.B, 4)).toBe('hit');
});
test('Incoming attack reports a miss if no ship present', () => {
  expect(sea.receiveAttack(sea.table.C, 6)).toBe('miss');
});

test('A ship can not overflow the confines of the grid (nothing exceeds x 10 or y 10)', () => {
  expect(sea.addShipToTable(sea.shipPieces[4], sea.table.F, 9)).toBe(1);
});
test('A new ship cannot be placed where another ship already is', () => {
  sea.addShipToTable(sea.shipPieces[2], sea.table.B, 3);
  sea.addShipToTable(sea.shipPieces[3], sea.table.B, 4);
  expect(sea.addShipToTable(sea.shipPieces[3], sea.table.B, 4)).toBe(1);
});

test('A ship can be inserted on the grid', () => {
  sea.addShipToTable(sea.shipPieces[3], sea.table.A, 1);
  expect(sea.table.A[1]).toBe('Cruiser0');
});

test('Gameboard is a 10x10 grid', () => {
  expect(sea.table.J.length).toBe(10);
  expect(sea.table.A.length).toBe(10);
  expect(sea.table.B.length).toBe(10);
  expect(sea.table.C.length).toBe(10);
  expect(sea.table.D.length).toBe(10);
  expect(sea.table.E.length).toBe(10);
  expect(sea.table.F.length).toBe(10);
  expect(sea.table.G.length).toBe(10);
  expect(sea.table.H.length).toBe(10);
  expect(sea.table.I.length).toBe(10);
  console.log(sea.table);
  expect(Object.keys(sea.table).length).toBe(10);
});

test('Gameboard exists', () => {
  expect(Gameboard).toBeTruthy();
});
