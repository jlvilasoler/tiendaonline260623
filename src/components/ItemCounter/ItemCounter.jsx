import { useState } from "react"
import "../ItemCounter/ItemCounter.scss"


const ItemCounter = ({max, item}) => {

    const [counter, setCounter] = useState(1)

    //Sumar al carrito
    const handleSumar = () => {
        if (counter < max)
        setCounter(counter + 1)
    }

    //Restar al carrito
    const handleRestar = () => {
        if (counter > 0) 
        setCounter(counter - 1)
    }

    //Agregar al carrito
    const handleAgregar = () => {
                localStorage.setItem("counter", counter)
                console.log({...item, counter})
        }

return (
    <div className="contador">
            <button onClick={handleRestar} className="btn btn-primary">➖</button>
            <span className="mx-3">{counter}</span>
            <button onClick={handleSumar} className="btn btn-primary">➕</button>

            <br/>

            <button onClick={handleAgregar} className="btn-agregar">AGREGAR A CARRITO</button>


    </div>



)

}



export default ItemCounter