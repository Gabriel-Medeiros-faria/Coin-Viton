import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Header from "../Header/header"
import Blusas from "./Blusas"
import Calças from "./Calcas"
import Sapatos from "./Sapatos"
export default function InitialPage() {
    const[blusas, setBlusas] = useState([])
    const[calcas, setCalcas] = useState([])
    const[sapatos, setSapatos] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        const promisse = axios.get(`${process.env.REACT_APP_PRODUCTS_URI}/Blusas`)
        promisse.then((resp)=> setBlusas(resp.data))
        promisse.catch((error)=> console.log(error))

        const promisseCalc = axios.get(`${process.env.REACT_APP_PRODUCTS_URI}/Calcas`)
        promisseCalc.then((resp)=> 
        {setCalcas(resp.data)
        console.log(resp.data)})

        const promisseSap = axios.get(`${process.env.REACT_APP_PRODUCTS_URI}/Sapatos`)
        promisseSap.then((resp)=> 
        {setSapatos(resp.data)
        console.log(resp.data)})
    },[])

    return (
        <>
            <Header />
            <InitialPageContainer>
                <h1>Blusas</h1>
                <div className="ContainerBlusas">
                {blusas.map((obj)=>
                <Blusas item={obj.item} img={obj.img} category={obj.category} id={obj.id}/>
                )}
                </div>

                <h1>Calças</h1>
                <div className="ContainerCalcas">
                {calcas.map((obj)=><Calças item={obj.item} img={obj.img} category={obj.category} id={obj.id}/>)}
                </div>
                
                <h1>Sapatos</h1>
                <div className="ContainerSapatos">
                    {sapatos.map((obj)=> <Sapatos item={obj.item} img={obj.img} category={obj.category} id={obj.id}/> )}
                </div>
            </InitialPageContainer>
        </>
    )
}

const InitialPageContainer = styled.div`
font-size: 30px;
font-family: 'Comfortaa';
h1{
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 15px;
    color: #620e5d;
}
.ContainerBlusas{
    display: flex;
    overflow-x: scroll;
    color: #620e5d;
}
.ContainerCalcas{
    display: flex;
    overflow-x: scroll;
    color: #620e5d;
}
.ContainerSapatos{
    display: flex;
    overflow-x: scroll;
    color: #620e5d;
}
`