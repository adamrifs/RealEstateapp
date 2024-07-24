import React from 'react'
import './footer.css'
import { LiaCopyright } from "react-icons/lia";
function Footer() {
    return (
        <div className='footer'>
            <div className="footer-cont">
                <div className="footer-fst-box">
                    <div className="footer-logo">
                        <h1>UrbanAbodes</h1>
                    </div>
                    <div className="footer-comnt">
                        <p>Investing In Your Future One Home At A Time</p>
                    </div>
                    <div className="input-field">
                        <input type='email' placeholder='Enter your email' />
                        <button className='footer-sub-btn'>Subscribe</button>
                    </div>
                </div>

                <div className="footer-list-box">
                    <h2>Quick Menu</h2>
                    <p>Home</p>
                    <p>Rent</p>
                    <p>Sell</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>

                <div className="footer-list-box">
                    <h2>About Us</h2>
                    <p>Payment Plans</p>
                    <p>Make saving More</p>
                    <p>Tax Calculator</p>
                    <p>Talk To Us</p>
                </div>

                <div className="footer-frth-box">
                    <h2>Contact Info</h2>
                    <p>123 Main street, Apt 4b Los Angeles, CA 90001,USA</p>
                    <p>+088 (123) 456-78-91</p>
                    <p>urbanabodes@gmail.com</p>
                </div>
            </div>
            <div className="footer-dsgn">
                <p><LiaCopyright />  Designed by Adam</p>
            </div>
        </div>
    )
}

export default Footer