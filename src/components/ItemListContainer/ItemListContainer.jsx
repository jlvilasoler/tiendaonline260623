import 'bootstrap/dist/css/bootstrap.min.css';
import "/src/components/ItemListContainer/ItemListContainer.scss"
import ItemList from "../ItemList/ItemList";
import { useState, useEffect } from 'react';
import { getData } from "../Helpers/GetData"
import { useParams } from 'react-router-dom';




const ItemListContainer = () => {

  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()


  useEffect(() => {
      setLoading(true)    

      getData()
      .then((respuesta) => {
      if (!categoryId) {
        setProductos(respuesta)
      } else {
        setProductos(respuesta.filter((producto) => producto.category === categoryId))
      } 
    })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [categoryId])

    return (
    <div className="container">
      
      {
        loading? <h3>Cargando...</h3> : <ItemList items={productos}/>
      }

    </div>
  );
};

export default ItemListContainer;