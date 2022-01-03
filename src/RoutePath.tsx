import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Proposal from './Pages/Proposal/Proposal'

function RoutePath() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/proposal" element={<Proposal />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutePath
