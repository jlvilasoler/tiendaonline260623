import { withProductsData } from "./WithProductsData"

const ItemListNew = ({productos, loading}) => {
    console.log(productos, loading)

    return (
        <div className="container my-5">
                <h2>ITEM LIST NEW
                    <hr/>
                </h2>
        </div>
    )
}

export default withProductsData (ItemListNew)