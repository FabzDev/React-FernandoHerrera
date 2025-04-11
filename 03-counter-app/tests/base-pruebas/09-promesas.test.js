import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("tests on 09-promesas", () => {
  test("should return a hero", (done) => {
    const idTest = 1;
    const heroTest = {
      id: 1,
      name: "Batman",
      owner: "DC",
    };

    getHeroeByIdAsync(idTest).then((hero) => {
        expect(hero).toEqual(heroTest)
        done()
    });
  });

  test("should return an error", (done) => {
    const idTest = 100;
    const heroTest = {
      id: 1,
      name: "Batman",
      owner: "DC",
    };

    getHeroeByIdAsync(idTest)
    .then((hero) => {
        expect(hero).toEqual(heroTest)
        done()
    })
    .catch( (error) => {
        expect(error).toBeTruthy();
        done()
    })
  });
});
