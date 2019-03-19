import React from 'react'
import {Link} from 'react-router-dom'

const Nav = () => {
    return (
        <div className = 'nav nav-tabs'>
            <div className = 'nav-item'>
                <Link to = '/' className = 'nav-link'>Home</Link>
            </div>

            <div className = 'nav-item'>
                <Link to = '/products' className = 'nav-link'>Products</Link>
            </div>

            <div className = 'nav-item'>
                <Link to = '/products/sales' className = 'nav-link'>Sales</Link>
            </div>

            <div className = 'nav-item'>
                <Link to = '/products/create' className = 'nav-link'>Create</Link>
            </div>
        </div>
    )
}

export default Nav
