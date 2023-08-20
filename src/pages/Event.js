import React from 'react'
import videobg from "../assets/svid5.mp4"

export default function Event()
{
    return (
        <>

            <div className="bgvideolg">
                <video src={videobg} autoPlay loop muted />
            </div>  

            <h1 className="text-white text-center display-1 mt-10">Past Events & Workshops</h1>

            <div className='eventpage'>
                <main class="epage-content">
                    <div class="ecard">
                        <div class="econtent">
                        <h2 class="etitle">Seminar By Arsh Goyal</h2>
                        <p class="ecopy">In an invigorating talk, Mr. Arsh Goyal, Sr. Software Engineer at Samsung India and NIT Jalandhar Gold Medalist, shared insights on propelling your career with a competitive edge. His journey from Ex-Codechef enthusiast to industry leader provided invaluable inspiration.</p>
                        <a class="ebtn" href="https://www.linkedin.com/company/owasp-rgipt-student-chapter/">Know More</a>
                        </div>
                    </div>
                    <div class="ecard">
                        <div class="econtent">
                        <h2 class="etitle">Blockchain: A-Z Workshops</h2>
                        <p class="ecopy">Engaging 5-day workshops, "Blockchain: A-Z Workshops," led by Mr. Aryaman Raj, delved into the intricacies of blockchain technology. Participants gained comprehensive insights under his expert guidance, fostering a deeper understanding of this transformative field.</p>
                        <a class="ebtn" href="https://www.linkedin.com/company/owasp-rgipt-student-chapter/">Know More</a>
                        </div>
                    </div>
                    <div class="ecard">
                        <div class="econtent">
                        <h2 class="etitle">Competitive Programming in Python</h2>
                        <p class="ecopy">Participants immersed themselves in the art of Competitive Programming during the enriching "Competitive Programming in Python" workshop led by Mr. Sarthak Saxena over the course of 5 days. With dedicated guidance, attendees honed their Python coding skills and embraced advanced problem-solving techniques, setting the stage for future coding challenges.</p>
                        <a class="ebtn" href="https://www.linkedin.com/company/owasp-rgipt-student-chapter/">Know More</a>
                        </div>
                    </div>
                    <div class="ecard">
                        <div class="econtent">
                        <h2 class="etitle">Getting Started with UI/UX</h2>
                        <p class="ecopy">In a comprehensive 2-day workshop led by Ashwinee Kr. Samdarshi, participants delved into the realm of UI/UX design. "Getting Started with UI/UX" provided attendees with practical insights and skills to craft user-centered digital experiences.</p>
                        <a class="ebtn" href="https://www.linkedin.com/company/owasp-rgipt-student-chapter/">Know More</a>
                        </div>
                    </div>

                    <div class="ecard">
                        <div class="econtent">
                        <h2 class="etitle">Getting Started with App Development & Cybersecurity </h2>
                        <p class="ecopy">Led by Mr. Harshit Singh, Mr. Aryan Anurup, and Mr. Nimish Dudhe, participants embarked on a dynamic 2-day workshop. This collaborative event provided attendees with a comprehensive exploration of the subject matter, fostering a deeper understanding and skill development.</p>
                        <a class="ebtn" href="https://www.linkedin.com/company/owasp-rgipt-student-chapter/">Know More</a>
                        </div>
                    </div>
                    <div class="ecard">
                        <div class="econtent">
                        <h2 class="etitle">The Unsung Heir Season 1 & 2</h2>
                        <p class="ecopy">In an intense 72-hour showdown for Season 1: A Hunt and an extended 100-hour challenge for Season 2: A Quest, "The Unsung Heir" cryptography contests have concluded. With enthusiastic participation from over 150 contenders in each season, these events showcased dedication and competitiveness</p>
                        <a class="ebtn" href="https://www.linkedin.com/company/owasp-rgipt-student-chapter/">Know More</a>
                        </div>
                    </div>

                    
                </main>
            </div>
         
            </>
    )
}
