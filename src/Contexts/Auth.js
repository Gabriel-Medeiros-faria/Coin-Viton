import React, {createContext, useState} from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [details, setDetails] = useState("")
    const [price, setPrice] = useState("")
    let [qtd, setQtd] = useState()
    const [img, setImg] = useState("")
    const[arrCart, setArrCart] = useState([])
    const [totalObject, setTotalObject] = useState({})
    const [openCart, setOpenCart] = useState(false)
    const [disabled, setDisabled] = useState(false)
    return(
        <AuthContext.Provider value={{
        setDetails, 
        setPrice, 
        setQtd, 
        setImg, 
        setArrCart, 
        setTotalObject,
        setOpenCart, 
        setDisabled,
        disabled,
        details, 
        price, 
        qtd, 
        img, 
        arrCart, 
        totalObject,
        openCart
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider