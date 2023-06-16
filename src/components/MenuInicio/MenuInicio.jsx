import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import "../MenuInicio/MenuInicio.scss"

function MenuInicio() {
  return (
    <>



<body>

<div class="row my-5">

<div class="container-form">
    <form action="" method="POST" class="menuinicio">
    <h3 class="intro"> MENÚ DE INICIO: </h3>


        <div class="form-group">
        <label>DOCUMENTO O E-MAIL:</label>
        <input type="text" placeholder="Ingrese Número de Documento o E-mail" maxLength="20" id="documento" name="documento" class="form-control"></input>
        </div>

        <div class="form-group">
        <label>CONTRASEÑA:</label>
        <input type="text" placeholder="Ingrese Contraseña" maxLength="15" id="contrasena" name="contrasena" class="form-control"></input>
        </div>

        <div class="botones-form">
<button type="submit" class="boton-form-entrar"> ENTRAR </button>

<div class="olvido">
        <h6>¿Olvidé mi contraseña?</h6>
        </div>  

</div>
</form>

        <div class="aviso_registro">
        <h6>¿No tiene una cuenta? Regístrese</h6>
        </div>  




</div>
</div>

</body>
    </>
);
}

export default MenuInicio;