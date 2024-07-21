import React from 'react'
import './nav.css'

function Nav() {
    return (
        <div className='NavBar'>
            <div className="logo">
                <h2>UrbanAbodes</h2>
            </div>

            <div className="links">
                <ul>
                    <li>Home</li>
                    <li>Rent</li>
                    <li>Sell</li>
                    <li>About</li>
                </ul>
            </div>

            <div className="accBtn">
                <button className='logInBtn'>
                    Log In
                </button>
                <button className='caBtn'>
                    Create Account
                </button>
            </div>
        </div>
    )
}

export default Nav