import ShipMaker from './shipmaker';

export default function Gameboard() {
  const carrier = ShipMaker(5, 'carrier');
  const battleship = ShipMaker(4, 'battleship');
  const submarine = ShipMaker(3, 'submarine');
  const cruiser = ShipMaker(3, 'cruiser');
  const destroyer = ShipMaker(2, 'destroyer');
  const hitsAndMisses = [];
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
  const searchForObjectBasedOnNameAndReturnObject = (nameOfObject) => {
    let obj;
    shipPieces.forEach((element) => {
      if (element.name === nameOfObject) {
        obj = element;
        return 0;
      }
      return 0;
    });
    return obj;
  };
  const receiveAttack = (objKey, xCoord) => {
    let shipName = objKey[xCoord];
    const coords = `x:${xCoord} y:${objKey[xCoord]}`;
    if (hitsAndMisses.includes(coords)) { return 1; } // disallows duplicate fires
    hitsAndMisses.push(coords);
    if (objKey[xCoord].length > 1) {
      const hasNumber = /\d/;
      let hitNumber = '';
      if (hasNumber.test(shipName)) {
        hitNumber = shipName.slice(-1);
        shipName = shipName.slice(0, -1);
      }
      const shipsObject = searchForObjectBasedOnNameAndReturnObject(shipName);
      shipsObject.hit(hitNumber);
      return 'hit';
    }
    return 'miss';
  };
  return {
    hitsAndMisses,
    table,
    addShipToTable,
    shipPieces,
    receiveAttack,
  };
}
