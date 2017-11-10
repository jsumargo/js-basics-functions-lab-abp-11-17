// Code your solution in this file!
function distanceFromHqInBlocks(to) {
  return Math.abs(to-42);
}

function distanceFromHqInFeet(to) {
  return distanceFromHqInBlocks(to) * 264;
}