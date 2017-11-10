// Code your solution in this file!
function distanceFromHqInBlocks(to) {
  return Math.abs(to - 42);
}

function distanceFromHqInFeet(to) {
  return distanceFromHqInBlocks(to) * 264;
}

function distanceTravelledInFeet(from, to) {
  return Math.abs(from - to) * 264;
}

function calculatesFarePrice(start, destination) {
  const distance = destination - start;
  switch(distance) {
    case < 400:
      return 0;
  }
}