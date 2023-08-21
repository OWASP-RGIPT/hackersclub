import React from "react";
import videobg from '../assets/svid4.mp4'
import Footer from "../components/Footer";
const About = () =>
{
    return (
        <>
                <div className="bgvideolg">
                    <video src={videobg} autoPlay loop muted className="blurred-video"/>
                    <div className="overlay"></div>
                </div>

                {/* <div className="overlay"></div> */}
               
                <div className="position-absolute text-white d-flex flex-column justify-content-md-center" style={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                    <div className="container-md px-5 mt-25-mobile">
                        <div className="row h-100">
                            <div className="col my-auto text-center">
                                <h1 className="text-center display-5">ABOUT US</h1>

                            </div>
                            <div className="mt-5 text-center fs-5">
                                <p>Welcome to the official page of the <b>Open Web Application Security Project (OWASP) Student Chapter at Rajiv Gandhi Institute of Petroleum Technology (RGIPT), Jais,</b> and its affiliated community, <b>The Hackers Club!</b> Established on April 6, 2022, our mission is to foster a dynamic environment for cybersecurity enthusiasts, aspiring ethical hackers, and tech-savvy individuals to come together, learn, collaborate, and push the boundaries of web application security.</p>

                                <br></br>

                                <p>
                                At OWASP RGIPT and The Hackers Club, we envision a world where digital landscapes are secure, and web applications are resilient against emerging cyber threats. We strive to empower our members with cutting-edge knowledge, hands-on experience, and a supportive community to create a safer digital future.
                                </p>

                                <br></br>

                                <p>
                                Be a part of OWASP RGIPT and The Hackers Club and embark on a journey towards mastering in various tech domains while fostering a supportive and collaborative community. Your digital future starts here!
                                </p>
                                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
                            </div>
                        </div>
                    </div>
                </div>
               
       
        </>
        
    );
};

export default About;
