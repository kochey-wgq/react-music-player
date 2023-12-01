
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from 'react-router-dom'
import Home from '../views/Home'

const createRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/home" element={<Home />}></Route>
                <Route path="*" element={<Navigate replace to='/Home' />}></Route>
            </Routes>
        </Router>
    )

}


export default createRoutes