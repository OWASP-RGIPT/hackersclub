import React, { useState } from 'react'
import mobile from '../assets/mobile.png'
import address from '../assets/location.png'
import email from '../assets/email.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faYoutube, faSquareWhatsapp, faLinkedin, faMeetup } from '@fortawesome/free-brands-svg-icons';
function ContactUs() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <>
            <div className='bg-black bg-gradient text-white'>
                <div className="text-center bg-image" style={{ backgroundImage: `url(https://drive.google.com/uc?id=1-3PmRBZ2osJ8beKScGDB1te3piHl0WHs)`, height: '400px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <div className="h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <div className="d-flex justify-content-center align-items-center h-100">
                            <div className="text-white my-5">
                                <div className="mt-4 display-5 fw-bold contact-border">CONTACT US</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container text-center mt-5">
                    <div className='fs-2 fw-semibold fst'>Get in Touch with us!</div>
                    <div className="row mt-5 d-flex justify-content-center align-items-center h-100">
                        <div class="row-4 col-md-3" style={{ borderRight: '2px solid white' }}>
                            <div className='m-3'>
                                <img src={mobile} height={40} />
                                <div className='fw-bold mt-3'>PHONE</div>
                                <div className='fw-bolder fs-6'>Aryaman Raj: <a href='tel:+917781877310'>+91 77818 77310</a></div>
                                <div className='fw-bolder fs-6'>Ayush Gupta: <a href='tel:+919956317209'>+91 99563 17209</a></div>
                              
                            </div>
                        </div>
                        <div class="row-4 col-md-3" style={{ borderRight: '2px solid white' }}>
                            <div className='m-3'>
                                <img src={address} height={40} />
                                <div className='fw-bold mt-3'>ADDRESS</div>
                                <div className='fw-bolder fs-6'>Rajiv Gandhi Institute of Petroleum Technology, Jais Amethi UP 229304, India </div>
                            </div>
                        </div>
                        <div class="row-4 col-md-3">
                            <div className='m-3'>
                                <img src={email} height={40} />
                                <div className='fw-bold mt-3'>EMAIL</div>
                                <div className='fw-bolder fs-6'><a href='mailto:info@taqneeqfest.com'>owasp@rgipt.ac.in</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div class="row">
                        <div class="col-md-6 offset-md-3 text-center wow fadeInUp">
                            {/* <div class="separator"><span><i class="fa fa-square"></i></span></div>
                            <div class="spacer-single"></div> */}
                        </div>

                        <div class="col-md-8 offset-md-2 wow fadeInUp">
                            <div className='text-center  fs-2 fw-semibold fst'>Connect with us! </div>

                            <div className='d-flex justify-content-center align-items-center'>
                                <a target="_blank" href="https://www.youtube.com/channel/UCKrKN26YF75eHRnLFyTHIAA" style={{ margin: '5px' }}>
                                    <FontAwesomeIcon icon={faYoutube} style={{ color: "#ffffff", height: '40px', width: '40px' }} />
                                </a>
                                <a target="_blank" href="https://instagram.com/owasprgipt?igshid=YmMyMTA2M2Y=" style={{ margin: '5px' }}>
                                    <FontAwesomeIcon icon={faSquareInstagram} style={{ color: "#ffffff", height: '40px', width: '40px' }} />
                                </a>
                                <a target="_blank" href="https://www.linkedin.com/company/owasp-rgipt-student-chapter" style={{ margin: '5px' }}>
                                    <FontAwesomeIcon icon={faLinkedin} style={{ color: "#ffffff", height: '40px', width: '40px' }} />
                                </a>
                                <a target="_blank" href="https://chat.whatsapp.com/KJnqbIEUgG60oqUyV2mWcM" style={{ margin: '5px' }}>
                                    <FontAwesomeIcon icon={faSquareWhatsapp} style={{ color: "#ffffff", height: '40px', width: '40px' }} />
                                </a>
                                <a target="_blank" href="https://www.meetup.com/owasp-rajiv-gandhi-institute-of-petroleum-technology/" style={{ margin: '5px' }}>
                                    <FontAwesomeIcon icon={faMeetup} style={{ color: "#ffffff", height: '40px', width: '40px' }} />
                                </a>
                            </div>

                            <div>
                                {/* <MapSection location={location} zoomLevel={17} /> include it here */}
                            </div>
                            <div className='text-center mt-5' style={{marginBottom:'100px'}}>



                                {/* <br></br>
                                <br></br> */}
                            </div>
                            {/* <br></br> */}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ContactUs
