import { describe, expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react"
import ItemCounter from "../shopping-cart/ItemCounter";


describe('ItemCounter', () => {

    test('renderizar con valores por defecto', () => {
        const nombre = "MACBOOK AIR"
        render(<ItemCounter nombre={nombre}  ></ItemCounter>);

        expect(screen.getByText(nombre)).toBeDefined();
        expect(screen.getByText(nombre)).not.toBeNull();
        screen.debug();

    });

    test('renderizar con cantidad personalizada', () => {
        const nombre = "MACBOOK AIR"
        const cantidad = 20;

        render(<ItemCounter nombre={nombre} cantidad={cantidad} ></ItemCounter>);

        expect(screen.getByText(cantidad)).toBeDefined();
        screen.debug();

    });

    test('presionar boton suma', () => {
        render(<ItemCounter nombre='Switch' cantidad={2}></ItemCounter>);

        const [botonSumar] = screen.getAllByRole('button');

        // disapara el onclick y ejecuta la funcion sumar, en el test aparece el console
        // sumando
         fireEvent.click(botonSumar);

        // console.log();

    })

    test("cuando menos 1 es precionado y el valor de cantidad es igual a 5 ", () => {

        render(<ItemCounter nombre='Switch' cantidad={5}></ItemCounter>);

        const [, botonRestar] = screen.getAllByRole('button');

        fireEvent.click(botonRestar);

        const span = screen.getByTestId("spa");

        console.log(span.textContent);
    });

    test("cuando no se preciona el menos 1 es y el valor de cantidad es 1 ", () => {
    render(<ItemCounter nombre="PS5" cantidad={1}></ItemCounter>);
    
    const [, botonRestar] = screen.getAllByRole('button');

    fireEvent.click(botonRestar);

        const span = screen.getByTestId("spa");

        console.log(span.textContent);


});


  test("cuando el contador es 1 y se cambia el css ", () => {
    const cantidad=1;
    const nombre="TEST";
    render(<ItemCounter nombre={nombre} cantidad={cantidad}></ItemCounter>);
    
    const itemText = screen.getByTestId("CS");

    console.log(itemText.style.color);
    expect(itemText.style.color).toBe('red');


});

 test("cuando el contador es 3 y se cambia el css ", () => {
    const cantidad=3;
    const nombre="TEST";
    render(<ItemCounter nombre={nombre} cantidad={cantidad}></ItemCounter>);
    
    const itemText = screen.getByTestId("CS");

    console.log(itemText.style.color);
    expect(itemText.style.color).toBe('black');


});

});





 

 

 
 