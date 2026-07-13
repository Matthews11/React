import { useState } from "react";

// import './itemCouter.css'
import styles from './itemCouter.module.css';

interface Props {
  nombre: string;
  cantidad?: number;
}

export const ItemCounter = ({ nombre, cantidad = 1}: Props) => {

  // useState cambia estado a propiedades del formulario
  const [count, setCount] = useState(cantidad);

  const handleSum = () => {
    console.log("Sumando");
    setCount(count + 1);
  }

  const handleRes = () => {
    console.log("Restando");
    if(count == 1 ){
      return;
    }
    setCount(count - 1);
  }


  return (
    < section className={styles.itemRow}
    // style={{
    //   display: 'flex',
    //   alignItems: 'center',
    //   gap: 10,
    //   marginTop: 10
   // }}
    >

      <span data-testid="CS" className={styles ['item-text']}  style={{
        color: count == 1? 'red' : 'black'
      }}>{nombre}</span>
      <button
        onClick={() => {
          handleSum();
        }}
      >+1</button>
      <span data-testid="spa"> {count} </span>
      <button
        onClick={() => {
          handleRes();
        }}
      >-1</button>
    </section>
  )
}

export default ItemCounter
