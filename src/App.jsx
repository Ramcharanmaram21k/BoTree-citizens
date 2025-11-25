import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';
import LodgeGrievanceForm from "./components/LodgeGrievanceForm/LodgeGrievanceForm.jsx";
import GrievanceStatus from './components/GrevienceStatus/GrevienceStatus.jsx';

function App() {
    return (
        <div className="app-container">

            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/lodge-grievance" element={<LodgeGrievanceForm />} />
                <Route path="/check-status" element={<GrievanceStatus /> } />
            </Routes>


            <Footer />
        </div>
    );
}

export default App;