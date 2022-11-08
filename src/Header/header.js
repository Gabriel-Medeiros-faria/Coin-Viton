import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Header(){
    const navigate = useNavigate()

    return(
        <>
            <HeaderContainer>
                <ImgUser>
                    <img src="data:image/png;base64,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"/>
                </ImgUser>
                <NameShopping>
                    <h1 onClick={()=>navigate("/")}>Super coin</h1>
                </NameShopping>
                <Cart>
                <ion-icon name="cart-outline"></ion-icon>
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
display: flex;
justify-content: space-between;
align-items: center;
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
font-size: 30px;
color: white;
margin-right: 20px;
`