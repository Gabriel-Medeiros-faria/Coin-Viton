import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Header from "../Header/header"
import { useContext } from "react"
import { AuthContext } from "../Contexts/Auth"

export default function Product() {
    const { category, id } = useParams()
    const {setDetails, setPrice, setQtd, setImg, details, price, qtd, img} = useContext(AuthContext)
    useEffect(() => {
        const promisse = axios.get(`${process.env.REACT_APP_PRODUCTS_URI}/${category}/${id}`)
        promisse.then((resp) => {
            console.log(resp.data)
            setDetails(resp.data.details)
            setPrice(resp.data.price)
            setQtd(resp.data.qtd)
            setImg(resp.data.img)
        })
    }, [])
    return (
        <>
            <Header />
            <ContainerProdutct>
                <div className="imgProduct">
                    <img src={img} />
                </div>
                <div className="Rigth">
                    <div className="details">
                        <p>{details}</p>
                        <p>R${price}</p>
                    </div>
                    <div className="finaly">
                        <div className="buttons">
                            <button className="somar">+</button>
                            <p>{qtd}</p>
                            <button className="sub">-</button>
                        </div>
                        <button className="addCart">Colocar no carrinho</button>
                        <div className="back">Voltar</div>
                    </div>
                </div>

            </ContainerProdutct>

        </>
    )
}

const ContainerProdutct = styled.div`
display: flex;
margin-top: 40px;
justify-content: center;
img{
    width: 400px;

}
.Rigth{
    margin-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
p{
    font-family: 'comfortaa';
    font-size: 30px;
    margin-bottom: 40px;
}

.addCart {
	box-shadow: 0px 10px 14px -7px #276873;
    background: rgb(47,19,53);
    background: linear-gradient(90deg, rgba(47,19,53,1) 0%, rgba(98,14,93,1) 37%, rgba(157,0,122,1) 100%);
	border-radius:8px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
    font-family: 'comfortaa';
	font-size:20px;
	font-weight:bold;
	padding:13px 32px;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
}
.addCart:hover {
    background: linear-gradient(90deg, rgba(47,19,53,1) 0%, rgba(98,14,93,1) 37%, rgba(157,0,122,1) 100%);
	border-radius:8px;
}
.addCart:active {
	position:relative;
	top:1px;
}
.buttons{
    display: flex;
    position: absolute;
    top: -30px;
    right: 10px;
}
.somar {
	box-shadow: 0px 10px 14px -7px #276873;
    background: rgb(47,19,53);
    background: linear-gradient(90deg, rgba(47,19,53,1) 0%, rgba(98,14,93,1) 37%, rgba(157,0,122,1) 100%);
	border-radius:8px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
    font-family: 'comfortaa';
	font-size:20px;
	font-weight:bold;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
    height: 25px;
    font-size: 20px;
    font-family: 'comfortaa';
    width: 30px;
}
.somar:hover {
    background: linear-gradient(90deg, rgba(47,19,53,1) 0%, rgba(98,14,93,1) 37%, rgba(157,0,122,1) 100%);
	border-radius:8px;
}
.somar:active {
	position:relative;
	top:1px;
}

.sub {
	box-shadow: 0px 10px 14px -7px #276873;
    background: rgb(47,19,53);
    background: linear-gradient(90deg, rgba(47,19,53,1) 0%, rgba(98,14,93,1) 37%, rgba(157,0,122,1) 100%);
	border-radius:8px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
    font-family: 'comfortaa';
	font-size:20px;
	font-weight:bold;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
    height: 25px;
    font-size: 20px;
    font-family: 'comfortaa';
    width: 30px;
}
.sub:hover {
    background: linear-gradient(90deg, rgba(47,19,53,1) 0%, rgba(98,14,93,1) 37%, rgba(157,0,122,1) 100%);
	border-radius:8px;
}
.sub:active {
	position:relative;
	top:1px;
}
.finaly{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}
.back{
    font-family: 'comfortaa';
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 20px;
}
`