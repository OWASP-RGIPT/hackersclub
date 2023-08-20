import React, { Component } from 'react';
import gsap from 'gsap';

class Preloader extends Component
{
    componentDidMount()
    {
        const tls = gsap.timeline({ defaults: { delay: 2, ease: "power1.out" } });
        const tl = gsap.timeline({ defaults: { delay: 3, ease: "power1.out" } });

        tls.to(".loading-page-text", 0.8, {
            y: 100,
            ease: 'Expo.easeIn'
        }, 0).to(".loading-page-grey", 1, {
            yPercent: 100,
            ease: 'Expo.easeOut'
        }, 0.8).to(".loading-page-white", 1, {
            yPercent: 100,
            ease: 'Expo.easeOut'
        }, 1);
        setTimeout(() =>
        {
            tls.to(".loading-page", 1, { display: 'none' });
        }, 5000);
    }


    render()
    {
        return (
            <div className="loading-page">
                <div className="loading-page-grey"></div>
                <div className="loading-page-white"></div>
                <div className="loading-page-text-wrap">
                    <div className="loading-page-text">OWASP RGIPT</div>
                </div>
                <style>
                    {`
          @import url('https://fonts.cdnfonts.com/css/mortend');
          
          .loading-page.loaded{
              display:none;
            }
            .loading-page {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 100;
              font-family: 'Mortend', sans-serif;
            }
            .loading-page-grey, .loading-page-white {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            }
            .loading-page-grey {
              z-index: 2;
              background-color: #000000;
            }
            .loading-page-white {
              z-index: 1;
              background-color: white;
            }
            .loading-page-text-wrap {
              overflow: hidden;
            }
            .loading-page-text-wrap {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: white;
              font-size: 70px;
              z-index: 3;
            }
            .loading-page-text span {
              display: inline-block;
            }`}
                </style>
            </div>
        );
    }
}

export default Preloader;