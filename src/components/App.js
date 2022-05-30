import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import './../assets/css/reset.css';
import './../assets/css/style.css';
import PageLogin from "./home/Login";
import PageToday from "./today/Today";
import PageRegister from "./home/Register";
import History from "./history/History";
import Habits from "./habits/Habits";

function App() {

    const [loading, setLoading] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PageLogin loading={loading} setLoading={setLoading} setUserData={setUserData} />} />
                <Route path='/cadastro' element={<PageRegister loading={loading} setLoading={setLoading} />} />
                <Route path='/habitos' element={<Habits loading={loading} setLoading={setLoading} />} />
                <Route path='/hoje' element={<PageToday loading={loading} setLoading={setLoading} userData={userData} />} />
                <Route path='/historico' element={<History />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;