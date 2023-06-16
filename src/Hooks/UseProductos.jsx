import { useEffect, useState } from "react"
import { getData } from "../components/Helpers/GetData"

export const useProductos = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)    

        getData()
        .then((respuesta) => setProductos(respuesta))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false))
    }, [])

    return {productos,
    loading
}
}