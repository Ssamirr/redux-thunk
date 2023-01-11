import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProjectLayout from '../components/ProjectLayout'
import AddCustomers from '../pages/AddCustomers'
import Customers from '../pages/Customers'
import Favorites from '../pages/Favorites'


function ProjectRoutes() {
    return (
        <Routes>
            <Route path='/' element={<ProjectLayout />}>
                <Route index element={<Customers />}></Route>
                <Route path='/add' element={<AddCustomers />}></Route>
                <Route path='/favorites' element={<Favorites />}></Route>
            </Route>
        </Routes>
    )
}

export default ProjectRoutes