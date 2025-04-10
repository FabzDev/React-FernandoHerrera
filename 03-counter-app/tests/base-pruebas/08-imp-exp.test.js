import {
  getHeroByOwner,
  getHeroeById,
} from "../../../02-intro-javascript/src/bases/08-import";

describe("Tests on 08-imp-exp.js", () => {
  test("should return Heroe by id", () => {
    const testId = 3;
    const testHeroe = {
      id: 3,
      name: "Superman",
      owner: "DC",
    };

    expect(getHeroeById(testId)).toEqual(testHeroe);

    expect(getHeroeById(100)).toBeFalsy();
  });

  test("should return undefined if the heroe does not exist", () => {
    expect(getHeroeById(100)).toBeFalsy();
  });

  test("should return an array with lenght == 3", () => {
    expect(getHeroByOwner("DC").length).toBe(3);
  });

  test("should return DC Array", () => {
    const DC_array = [
      {
        id: 1,
        name: "Batman",
        owner: "DC",
      },
      {
        id: 3,
        name: "Superman",
        owner: "DC",
      },
      {
        id: 4,
        name: "Flash",
        owner: "DC",
      },
    ];

    expect(getHeroByOwner("DC")).toEqual(DC_array);
  });

  test("should return an array with lenght == 2", () => {
    expect(getHeroByOwner("Marvel").length).toBe(2);
  });

  test("should return Marvel Array", () => {
    const marvelArray = [
      {
        id: 2,
        name: "Spiderman",
        owner: "Marvel",
      },
      {
        id: 5,
        name: "Wolverine",
        owner: "Marvel",
      },
    ];

    expect(getHeroByOwner("Marvel")).toEqual(marvelArray);
  });
});
