import ItemCounter from "./shopping-cart/ItemCounter";

export function FirstStepsApp() {
    return (
        <>
            <h1>Carrito de compras</h1>
            <ItemCounter nombre="NINTENDO SWITCH 2" cantidad={3}></ItemCounter>
            <ItemCounter nombre="SUPER SMASH" cantidad={4}></ItemCounter>
            <ItemCounter nombre="PRO CONTROLLER" cantidad={1}></ItemCounter>

        </>
    )
}