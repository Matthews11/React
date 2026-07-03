interface Props {
    nombre: string; 
    cantidad?: number;
}


const ItemCounter = ({nombre, cantidad}:Props) => {
  return (
    < section style={{
        display:'flex',
        alignItems: 'center',
        gap:10,
        marginTop:10
    }}>
    
    <span style={{
        width:100,

    }}>{nombre}</span>
    <button>+1</button>
    <span>{cantidad}</span>
    <button>-1</button>
    </section>
  )
}

export default ItemCounter
