/* eslint-disable no-undef */
import Gameboard from './gameboard';

const sea = Gameboard();
test('A ship can be inserted on the grid', () => {
  expect(sea.createTable.A[1]).toBe('Cruiser0');
});

test('Gameboard is a 10x10 grid', () => {
  expect(sea.createTable.J.length).toBe(10);
  expect(sea.createTable.A.length).toBe(10);
  expect(sea.createTable.B.length).toBe(10);
  expect(sea.createTable.C.length).toBe(10);
  expect(sea.createTable.D.length).toBe(10);
  expect(sea.createTable.E.length).toBe(10);
  expect(sea.createTable.F.length).toBe(10);
  expect(sea.createTable.G.length).toBe(10);
  expect(sea.createTable.H.length).toBe(10);
  expect(sea.createTable.I.length).toBe(10);
  console.log(sea.createTable);
  expect(Object.keys(sea.createTable).length).toBe(10);
});

test('Gameboard exists', () => {
  expect(Gameboard).toBeTruthy();
});
