import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { AuthContext } from "../Contexts/Auth"

export default function Header(){
    const navigate = useNavigate()
    const{arrCart, setOpenCart, setDisabled} = useContext(AuthContext)
    return(
        <>
            <HeaderContainer>
                <ImgUser>
                    <img src="https://media-exp1.licdn.com/dms/image/C4E0BAQGtjaN-5cI7Nw/company-logo_200_200/0/1656973103389?e=2147483647&v=beta&t=eClbU0wyH-I-l6TJuSLxc96NYGknlnyjv3XOJ7SPuqw"/>
                </ImgUser>
                <NameShopping>
                    <h1 onClick={()=>{
                        navigate("/")
                        setDisabled(false)}}>
                    Coin Viton</h1>
                </NameShopping>
                <Cart>
                    {arrCart.length !== 0 ?<div><p>Conclua sua compra</p><ion-icon name="arrow-forward-outline"></ion-icon></div>:""}
                <ion-icon name="cart-outline" onClick={(()=> setOpenCart(true))}></ion-icon>
                </Cart>
            </HeaderContainer>
        </>
    )
}

const HeaderContainer = styled.div`
width: 100%;
height: 90px;
background: rgb(47,19,53);
background: linear-gradient(90deg, rgba(47,19,53,1) 0%, rgba(98,14,93,1) 37%, rgba(157,0,122,1) 100%);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
z-index: 0;
top: 0;
left: 0;
`
const ImgUser = styled.div`
font-size: 40px;
color: white;
img{
    width: 60px;
    border-radius: 100%;
    margin-left: 20px;
}
`
const NameShopping = styled.div`
font-size: 50px;
color: white;
font-family: 'Comfortaa';
`
const Cart = styled.div`
p{
    font-family: 'Comfortaa';
}
div{
    font-size: 20px;
    display: flex;
    margin-right: 2px;
    margin-top: 4px;
}
display: flex;
font-size: 30px;
color: white;
margin-right: 20px;
`