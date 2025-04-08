import { getSaludo } from '../../src/base-pruebas/02-template-string'

describe('Test: 02-template-string.js', () => {
  test('Should return greetings', () => {
    const name = "Fabio"
    const message = getSaludo(name);

    expect(message).toBe("Hola Fabio")
  })
  
})
