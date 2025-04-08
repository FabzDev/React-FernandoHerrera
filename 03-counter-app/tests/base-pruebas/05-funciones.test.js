import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Test: 05-funciones", () => {
  
    test("Recibir objeto correcto", () => {
    
    const usuario = getUser();
  
    expect(usuario).toStrictEqual({
      uid: "ABC123",
      username: "El_Papi1502"
    });

  });

  test("should receive object giving a name", () => {
    //inicializacion
    const nombre = "Alejandro";

    //estimulo
    const gotActiveUser = getUsuarioActivo(nombre);

    expect(gotActiveUser).toStrictEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});
