import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <div className='header'>
                <ul className='header-ul'>
                    <li>
                        <Link to="/">Customers</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Customers</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites</Link>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Header