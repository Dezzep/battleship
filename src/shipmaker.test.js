/* eslint-disable no-undef */
import ShipMaker from './shipmaker';

const coolBattleShip = ShipMaker(3, 1, 1);
afterEach(() => {
  coolBattleShip.shipsDamage.damage = [];
});
test('when all parts of ship are hit, the ship sinks', () => {
  coolBattleShip.hit(0);
  coolBattleShip.hit(0);
  coolBattleShip.hit(0);
  coolBattleShip.hit(2);
  coolBattleShip.hit(1);
  expect(coolBattleShip.shipsDamage.defeated).toBeTruthy();
});
test('hit function does not register on same part of the ship twice', () => {
  coolBattleShip.hit(2);
  coolBattleShip.hit(2);
  expect(coolBattleShip.shipsDamage.damage).toStrictEqual([2]);
});

test('hit function pushes to damage array', () => {
  coolBattleShip.hit(2);
  expect(coolBattleShip.shipsDamage.damage).toStrictEqual([2]);
});
test('possible hits is [0 1 2]', () => {
  const arr = [0, 1, 2];
  expect(coolBattleShip.possibleHits).toStrictEqual(arr);
});
