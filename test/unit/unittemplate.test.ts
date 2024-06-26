import {
  calculateRouteToStairCase,
  deckCarIsParked,
  determineDirection,
  determineDistance,
  findCarPosition,
  findFloorCarIsParked,
  stairCaseFound,
  startPositionFound,
} from "../../src/template";

describe("This is the test suite for the car park game. Given a car park deck we need to find the quickest route to the exist", () => {
  describe("Before we can start we validate the input", () => {
    describe("To  be able to leave we must start somewhere, so we check if there is a starting position", () => {
      it("two floors, car at first floor --> true", () => {
        const carPark = [
          [1, 0, 0, 2],
          [0, 0, 0, 0],
        ];

        expect(startPositionFound(carPark)).toBe(true);
      });
      it("two floors, no car --> false", () => {
        const carPark = [
          [1, 0, 0, 0],
          [0, 0, 0, 0],
        ];
        expect(startPositionFound(carPark)).toBe(false);
      });
    });
    describe("Except for the ground floor all other floors require a staircase", () => {
      it("two floors, staircase at first floor --> true", () => {
        const carPark = [
          [1, 0, 0, 2],
          [0, 0, 0, 0],
        ];
        expect(stairCaseFound(carPark)).toBe(true);
      });
      it("two floors, no staircase --> false", () => {
        const carPark = [
          [0, 0, 0, 2],
          [0, 0, 0, 0],
        ];
        expect(stairCaseFound(carPark)).toBe(false);
      });
      it("three floors, no staircase at first floor --> false", () => {
        const carPark = [
          [1, 0, 0, 2],
          [0, 0, 0, 0],
          [0, 0, 0, 0],
        ];
        expect(stairCaseFound(carPark)).toBe(false);
      });
      it("three floors, no staircase at second floor --> false", () => {
        const carPark = [
          [0, 0, 0, 0],
          [1, 0, 0, 2],
          [0, 0, 0, 0],
        ];
        expect(stairCaseFound(carPark)).toBe(false);
      });
      it("three floors, staircase at first and second floor --> true", () => {
        const carPark = [
          [1, 0, 0, 2],
          [1, 0, 0, 0],
          [0, 0, 0, 0],
        ];
        expect(stairCaseFound(carPark)).toBe(true);
      });
    });
  });
  describe("Now that our input is valid the car can be located at any deck. So first we need to find it", () => {
    it("two floors, car at first floor", () => {
      const carPark = [
        [1, 0, 0, 2],
        [0, 0, 0, 0],
      ];
      expect(findFloorCarIsParked(carPark)).toBe(1);
    });
    it("four floors, car at third floor", () => {
      const carPark = [
        [0, 0, 0, 0],
        [0, 2, 0, 0],
        [1, 0, 0, 0],
        [0, 0, 0, 0],
      ];
      expect(findFloorCarIsParked(carPark)).toBe(2);
    });
  });
  describe("Now that we know where the car is parked we need to find the route to the staircase", () => {
    describe("First we need to find the position of the car", () => {
      it("four spots, car at fourth spot", () => {
        const floor = [0, 0, 0, 2];
        expect(findCarPosition(floor)).toBe(3);
      });
      it("four spots, car at first spot", () => {
        const floor = [2, 0, 0, 0];
        expect(findCarPosition(floor)).toBe(0);
      });

      describe("Then we need to determine the direction", () => {
        it("stair case left, car at right", () => {
          const floor = [1, 0, 0, 2];
          expect(determineDirection(floor)).toBe("L");
        });
        it("stair case right, car at left", () => {
          const floor = [2, 0, 0, 1];
          expect(determineDirection(floor)).toBe("R");
        });
      });
      describe("Now that we have the direction we calculate the distance", () => {
        it("stair case left, car at right, 3 spots", () => {
          const floor = [1, 0, 0, 2];
          expect(determineDistance(floor)).toBe(3);
        });
        it("stair case right, car at left, 3 spots", () => {
          const floor = [2, 0, 0, 1];
          expect(determineDistance(floor)).toBe(3);
        });
      });
      describe("Now that we have the direction and distance we can calculate the route", () => {
        it("stair case left, car at right, 3 spots", () => {
          const floor = [1, 0, 0, 2];
          expect(calculateRouteToStairCase(floor)).toBe("L3");
        });
        it("stair case right, car at left, 3 spots", () => {
          const floor = [2, 0, 0, 1];
          expect(calculateRouteToStairCase(floor)).toBe("R3");
        });
      });
    });
  });
});
