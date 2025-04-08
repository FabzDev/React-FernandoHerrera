import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("06-deses-obj Tests", () => {
  test("Devuelve el objeto adecuado", () => {
    //i
    const clave = "Eren";
    const edad = "22";
    const objTest = {
      clave: "Eren",
      nombre: "AOT",
      edad: "22",
      rango: "Sargento",
    };

    //e
    const context = usContext(objTest);

    //a
    expect(context).toEqual({
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
