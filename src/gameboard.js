import ShipMaker from './shipmaker';

export default function Gameboard() {
  const carrier = ShipMaker(5, 'Carrier');
  const battleship = ShipMaker(4, 'Battleship');
  const submarine = ShipMaker(3, 'Submarine');
  const cruiser = ShipMaker(3, 'Cruiser');
  const destroyer = ShipMaker(2, 'Destroyer');
  const hitsAndMisses = {};
  const shipPieces = [carrier, battleship, submarine, cruiser, destroyer];
  const table = {
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
  Object.values(table).forEach((key) => {
    for (let i = 0; i < 10; i += 1) {
      key.push(i + 1);
    }
  });
  // because this mutates an object directly, it's important to test.
  const setShipsPositionOnGameBoard = (ship, objKey, numericCoord) => {
    // for now just horizantal placement.
    for (let i = 0; i < ship.possibleHits.length; i += 1) {
      objKey[numericCoord + i] = `${ship.name}${i}`;
    }
  };

  const addShipToTable = (ship, objKey, numericCoord) => {
    // prompt user, await for click. pop ship from array. if array 0 no more prompts game starts
    // ensure ship does not overflow on grid
    const spanOfShip = ship.shipLength;
    if (numericCoord + ship.shipLength > 10) {
      console.log('invalid location');
      return 1;
    }
    // ensure no ship overlap/collision
    for (let i = numericCoord; i < numericCoord + spanOfShip; i += 1) {
      if (objKey[i].length > 1) {
        console.log("there's already a ship here!");
        return 1;
      }
    }
    setShipsPositionOnGameBoard(ship, objKey, numericCoord);
    return 0;
  };
  const receiveAttack = (objKey, xCoord) => {
    if (objKey[xCoord].length > 1) {
      return 'hit';
    } return 'miss';
  };
  return {
    hitsAndMisses,
    table,
    addShipToTable,
    shipPieces,
    receiveAttack,
  };
}
