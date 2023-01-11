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
                        <Link to="/add">Add Custoemrs</Link>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Header