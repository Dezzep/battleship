import ShipMaker from "./shipmaker";

export default function Gameboard() {
  const Hunley = ShipMaker(3);
  console.log(Hunley);
  const tableStatus = {};
  const createTable = () => {
    const A = [];
    const B = [];
    const C = [];
    const D = [];
    const E = [];
    const F = [];
    const G = [];
    const H = [];
    const I = [];
    const J = [];
    const alpha = [A, B, C, D, E, F, G, H, I, J];
    alpha.forEach((element) => {
      for (let i = 0; i < 10; i += 1) {
        element.push(i + 1);
      }
    });
    return alpha;
  };
  tableStatus.tableLayout = createTable();
  
  const determineShipsPositionOnGameBoard = (ship, alphaCoord, numericCoord) => {
    // for now just horizantal placement.
    for (let i = 0; i < ship.possibleHits.length; i += 1) {
      ship.shipsDamage.gameBoardPosition.push(alphaCoord, numericCoord + i);
    }
  };
  determineShipsPositionOnGameBoard(Hunley, 1, 1);
 console.log(Hunley.shipsDamage.gameBoardPosition);


  const addShipToTable = (ship) => {

  };

  return {
    tableStatus,
  };
}
