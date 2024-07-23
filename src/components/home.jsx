import React, { useContext } from 'react'
import './home.css'
import building1 from './assets/building1.jpg'
import building3 from './assets/building3.jpg'
import building5 from './assets/building5.jpg'
import building7 from './assets/building7.jpg'
import { IoLocationOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { IoCarOutline } from "react-icons/io5";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { FcBusinessman } from "react-icons/fc";
import { mycontext } from './context'


function Home() {
    const { images, setimages, card, setcard } = useContext(mycontext)

    const scrolltospg = () => {
        const secondpg = document.getElementById('second-page')
        if (secondpg) {
            secondpg.scrollIntoView({ behavior: 'smooth' })
        }
        // the if statement is optional . it is used for better exp to not throw error.it will work without if statement
    }
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
                            <button className='h-l-gt-btn' onClick={scrolltospg}>
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

            <div className="second-pg" id='second-page'>
                <div className="slider">
                    <div className="logos">

                        {images.map(dt =>
                            <img src={dt.image} />
                        )}

                        {images.map(stimg =>
                            <img src={stimg.image} />
                        )}

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

            {/* ============ third page ================= */}
            <div className="third-page">
                <div className="t-pg-ft-cont">
                    <div className="t-pg-box">
                        <div className="t-pg-top-box">
                            <div className="top-sub-box">
                                <h1>11K+</h1>
                                <p>Happy Customers with our services</p>
                            </div>

                            <div className="top-sub-box">
                                <h1>22K+</h1>
                                <p>The best property we provide</p>
                            </div>

                            <div className="top-sub-box">
                                <h1>520+</h1>
                                <p>Awesome companies believe in us</p>
                            </div>
                        </div>
                        <hr />
                        <div className="t-pg-down-box">
                            <h1>Where Comfort Meets Convenience</h1>
                            <p>Look for an agency with a proven track record of succes in buying,
                                selling, or renting properties. You want an agency that has been
                                in the industry for a while and has experience
                            </p>
                        </div>
                    </div>
                    <div className="t-pg-image">
                        <img src={building7} alt="image" />
                    </div>
                </div>

            </div>

            {/* =========== fourth page =========== */}
            <div className="fourth-page">
                <div className="fp-hd">
                    <div className="fp-heads">
                        <h1>Our Popular Property</h1>
                    </div>
                    <div className="fp-para">
                        <p>Look For An Agency With A Proven Track Record Of Success In Buying,Selling, Or Renting Properties.
                            You Want An Agency That Has Been In The Industry For A While.
                        </p>
                    </div>
                </div>
                <div className="fp-card-cont">
                    {
                        card.map(data =>
                            <div className="fp-card">
                                <div className="fp-img">
                                    <img src={data.image} />
                                </div>
                                <div className="fp-crd-dt">
                                    <div className="fp-pr">
                                        <h2>{data.price}</h2>
                                    </div>
                                    <div className="fp-name">
                                        <p>{data.name}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="fp-crd-dwn">
                                    <div className="fp-locat">
                                        <p><IoLocationOutline />{data.location}</p>
                                    </div>
                                    <div className="fp-facilities">
                                        <div className="bed">
                                            <IoBedOutline />{data.bed} bed
                                        </div>
                                        <div className="bath">
                                            <LuBath />{data.bath} bath
                                        </div>
                                        <div className="parking">
                                            <IoCarOutline />  {data.parking} parking
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
                <div className="expl-button">
                    <button className='expl-btn'>
                        Explore All Property
                    </button>
                </div>
            </div>

            {/* ================== fifth page ============= */}
            <div className="fifth-page">
                <div className="ft-hd-box">
                    <h1>Kind Words From Our Happy Customers</h1>
                </div>
                <div className="cust-fb-cont">
                    <div className="cust-fb-card">
                        <div className="cust-icon">
                            <BiSolidQuoteAltLeft />
                        </div>
                        <div className="cust-fb-para">
                            <p>UrbanAbodes made finding my new home easy and enjoyable.
                                The site is user-friendly, with detailed listings and great photos.
                                Booking viewings was seamless, and the support team was very responsive. Highly recommend!</p>
                        </div>
                        <div className="user-card">
                            <div className="user-prof">
                                <FcBusinessman />
                            </div>
                            <div className="user-det">
                                <h2>Adam Rifsal</h2>
                                <p>CEO,Fornax</p>
                            </div>
                        </div>
                    </div>
                    <div className="cust-fb-card">
                        <div className="cust-icon">
                            <BiSolidQuoteAltLeft />
                        </div>
                        <div className="cust-fb-para">
                            <p>UrbanAbodes made finding my new home easy and enjoyable.
                                The site is user-friendly, with detailed listings and great photos.
                                Booking viewings was seamless, and the support team was very responsive. Highly recommend!</p>
                        </div>
                        <div className="user-card">
                            <div className="user-prof">
                                <FcBusinessman />
                            </div>
                            <div className="user-det">
                                <h2>Adam Rifsal</h2>
                                <p>CEO,Fornax</p>
                            </div>
                        </div>
                    </div>
                    <div className="cust-fb-card">
                        <div className="cust-icon">
                            <BiSolidQuoteAltLeft />
                        </div>
                        <div className="cust-fb-para">
                            <p>UrbanAbodes made finding my new home easy and enjoyable.
                                The site is user-friendly, with detailed listings and great photos.
                                Booking viewings was seamless, and the support team was very responsive. Highly recommend!</p>
                        </div>
                        <div className="user-card">
                            <div className="user-prof">
                                <FcBusinessman />
                            </div>
                            <div className="user-det">
                                <h2>Adam Rifsal</h2>
                                <p>CEO,Fornax</p>
                            </div>
                        </div>
                    </div>
                    <div className="cust-fb-card">
                        <div className="cust-icon">
                            <BiSolidQuoteAltLeft />
                        </div>
                        <div className="cust-fb-para">
                            <p>UrbanAbodes made finding my new home easy and enjoyable.
                                The site is user-friendly, with detailed listings and great photos.
                                Booking viewings was seamless, and the support team was very responsive. Highly recommend!</p>
                        </div>
                        <div className="user-card">
                            <div className="user-prof">
                                <FcBusinessman />
                            </div>
                            <div className="user-det">
                                <h2>Adam Rifsal</h2>
                                <p>CEO,Fornax</p>
                            </div>
                        </div>
                    </div>
                    <div className="cust-fb-card">
                        <div className="cust-icon">
                            <BiSolidQuoteAltLeft />
                        </div>
                        <div className="cust-fb-para">
                            <p>UrbanAbodes made finding my new home easy and enjoyable.
                                The site is user-friendly, with detailed listings and great photos.
                                Booking viewings was seamless, and the support team was very responsive. Highly recommend!</p>
                        </div>
                        <div className="user-card">
                            <div className="user-prof">
                                <FcBusinessman />
                            </div>
                            <div className="user-det">
                                <h2>Adam Rifsal</h2>
                                <p>CEO,Fornax</p>
                            </div>
                        </div>
                    </div>
                    <div className="cust-fb-card">
                        <div className="cust-icon">
                            <BiSolidQuoteAltLeft />
                        </div>
                        <div className="cust-fb-para">
                            <p>UrbanAbodes made finding my new home easy and enjoyable.
                                The site is user-friendly, with detailed listings and great photos.
                                Booking viewings was seamless, and the support team was very responsive. Highly recommend!</p>
                        </div>
                        <div className="user-card">
                            <div className="user-prof">
                                <FcBusinessman />
                            </div>
                            <div className="user-det">
                                <h2>Adam Rifsal</h2>
                                <p>CEO,Fornax</p>
                            </div>
                        </div>
                    </div>
                    <div className="cust-fb-card">
                        <div className="cust-icon">
                            <BiSolidQuoteAltLeft />
                        </div>
                        <div className="cust-fb-para">
                            <p>UrbanAbodes made finding my new home easy and enjoyable.
                                The site is user-friendly, with detailed listings and great photos.
                                Booking viewings was seamless, and the support team was very responsive. Highly recommend!</p>
                        </div>
                        <div className="user-card">
                            <div className="user-prof">
                                <FcBusinessman />
                            </div>
                            <div className="user-det">
                                <h2>Adam Rifsal</h2>
                                <p>CEO,Fornax</p>
                            </div>
                        </div>
                    </div>
                    <div className="cust-fb-card">
                        <div className="cust-icon">
                            <BiSolidQuoteAltLeft />
                        </div>
                        <div className="cust-fb-para">
                            <p>UrbanAbodes made finding my new home easy and enjoyable.
                                The site is user-friendly, with detailed listings and great photos.
                                Booking viewings was seamless, and the support team was very responsive. Highly recommend!</p>
                        </div>
                        <div className="user-card">
                            <div className="user-prof">
                                <FcBusinessman />
                            </div>
                            <div className="user-det">
                                <h2>Adam Rifsal</h2>
                                <p>CEO,Fornax</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home