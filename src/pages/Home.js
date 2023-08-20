import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Preloader from './Preloader';
import svid from '../assets/bgvi.mp4';
import { Link, useHref } from 'react-router-dom/dist';
import '../TextScramble/script.js';
import '../TextScramble/style.css';

import { useBleeps } from '@arwes/react-bleeps';

function Home({ showIntro }) {
    const navigate = useNavigate();

    const routeChange = () => {
        let path = 'schedule';
        navigate(path);
    };
    const bleep=useBleeps();


    return (
        <>
          
                <>
                {/* <Preloader/> */}
                    <div className="bgvid">
                        <video autoPlay loop muted>
                            <source src={svid} type="video/mp4" />
                        </video>
                    </div>
                    <div>
                        <div
                            className="position-absolute text-white d-flex flex-column justify-content-md-center"
                            style={{ top: '35%', right: 0, bottom: 0, left: 0 }}
                        >
                            <div className="container px-5 mt-20-mobile">
                                <div className="row h-auto">
                                    <div className="col-7 my-auto">
                                    
                                        <div className="my-2 display-3 fw-bold  ">
                                        <a href="#" class="cipher">
                                            The Hackers  
                                            </a> 
                                            <br/>
                                            </div>
                                            <div className="my-2 display-3 fw-bold ">
                                            <a href="#" class="cipher">   
                                           Club
                                           </a> 
                                           </div>
                                      

                                        
                                        <h4 className="my-2 display-6 fw-bold ">
                                        <a href="#" class="cipher">  
                                            OWASP RGIPT
                                            </a> 
                                        </h4>
                                    </div>
                                </div>
                                <div className="mt-1 ">
                                    <div className="row fade-in-text delayed1">
                                        <div className="col-9 col-md-4">
                                            <div className="fw-bold fs-5">
                                                Register Now What’s in Store for You!
                                            </div>
                                            <div className="">
                                              
                                                Coding Competitions, Hackathons, CTF, Workshops, Fun and More! You name it,
                                                we have it.
                                         
                                            </div>
                                  
                                            <Link to='/form' style={{  textDecoration: 'none', color: 'white' }}>
                                             
                                            <button className="custom-button mt-3 mouse-pointer" onClick={() => bleep.click?.play()}>
                                               
                                                Join the Elite Members!
                                             
                                            </button>
                                            
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3 col-md-2 align-self-end fade-in-text delayed">
                                {/* Additional content */}
                            </div>
                        </div>
                    </div>
                </>
           
        </>
    );
}

export default Home;
