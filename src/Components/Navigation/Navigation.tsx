import React from 'react'
import './Navigation.css'

function Navigation() {
    return (
        <div>
            <div className='logo'>HOM <span>SHOP</span></div>
            <div className='nav-list'>
                <ul className='nav-items'>
                    <li className="nav-item">SEO & Lead Generation <i className="fas fa-chevron-down"></i></li>
                    <li className="nav-item">Ecommerce <i className="fas fa-chevron-down"></i></li>
                    <li className="nav-item">UX & Interactive <i className="fas fa-chevron-down"></i></li>
                    <li className="nav-item">Our Technology <i className="fas fa-chevron-down"></i></li>
                    <li className="nav-item">Who We Are <i className="fas fa-chevron-down"></i></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation
