export function startPositionFound(carPark: number[][]): boolean {
  return carPark.some((floor) => floor.includes(2));
}

export function stairCaseFound(carPark: number[][]): boolean {
  return carPark.slice(0, -1).every((floor) => floor.includes(1));
}

export function deckCarIsParked(carPark: number[][]): number {
  return carPark.findIndex((floor) => floor.includes(2));
}

export function findFloorCarIsParked(carPark: number[][]): number {
  const index = carPark.findIndex((floor) => floor.includes(2));
  return carPark.length - index - 1;
}

export function findCarPosition(floor: number[]): number {
  return floor.indexOf(2);
}
export function determineDirection(floor: number[]): string {
  const postionCar = findCarPosition(floor);
  const positionStairCase = floor.indexOf(1);
  return postionCar > positionStairCase ? "L" : "R";
}

export function determineDistance(floor: number[]): number {
  const postionCar = findCarPosition(floor);
  const positionStairCase = floor.indexOf(1);
  return Math.abs(postionCar - positionStairCase);
}

export function calculateRouteToStairCase(floor: number[]): string {
  const direction = determineDirection(floor);
  const distance = determineDistance(floor);
  return `${direction}${distance}`;
}
