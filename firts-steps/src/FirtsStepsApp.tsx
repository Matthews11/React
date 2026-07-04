import ItemCounter from "./shopping-cart/ItemCounter";

interface ItemInCart{
    productName: string,
    cantidad:number
}

const itemInCart: ItemInCart []=[
    {productName: 'Nintendo Switch 2', cantidad:1},
    {productName: 'ZELDA TOTK', cantidad:2},
    {productName: 'PRO CONTROLLER', cantidad:3},

];


export function FirstStepsApp() {
    return (
        <>
           {/* << <h1>Carrito de compras</h1>
            <ItemCounter nombre="NINTENDO SWITCH 2" cantidad={3}></ItemCounter>
            <ItemCounter nombre="SUPER SMASH" cantidad={4}></ItemCounter>
            <ItemCounter nombre="PRO CONTROLLER" cantidad={1}></ItemCounter>>> */}

            {
                itemInCart.map( ({productName,cantidad}) => (
                    <ItemCounter key={productName} nombre={productName} cantidad={cantidad}></ItemCounter>
                ) )
            }

        </>
    )
}