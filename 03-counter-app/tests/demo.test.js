
test("Esta prueba no debe fallar", () => {
    // Inicialización
    const email = 'fabio@correo.com'
    
    //Estimulo
    const emailTrimmed = email.trim();

    // Acerción

    expect(email).toBe(emailTrimmed)
})