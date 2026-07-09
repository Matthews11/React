import type { CSSProperties } from "react";

const nombre = 'Mathew';
const apellido = 'Molina';

const juegos = ['zelda', 'smash', 'Mario'];
const activo = false;

const estilo : CSSProperties =  {
    backgroundColor: 'orange',
    borderRadius: activo ? 10 : 20,
    padding: 10,
    marginTop: 50

}

const direcciones = {
    cpp: 'ABC',
    Pais: 'El Salvador'
}


export function MyAwesomeApp() {

    return (
        <div data-testid='div1'>
            <h1 data-testid='nombre'>{nombre}</h1>
            <h3>{apellido}</h3>

            <p className="mi-clase">{juegos.join(',')}</p>
            <p>{2 + 2}</p>

            <h1>{activo ? 'Activo' : 'No activo'}</h1>

            <h2
                style={estilo}>

                {JSON.stringify(direcciones)}</h2>
        </div>
    )
}