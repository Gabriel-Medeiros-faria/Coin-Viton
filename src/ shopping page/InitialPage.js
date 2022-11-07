import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import Header from "../header/header"
import Blusas from "./Blusas"
import Calças from "./calças"
import Sapatos from "./sapatos"

export default function InitialPage() {
    const[products, setProducts] = useState([])

    useEffect(()=>{
        const promisse = axios.get(`${process.env.REACT_APP_PRODUCTS_URI}/menu`)
        promisse.then((resp)=> console.log(resp))
        promisse.catch((error)=> console.log(error))
    },[])

    return (
        <>
            <Header />
            <InitialPageContainer>
                <Blusas />
                <Calças />
                <Sapatos />
            </InitialPageContainer>
        </>
    )
}

const InitialPageContainer = styled.div`



.calças{
    font-size: 50px;
    font-family: 'Roboto';
}
.sapatos{
    font-size: 50px;
    font-family: 'Roboto';
}
`