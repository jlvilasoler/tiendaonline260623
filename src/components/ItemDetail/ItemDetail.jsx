import ItemCounter from "../ItemCounter/ItemCounter";
import "../ItemDetail/ItemDetail.scss"

const ItemDetail = ({ id, foto, articulo, descripcion, marca, precio, category, seccion, stock }) => {

    return (
        <div className="container-consola">

            <h1 className="marca-consola">{marca}</h1>

            <hr />
            <img className="imagen-consola" src={foto} alt={articulo} />

            <h2 className="articulo-consola">{articulo}</h2>
            <h3 className="descripcion-consola">{descripcion}</h3>
            <hr />

            <p className="precio-consola">$ {precio}</p>
            <hr />
            <p className="categoria-consola">Categoria: {category}</p>
            <p className="categoria-consola">Sección: {seccion}</p>

            <div>
            <ItemCounter 
            max={stock}
            item={{ id, foto, articulo, descripcion, marca, precio, category, seccion, stock }}
            />

            </div>

        </div>





    )
}

export default ItemDetail;