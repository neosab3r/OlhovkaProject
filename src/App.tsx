import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './Components/Header'
import DayStacionar from "./Components/DayStacionar";
import Header from "./Components/Header";
import Centre from "./Components/Centre";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index element={<DayStacionar />} />
                        {/*            <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<NoPage />} />*/}
                    </Route>
                </Routes>
            </BrowserRouter>
            <Centre />
        </div>
);
}

export default App;
