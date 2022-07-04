const miFuncion = val => {
    if (typeof val === "number") {
        return 3 * val
    }
    throw new Error("Ingrese un numero")
}


const numero = "6";
const logger = require('./logger')
try {
       
    const triple = miFuncion(numero)
    console.log(triple)
    logger.info(triple)
} catch (e) {
    
    console.error(`El valor es: ${e}`)
    console.error("ERROR")
    logger.error("ERROR")
}