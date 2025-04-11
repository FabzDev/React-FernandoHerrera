import { getImagen } from "../../src/base-pruebas/11-async-await";



describe("Tests on 11-async-await.js", () => {
  test("should return a url gif", async () => {
    const url = await getImagen();
    console.log(url);

    expect(typeof url).toBe("string");
  });
});
