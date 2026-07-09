import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react"
import ItemCounter from "../shopping-cart/ItemCounter";


describe('ItemCounter',()=>{

    test('renderizar con valores por defecto',()=>{
        const nombre ="MACBOOK AIR"
        render(<ItemCounter nombre={nombre}  ></ItemCounter>);

        expect(screen.getByText(nombre)).toBeDefined();
        expect(screen.getByText(nombre)).not.toBeNull();
        screen.debug();

    });

     test('renderizar con cantidad personalizada',()=>{
        const nombre ="MACBOOK AIR"
        const cantidad =20;

        render(<ItemCounter nombre={nombre} cantidad={cantidad} ></ItemCounter>);

        expect(screen.getByText(cantidad)).toBeDefined(); 
        screen.debug();

    });
});