import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import DayStacionar from './Components/DayStacionar';
import Header from './Components/Header';
import Centre from './Components/Centre';
import DoctorsPage from './Components/DoctorsPage';

function App() {
    const location = useLocation();

    // Определяем, показывать ли основной контент
    const showContent = location.pathname !== '/doctors';

    return (
        <div className="App">
            <Header /> {/* Хедер всегда отображается */}
            {showContent && <Centre />} {/* Центр показывается только на других страницах */}
            <Routes>
                {/*<Route path="/" element={<DayStacionar />} />*/}
                <Route path="/daystacionar" element={<DayStacionar />} />
                <Route path="/doctors" element={<DoctorsPage />} />
            </Routes>
        </div>
    );
}

// Оберните App в BrowserRouter, чтобы использовать useLocation
export default function WrappedApp() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}


/*{
При переходе на страницу DoctorsPage удаляется всё кроме хедера, используя условный рендеринг.
Добавим в App.tsx состояние, которое будет отслеживать, на какой странице находится пользователь.
Затем в зависимости от текущего маршрута рендерите только нужные компоненты.
}*/

