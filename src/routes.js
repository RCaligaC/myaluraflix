import Menu from "./components/Menu"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Categorias from "./pages/Categorias";
import Home from "./pages/Home";
import NovoVideo from "./pages/NovoVideo";
import Botao from "./components/Botao";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/novovideo" element={<NovoVideo />}></Route>
                <Route path="/categorias" element={<Categorias />}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRoutes;