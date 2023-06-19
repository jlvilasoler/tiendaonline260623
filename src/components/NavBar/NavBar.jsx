import "/src/components/NavBar/NavBar.scss"
import CardWidget from "../CardWidget/CardWidget"
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <header className="header">
            <div className="header_container">
                <h1 className="header_logo">tiendaonline.uy</h1>

                <nav className="header_nav">

                    <Link className="header_link" to="/productos/perfumeria">PERFUMERIA</Link>
                    <Link className="header_link" to="/productos/bebidas">BEBIDAS</Link>
                    <Link className="header_link" to="/productos/limpieza">LIMPIEZA</Link>
                    <Link className="header_link" to="/productos/almacen">ALMACEN</Link>
                    
                    <Link className="header_link" to="/Contacto">CONTACTO</Link>
                    
                    <Link className="header_link" to="/">🏠</Link>
                    <Link className="header_link" to="/MenuInicio">👤</Link>
                    <CardWidget/>
                    
                </nav>
            </div>
        </header>
    )

}

export default Header