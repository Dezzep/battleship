export default class ShipMaker {
  constructor(shipLength) {
    this.shipLength = shipLength;
    this.damage = [];
    this.defeated = false;
  }

  get possibleHits() {
    return this.determinePossibleHits();
  }

  determinePossibleHits = () => {
    const possibleHits = [];
    for (let i = 0; i < this.shipLength; i += 1) {
      possibleHits.push(i);
    }
    return possibleHits;
  };

  isSunk = (dmg, shipLen) => {
    if (dmg.length === shipLen) {
      this.defeated = true;
    }
  };

  hit = (num) => {
    if (!this.damage.includes(num)) {
      this.damage.push(num);
      // Do Stuff To The Dom Function? --
    }
    this.isSunk(this.damage, this.shipLength);
  };
}
