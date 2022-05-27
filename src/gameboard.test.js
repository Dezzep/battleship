/* eslint-disable no-undef */
import Gameboard from './gameboard';

const sea = Gameboard();
test('A ship can be inserted on the grid', () => {
  expect(sea.tableStatus.tableLayout[1][1]).toBe(Hunley.possibleHits[0]);
});

test('Gameboard is a 10x10 grid', () => {
  expect(sea.tableStatus.tableLayout.length * sea.tableStatus.tableLayout[9].length).toBe(100);
  console.log(sea.tableStatus.tableLayout[9][9])
});

test('Gameboard exists', () => {
  expect(Gameboard).toBeTruthy();
});
