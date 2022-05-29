import ShipMaker from "./shipmaker";

export default function Gameboard() {
  const carrier = ShipMaker(5, 'Carrier');
  const battleship = ShipMaker(4, 'Battleship');
  const submarine = ShipMaker(3, 'Submarine');
  const cruiser = ShipMaker(3, 'Cruiser');
  const destroyer = ShipMaker(2, 'Destroyer');
  const tableStatus = {};
  const shipPieces = [carrier, battleship, submarine, cruiser, destroyer];
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
  determineShipsPositionOnGameBoard(shipPieces[3], createTable.A, 1);
  console.log(shipPieces[3].shipsDamage.gameBoardPosition);

  const addShipToTable = (ship) => {

  };

  return {
    tableStatus,
    createTable,
  };
}
