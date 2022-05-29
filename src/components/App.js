import { BrowserRouter, Routes, Route } from "react-router-dom";
import './../assets/css/reset.css';
import './../assets/css/style.css';
import Login from "./home/Login";
import Register from "./home/Register";
import Main from "./habits/Main";
import { useState } from "react";

export default function App() {

    const [token, setToken] = useState('');

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login setToken={setToken} />} />
                <Route path="/cadastro" element={<Register />} />
                <Route path="/habitos" element={<Main token={token} />} />
                {/* <Route path="/hoje" element={<TelaHoje />} />
                <Route path="/historico" element={<TelaHistorico />} /> */}
            </Routes>
        </BrowserRouter>
    );
}