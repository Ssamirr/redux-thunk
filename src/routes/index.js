import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProjectLayout from '../components/ProjectLayout'
import AddCustomers from '../pages/AddCustomers'
import Customers from '../pages/Customers'


function ProjectRoutes() {
    return (
        <Routes>
            <Route path='/' element={<ProjectLayout />}>
                <Route index element={<Customers />}></Route>
                <Route path='/add' element={<AddCustomers />}></Route>
            </Route>
        </Routes>
    )
}

export default ProjectRoutes