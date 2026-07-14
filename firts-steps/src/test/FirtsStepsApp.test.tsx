
import { describe, expect, test, vi,afterEach } from "vitest";
import {  render, screen } from "@testing-library/react"
import { FirstStepsApp } from "../FirtsStepsApp"; 


const mockItemCounter = vi.fn((_props:unknown)=>{
    return <div data-testid="ItemCounter" />;
} )

vi.mock('../shopping-cart/ItemCounter',()=>({
    default: (props:unknown) => mockItemCounter(props),
}));

// vi.mock('../shopping-cart/ItemCounter',()=>({

//      default: (props:unknown) => <div data-testid="ItemCounter" 
//      nombre={props.nombre}
//      cantidad={props.cantidad}
     
//      />,

// }));

describe('FirstStepsApp',()=>{

    afterEach(()=>{
        vi.clearAllMocks();
    });

    test('snapshot',()=>{

        const {container } =render(<FirstStepsApp></FirstStepsApp>);

        expect(container).toMatchSnapshot();
        
    })

    test('mostrar cantidad correcta de item componente',()=>{

        render(<FirstStepsApp></FirstStepsApp>);

        const itemCounters=screen.getAllByTestId('ItemCounter');
        
        expect(itemCounters.length).toBe(3);

        screen.debug();


    })


    test('probando componente con las propiedades correctas',()=>{
        render(<FirstStepsApp></FirstStepsApp>)

        // expect(mockItemCounter).toHaveBeenCalledTimes(3);
          expect(mockItemCounter).toHaveBeenCalledWith({
            nombre: 'Nintendo Switch 2',
            cantidad: 1,
          });

           expect(mockItemCounter).toHaveBeenCalledWith({
            nombre: 'ZELDA TOTK',
            cantidad: 2,
          });

           expect(mockItemCounter).toHaveBeenCalledWith({
            nombre: 'PRO CONTROLLER',
            cantidad: 3,
          });
    });

})