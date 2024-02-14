import { Routes, Route, } from 'react-router-dom';
import {Loginpage,Dashboardpage,Companyfrompage,Companydatapage} from "../Components/Admin/Pages/index"

import React from 'react'

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path='dashboard' element={<Dashboardpage />} />
            <Route path='companylist' element={<Companydatapage />} />
            <Route path='dataform' element={<Companyfrompage />} />
        </Routes>
    )
}

export default AdminRoutes


