import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyled/Globalstyle";
import InitialPage from "./ shopping page/InitialPage";
import Product from "./productPage/Product";
import AuthProvider from "./Contexts/Auth";

function App() {
  return (
    <>
    <BrowserRouter>
    <GlobalStyle/>
    <AuthProvider>
    <Routes>
      <Route path="/" element={<InitialPage/>}/>
      <Route path="/:category/:id" element={<Product/>}/>
    </Routes>
    </AuthProvider>
    </BrowserRouter>
    
    </>
  );
}

export default App;
