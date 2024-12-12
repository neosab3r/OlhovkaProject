import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import HomePage from "./Components/Home/HomePage";
import Contacts from "./Components/Contacts";
import DoctorsPage from "./Components/DoctorsPage";
import RehabilitationPage from "./Components/RehabilitationPage";
import DayHospitalPage from "./Components/DayHospitalPage";
import RoutesPage from "./Components/RoutesPage";

function App() {
    return (
        <div className="App">
            <Header /> {/* Хедер всегда отображается */}
            <div className="content">
                <Routes>
                    {/* Маршруты для всех страниц */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/centre" element={<HomePage />} />
                    <Route path="/stacionar" element={<DayHospitalPage />} />
                    <Route path="/doctors" element={<DoctorsPage />} />
                    <Route path="/rehabilitation" element={<RehabilitationPage />} />
                    <Route path="/routes" element={<RoutesPage />} />
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
