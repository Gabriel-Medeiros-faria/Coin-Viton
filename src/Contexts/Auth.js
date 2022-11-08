import React, {createContext, useState} from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [details, setDetails] = useState("")
    const [price, setPrice] = useState("")
    const [qtd, setQtd] = useState()
    const [img, setImg] = useState("")

    return(
        <AuthContext.Provider value={{setDetails, setPrice, setQtd, setImg, details, price, qtd, img}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider