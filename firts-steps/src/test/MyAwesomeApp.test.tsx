
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react"
import { MyAwesomeApp } from "../MyAwesomeApp";

describe('MyAwesomeApp', () => {

    test('probando nombre y apellido', () => {
    render(<MyAwesomeApp />);
        // const { container } = render(<MyAwesomeApp />);
        screen.debug();
       
        // const h1 = container.querySelector("h1");
        // expect(h1?.innerHTML).toContain("Mathew");

        // const h3 = container.querySelector("h3");
        // expect(h3?.innerHTML).toContain("Molina");

        // const h1 = screen.getByRole('heading',{
        //     level:1
        // });

        
        const h1 = screen.getByTestId('nombre');

        expect(h1.textContent).toBe("Mathew");



        // console.log(h1.innerHTML)



    });


    test('snapshot',()=>{
        render(<MyAwesomeApp></MyAwesomeApp>);

        // expect(container).toMatchSnapshot();
        expect(screen.getByTestId('div1')).toMatchSnapshot();

    });
});