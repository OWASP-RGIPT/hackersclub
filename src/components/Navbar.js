import React from 'react'
import tqlogo from "../assets/tqlogo3.png"
import "aos/dist/aos.css";


export default function Navbar()
{

    return (
        <>
        <div>
            <nav className="navbar shadow-5-strong p-navbar fixed-top">
                <div className="menu-wrap">
                    <input type="checkbox" className="toggler" />
                    <div className="hamburger"><div></div></div>
                    <div className="menu">
                        <div>
                            <div>
                                <ul>
                                    <li><a className='fw-bold' href="/">Home</a></li>
                                    <li><a className='fw-bold' href="about">About Club & OWASP RGIPT</a></li>
                                    <li><a className='fw-bold' href="perks">Membership Perks</a></li>
                                    <li><a className='fw-bold' href="form">Registration</a></li>
                                    <li><a className='fw-bold' href="events">Past Events & Workshops</a></li>
                                    <li><a className='fw-bold' href="collab">Achievements</a></li>
                                    <li><a className='fw-bold' href="https://www.sahpathi.co.in" target='blank'>Sahpathi</a></li>
                                    <li><a className='fw-bold' href="rewind">First Meetup</a></li>
                                    <li><a className='fw-bold' href="contactus">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="navbar-brand fw-bold" href="contactus"></a>
                <a className="navbar-brand" href="/" >
                    <img src={tqlogo}  width="200" height="200" alt="" style={{marginTop:'-100px',marginRight:'-50px'}}/>
                </a>
            </nav>
        </div>
        

        </>
    )
}
