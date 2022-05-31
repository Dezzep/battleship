/* eslint-disable no-undef */
import ShipMaker from './shipmaker';

const coolBattleShip = ShipMaker(3, 'ship');
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
test('If a player tries to hit a ship or empty tile more than once: nothing should happen', () => {
  coolBattleShip.hit(2);
  coolBattleShip.hit(2);
  expect(coolBattleShip.shipsDamage.damage).toStrictEqual([2]);
});

test('When a ship is hit it should push a value to the ships hit array', () => {
  coolBattleShip.hit(2);
  expect(coolBattleShip.shipsDamage.damage).toStrictEqual([2]);
});
test('The possible hits of a ship with a length of 3 is: [0 1 2]', () => {
  const arr = ['ship0', 'ship1', 'ship2'];
  expect(coolBattleShip.possibleHits).toStrictEqual(arr);
});
