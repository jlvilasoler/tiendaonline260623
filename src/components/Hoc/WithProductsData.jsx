import { useEffect, useState } from "react"
import { getData } from "../Helpers/GetData"

export const withProductsData = (Component) => {



const WithProductsData = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        setLoading(true)
        getData()
                    .then((res) => setProductos(res))
                    .catch((err) => console.log(err))
                    .finally(() => setLoading(false))
    }, [])

    return <Component productos = {productos} loading={loading}/>
}

return WithProductsData
}