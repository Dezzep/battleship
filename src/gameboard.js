import ShipMaker from "./shipmaker";

export default function Gameboard() {
  const ['Hunley'] = ShipMaker(3, 'Hunley');
  console.log(Hunley);
  const tableStatus = {};
  const createTable = {
    A: [],
    B: [],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
    H: [],
    I: [],
    J: [],
  };
  Object.values(createTable).forEach((key) => {
    for (let i = 0; i < 10; i += 1) {
      key.push(i + 1);
    }
  });
  // because this mutates an object directly, it's important to test.
  const determineShipsPositionOnGameBoard = (ship, objKey, numericCoord) => {
    // for now just horizantal placement.
    for (let i = 0; i < ship.possibleHits.length; i += 1) {
      objKey[numericCoord + i] = `${ship.name}${i}`;
    }
  };
  determineShipsPositionOnGameBoard(Hunley, createTable.A, 1);
  console.log(Hunley.shipsDamage.gameBoardPosition);

  const addShipToTable = (ship) => {

  };

  return {
    tableStatus,
    createTable,
  };
}
