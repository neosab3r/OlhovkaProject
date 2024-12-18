import React, {useEffect} from "react";
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Components/Home/HomePage";
import Contacts from "./Components/Contacts";
import DoctorsPage from "./Components/DoctorsPage";
import RehabilitationPage from "./Components/Rehabilitation/RehabilitationPage";
import DayHospitalPage from "./Components/DayHospital/DayHospitalPage";
import RoutesPage from "./Components/RoutesPage";
import ProcedureOne from './Components/Rehabilitation/ProceduresPages/procedureOneExtension';


function App() {
    const {pathname} = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);    
    }, [pathname])
    return (
        <div className="App">
            <Header /> {/* Хедер всегда отображается */}
            <div className="content">
                <Routes>
                    {/* Маршруты для всех страниц */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/stacionar" element={<DayHospitalPage />} />
                    <Route path="/doctors" element={<DoctorsPage />} />
                    <Route path="/rehabilitation" element={<RehabilitationPage />} />
                    <Route path="/routes" element={<RoutesPage />} />
                    <Route path="/procedureExtension" element={<ProcedureOne />} />
                </Routes>
            </div>
            <Contacts /> {/* Контакты всегда отображаются */}
        </div>
    );
}

// Оборачиваем App в BrowserRouter для работы с маршрутизацией
export default function WrappedApp() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}
