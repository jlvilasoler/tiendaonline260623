import "../Nosotros/Nosotros.scss"
import { useEffect } from 'react';

function Nosotros() {

const clickear = (e) => {
    console.log("click")
}

useEffect(()=> {
    window.addEventListener("click", clickear)

    return () => {
    window.removeEventListener("click", clickear)
    }
}, [])


    return (
        <>


            <section class="nosotros">
                <div class="container-form">

                        <h3 class="nosotros-titulo"> QUIENES SOMOS? </h3>

                        <h4 class="nosotros-titulo">Somos el primer supermercado exclusivo on-line del pais. </h4>
                        <h4 class="nosotros-titulo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, necessitatibus nisi! Possimus, voluptate. Aperiam exercitationem, in fugit commodi dolorem nisi natus eveniet velit? Est, omnis in labore tempore excepturi blanditiis?</h4>
                        <h4 class="nosotros-titulo">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, necessitatibus nisi! Possimus, voluptate. Aperiam exercitationem, in fugit commodi dolorem nisi natus eveniet velit? Est, omnis in labore tempore excepturi blanditiis?</h4>
                        
                </div>
            </section>



        </>

    );
}

export default Nosotros;