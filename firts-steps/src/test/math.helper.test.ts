import { describe, expect, test } from "vitest"
import { multiplicacion, resta, suma } from "../helpers/math.helper";



describe('suma', () => {

    test('probando numeros positivos', () => {

        //! 1. Arrange
        const a = 2;
        const b = 2;
        //! 2. Act
        const result = suma(a, b);
        //! 3. Assert
        expect(result).toBe(a + b);


    });

    test('probando numeros negativos', () => {

        //! 1. Arrange
        const a = -2;
        const b = -3;
        //! 2. Act
        const result = suma(a, b);
        //! 3. Assert
       //console.log(result)
        expect(result).toBe(a + b);


    });
    
});


describe('resta', () => {

    test('probando numero negativos', () => {

        //! 1. Arrange
        const a = 2;
        const b = 2;
        //! 2. Act
        const result = resta(a, b);
        //! 3. Assert
      //  console.log(result)
        expect(result).toBe(a - b);


    });

    test('probando numero negativos decimales', () => {

        //! 1. Arrange
        const a = 2.39;
        const b = 2;
        //! 2. Act
        const result = resta(a, b);
        //! 3. Assert
       // console.log(result)
        expect(result).toBe(a - b);


    });
    
});


describe('multiplicacion', () => {

     test('probando multiplicacion por 0', () => {

        //! 1. Arrange
        const a = 0;
         const b = 4;
         //! 2. Act
         const result = multiplicacion(a, b);
         //! 3. Assert
       //   console.log(result)
         expect(result).toBe(a * b);


     });

      test('probando multiplicacion con numero negativos decimales', () => {

        //! 1. Arrange
        const a = -2;
         const b = 4.98;
         //! 2. Act
         const result = multiplicacion(a, b);
         //! 3. Assert
        //  console.log(result)
         expect(result).toBe(a * b);


     });

     test('probando multiplicacion valores grandes', () => {

        //! 1. Arrange
        const a = 239394949999999999999999990999999;
        const b = 1000000097622342364527834623324234;
         //! 2. Act
         const result = multiplicacion(a, b);
         //! 3. Assert
        //  console.log(result)
         expect(result).toBe(a * b);


     });
    
});


