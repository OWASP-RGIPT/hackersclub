import React from 'react'
import videobg from '../assets/svid3.mp4'

function Rewind()
{
    return (
        <>

        <div className="bgvideolg">
                <video src={videobg} autoPlay loop muted />
        </div>

        <div className='' style={{ height: '100vh'}}>
            <div className="d-flex justify-content-center align-items-center h-100" >
                <div className="rewindpage container text-center">
                    <div className="video-responsive">
                        <iframe
                            width="853"
                            height="480"
                            src={`https://www.youtube.com/embed/gvXmhfH-qVU`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            title="Embedded youtube"
                        />
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/sSI7hBiCi_k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Rewind
