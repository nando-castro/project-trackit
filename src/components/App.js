import { BrowserRouter, Routes, Route } from "react-router-dom";
import './../assets/css/reset.css';
import './../assets/css/style.css';
import Login from "./home/Login";
import Register from "./home/Register";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastro" element={<Register />} />
                {/* <Route path="/habitos" element={<TelaHabitos />} />
                <Route path="/hoje" element={<TelaHoje />} />
                <Route path="/historico" element={<TelaHistorico />} /> */}
            </Routes>
        </BrowserRouter>
    );
}