import "../Categorias/Categorias.scss"
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


function SizesExample() {

    const clickear = () => {
        console.log("click")
    }

    useEffect(() => {
        window.addEventListener("click", clickear)

        return () => {
            window.removeEventListener("click", clickear)
        }
    }, [])

    return (
        <>

            <section class="botones">

                    <div>
                    <Link className="boton btn btn-danger" to="/productos/perfumeria">PERFUMERIA</Link>
                    </div>

                    <div>
                    <Link className="boton btn btn-danger" to="/productos/limpieza">LIMPIEZA</Link>
                    </div>

                <div>
                    <Link className="boton btn btn-danger" to="/productos/almacen">ALMACEN</Link>
                </div>
                    
                <div>
                    <Link className="boton btn btn-danger" to="/productos/bebidas">BEBIDAS</Link>
                </div>

                <hr />
            </section>
        </>

    );
}

export default SizesExample;