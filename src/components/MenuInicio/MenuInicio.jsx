import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "../MenuInicio/MenuInicio.scss"
import { Link } from 'react-router-dom';

function MenuInicio() {
  return (
    <>



<body>

<div class="row my-5">

<div class="container">
    <form action="" method="POST" class="menuinicio">
    <h3 class="intro"> INGRESAR: </h3>


        <div class="form-group">
        <label>DOCUMENTO O E-MAIL:</label>
        <input type="text" placeholder="Ingrese Número de Documento o E-mail" maxLength="20" id="documento" name="documento" class="form-control"></input>
        </div>

        <div class="form-group">
        <label>CONTRASEÑA:</label>
        <input type="text" placeholder="Ingrese Contraseña" maxLength="15" id="contrasena" name="contrasena" class="form-control"></input>
        <h6 className="olvido">¿Olvidaste tu contraseña?</h6>
        </div>
        

        <div class="botones-form">
<button type="submit" class="boton-form-entrar"> ENTRAR </button>



</div>
</form>

        <div class="aviso_registro">
        <Link className="registrar" to="/Registro">¿Soy nuevo? Registrame</Link>
        </div>  




</div>
</div>

</body>
    </>
);
}

export default MenuInicio;