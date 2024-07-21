import React from 'react'
import './home.css'
import building1 from './assets/building1.jpg'
import building3 from './assets/building3.jpg'
import building5 from './assets/building5.jpg'
function Home() {
    return (
        <div className='HomeContainer'>
            <div className="h-l-cont">
                <div className="h-l-box">
                    <div className="h-l-image">
                        <img src={building1} />
                    </div>
                    <div className="h-l-text">
                        <h1>Investing In Your Future One Home At A Time</h1>
                        <p>We'll help you find the key to your dream home. Experience the joy of homeownership. Let us make your home buying journey simple. </p>
                        <div className="h-l-Btn">
                            <button className='h-l-gt-btn'>
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* ============== down box ================= */}
                    <div className="img-dt-box">
                        <div className="l-section">
                            <div className="l-s-box">
                                <h3>Location</h3>
                                <p>Dubai</p>
                            </div>
                            <div className="l-s-box">
                                <h3>Property Type</h3>
                                <p>Duplex</p>
                            </div>
                            <div className="l-s-box">
                                <h3>Budget</h3>
                                <p>$12,000</p>
                            </div>
                        </div>

                        <div className="r-section">
                            <button className='img-dt-r-sp-btn'>
                                Search Property
                            </button>
                        </div>
                    </div>
                </div>
            </div>


            {/* ============ second page ============ */}

            <div className="second-pg">
                <div className="slider">
                    <div className="logos">
                        <img src="https://seeklogo.com/images/K/Keller_Williams-logo-983AD02CED-seeklogo.com.png" />
                        <img src="https://seeklogo.com/images/K/keller-williams-luxury-estates-plus-logo-A61CD01BD2-seeklogo.com.png" />
                        <img src="https://seeklogo.com/images/B/brookfield-asset-management-logo-C65D97780F-seeklogo.com.png" />
                        <img src="https://seeklogo.com/images/S/Simon_Property_Group-logo-A40CB17287-seeklogo.com.png" />
                        <img src="https://seeklogo.com/images/W/welltower-logo-BD7BC80FBA-seeklogo.com.png" />
                        <img src="https://seeklogo.com/images/E/equity-residential-logo-6E3DB16652-seeklogo.com.png" />
                        <img src="https://seeklogo.com/images/P/prologis-logo-984E383B78-seeklogo.com.png" />
                        <img src="https://seeklogo.com/images/L/larsen-toubro-l-t-logo-C37B03D531-seeklogo.com.png" />
                        <img src="https://seeklogo.com/images/C/Coldwell_Banker_Residential_Brokerage-logo-ED8841B610-seeklogo.com.png" />
                        <img src="https://seeklogo.com/images/A/american-tower-logo-3DB92FA0B2-seeklogo.com.png" />
                        <img src="https://seeklogo.com/images/B/brasil-sotheby-s-international-realty-logo-CB74F3F75B-seeklogo.com.png" />
                        <img src="https://seeklogo.com/images/S/Schlumberger-logo-DCB7757BE2-seeklogo.com.png" />

                        <img src="https://seeklogo.com/images/K/Keller_Williams-logo-983AD02CED-seeklogo.com.png" />
                        <img src="https://seeklogo.com/images/K/keller-williams-luxury-estates-plus-logo-A61CD01BD2-seeklogo.com.png" />
                        <img src="https://seeklogo.com/images/B/brookfield-asset-management-logo-C65D97780F-seeklogo.com.png" />
                        <img src="https://seeklogo.com/images/S/Simon_Property_Group-logo-A40CB17287-seeklogo.com.png" />
                        <img src="https://seeklogo.com/images/W/welltower-logo-BD7BC80FBA-seeklogo.com.png" />
                        <img src="https://seeklogo.com/images/E/equity-residential-logo-6E3DB16652-seeklogo.com.png" />
                        <img src="https://seeklogo.com/images/P/prologis-logo-984E383B78-seeklogo.com.png" />
                        <img src="https://seeklogo.com/images/L/larsen-toubro-l-t-logo-C37B03D531-seeklogo.com.png" />
                        <img src="https://seeklogo.com/images/C/Coldwell_Banker_Residential_Brokerage-logo-ED8841B610-seeklogo.com.png" />
                        <img src="https://seeklogo.com/images/A/american-tower-logo-3DB92FA0B2-seeklogo.com.png" />
                        <img src="https://seeklogo.com/images/C/Coldwell_Banker_Residential_Brokerage-logo-ED8841B610-seeklogo.com.png" />
                        <img src="https://seeklogo.com/images/S/Schlumberger-logo-DCB7757BE2-seeklogo.com.png" />
                    </div>
                </div>

                <div className="s-pg-m-cont">
                    <div className="s-pg-lft">
                        <h1>Navigating Your Real Estate Journey</h1>
                        <p>Look For An Agency With A Proven Track Record Of Success In Buying, Selling, Or Renting Properties.
                            You Want An Agency That Has Been In The Industry For A While And Has Experience Dealing With Various
                            Types Of Properties.</p>

                        <button className='s-pg-cu-btn'>
                            Contact Us
                        </button>
                    </div>
                    <div className="s-pg-rgt">
                        <img src={building5} alt="building image" />
                        <div className="s-pg-rgt-sbox">
                            <h2>22K+</h2>
                            <p>Property ready to buy and sell</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home