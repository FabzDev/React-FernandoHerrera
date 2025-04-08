import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {
  test('Debe retornar un string y un numero', ()=>{
    //Sujeto de pruebas
    const [leters, numbers] = retornaArreglo();
    
    //Aserciones
    expect(leters).toBe('ABC');
    expect(numbers).toBe(123);
    console.log(numbers);
    
    // expect(typeof leters).toBe("string")
    // expect(typeof numbers).toBe("number")

    expect(leters).toEqual(expect.any(String));
  })
})
