import React from "react";
import videobg from '../assets/svid6.mp4';
import Footer from "../components/Footer";

function TC() {
  return (
    <>
      <div className="bgvideolg">
        <video src={videobg} autoPlay loop muted className="blurred-video1" />
        <div className="overlay"></div>
      </div>

      <div className="position-absolute text-white d-flex flex-column justify-content-md-center" style={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <div className="container-md px-5 mt-25-mobile">
          <div className="row h-100">
            <div className="col my-auto text-center">
              <h1 className="text-center display-5">Terms & Conditions</h1>
            </div>
            <div className="mt-5 text-center">
              <p>
                <strong>Membership Agreement</strong><br/>
                &bull; By becoming a member of the Hackers Club, you agree to comply with these terms and conditions and any future updates or modifications.<br/>
                &bull; Membership in the Hackers Club is open to individuals who are interested in cybersecurity and related fields.
              </p>

              <p>
                <strong>Membership Fee and Refund Policy</strong><br/>
                &bull; Membership fees are non-refundable. Once the membership fee is paid, there will be no refunds provided for any reason.<br/>
                &bull; The membership fee is payable upon joining and covers a specific duration as determined by the Hackers Club.
              </p>

              <p>
                <strong>Code of Conduct</strong><br/>
                &bull; Members of the Hackers Club are expected to behave in a respectful and professional manner in all interactions and activities related to the club.<br/>
                &bull; Any member engaging in disruptive behavior, harassment, or any activity that goes against the principles of ethical conduct may have their membership revoked without refund.
              </p>

              <p>
                <strong>Cancellation of Membership</strong><br/>
                &bull; The Hackers Club reserves the right to cancel the membership of any individual who violates the code of conduct or engages in any activities that are harmful to the club's reputation.<br/>
                &bull; Membership cancellation may occur without prior notice, and the decision of the Hackers Club's core team is final and unchallengeable.
              </p>

              <p>
                <strong>Intellectual Property</strong><br/>
                &bull; All content, materials, and resources provided to members as part of the Hackers Club remain the intellectual property of the club and its partners.<br/>
                &bull; Members may not distribute, reproduce, or use these materials for commercial purposes without prior written consent.
              </p>

              <p>
                <strong>Limitation of Liability</strong><br/>
                &bull; The Hackers Club and its core team members are not responsible for any harm, damage, or loss arising from the use of information, resources, or activities provided by the club.
              </p>

              <p>
                <strong>Modifications to Terms and Conditions</strong><br/>
                &bull; The Hackers Club reserves the right to modify these terms and conditions at any time. Members will be notified of any changes, and continued membership implies acceptance of the modified terms.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Assuming you have a Footer component */}
    </>
  );
}

export default TC;
