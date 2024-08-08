import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import '../footer.css';
const Footer = () => {
  return (
    <footer className="text-center text-white" style={{ backgroundColor: '#554255' }}>
      <div className="container">
        <section className="mt-5">
          <div className="row text-center d-flex justify-content-center pt-5">
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="text-white">About us</a>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="text-white">Products</a>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="text-white">Awards</a>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="text-white">Help</a>
              </h6>
            </div>
            <div className="col-md-2">
              <h6 className="text-uppercase font-weight-bold">
                <a href="#!" className="text-white">Contact</a>
              </h6>
            </div>
          </div>
        </section>
        <hr className="my-5" />
        <section className="mb-5">
          <div className="row d-flex justify-content-center" style={{ fontWeight: 300 }}>
            <div className="col-lg-8">
            <p>
                Aesthetix Technologies LLC <br />
                26th Street, Al Quoz Industrial Area 4, <br />
                Dubai, United Arab Emirates
              </p>
                <br />
              <p>
                Golden Offices <br />
                Building number: 6759, <br />
                {/* Office number: 428 2nd floor, <br /> */}
                Al Farazdaq St, Ad Dhubat, Riyadh <br />
                12627, Saudi Arabia
              </p>
              <br />
              <p>
                info@aesthetix.ae <br />
                +971 4 320 9096 <br />
              </p>

            </div>
          </div>
        </section>
        <section className="text-center mb-5">
          <a href="/" className="text-white me-4"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="/" className="text-white me-4"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="/" className="text-white me-4"><FontAwesomeIcon icon={faGoogle} /></a>
          <a href="/" className="text-white me-4"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="/" className="text-white me-4"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="/" className="text-white me-4"><FontAwesomeIcon icon={faGithub} /></a>
        </section>
      </div>
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright: <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
      </div>
    </footer>
  );
};

export default Footer;