import "../ItemDetail/ItemDetail.scss"

const ItemDetail = ( {id, foto, articulo, descripcion, marca, precio, category} ) => {

    return (
    <div className="detalle">
        <h2>{articulo}</h2>
        <h1>{marca}</h1>

        <img src={foto} alt={articulo}/>

        <h3>{descripcion}</h3>
        <hr/>

        <p>Precio: ${precio}</p>
        <hr/>
        <small>Categoria: {category}</small>
    </div>

    )
}

export default ItemDetail;