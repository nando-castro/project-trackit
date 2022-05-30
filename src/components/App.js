import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./home/Login";
import Register from "./home/Register";
import Habits from "./habits/Habits";
import Today from "./today/Today";
import History from "./history/History";
import Navbar from "./navbar/NavBar";
import { useAuth } from "../context/auth";
import './../assets/css/reset.css';
import './../assets/css/style.css';

function App() {

    const { navbar } = useAuth();

    return (
        <BrowserRouter>
            {navbar && <Navbar />}
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<Register />} />
                <Route path='/habitos' element={<Habits />} />
                <Route path='/hoje' element={<Today />} />
                <Route path='/historico' element={<History />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;