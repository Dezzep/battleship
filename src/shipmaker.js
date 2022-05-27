const ShipMaker = (len) => {
  const shipLength = len;
  const shipsDamage = {};
  shipsDamage.damage = [];
  shipsDamage.defeated = false;
  const possibleHits = [];
  const determinePossibleHits = () => {
    for (let i = 0; i < shipLength; i += 1) {
      possibleHits.push(i);
    }
    return possibleHits;
  };
  const isSunk = (dmg, shipLen) => {
    if (dmg.length === shipLen) {
      shipsDamage.defeated = true;
    }
  };
  const hit = (num) => {
    if (!shipsDamage.damage.includes(num)) {
      shipsDamage.damage.push(num);
      // Do Stuff To The Dom Function? --
    }
    isSunk(shipsDamage.damage, shipLength);
  };
  return {
    possibleHits: determinePossibleHits(), hit, isSunk, shipLength, shipsDamage,
  };
};

export { ShipMaker };
