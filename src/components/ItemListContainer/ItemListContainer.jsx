import 'bootstrap/dist/css/bootstrap.min.css';
import "/src/components/ItemListContainer/ItemListContainer.scss"
import ItemList from "../ItemList/ItemList";
import { useProductos } from '../../Hooks/UseProductos';




const ItemListContainer = () => {
const {productos, loading} = useProductos()

console.log(loading, productos)

    return (
    <div className="container">
      
      {
        loading? <h3>Cargando...</h3> : <ItemList items={productos}/>
      }

    </div>
  );
};

export default ItemListContainer;