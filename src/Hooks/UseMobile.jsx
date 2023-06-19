import { useEffect, useState } from "react";


const useMobile = () => {
    const [isMobile, setMobile] = useState(null)

    const calcularMobile = () => {
        if (window.innerWidth <= 768) {setIsMobile(true)
    }else{
        setIsMobile(false)}
}
    useEffect(() => {
        calcularMobile()
        window.addEventListener("resize", calcularMobile)
return () => {
    window.removeEventListener("resize", calcularMobile)
}

    }, [])

    return isMobile

}


export default useMobile