import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <h1>
            <i className="icon-colour">
              <LocationOnIcon fontSize="larger" />
            </i>
            Find Us
          </h1>
          <div className="map-container">
            <div className="address">
              <h3>Maurya Global Private ltd.</h3>
              <div className="add">
                Malad, Rathodi, Malad West,5RW8+5QP , Maharashtra,Mumbai-400095
              </div>
              <div className="Email">
                <i className="icon-colour">
                  <EmailIcon fontSize="large" />
                </i>
                <span>Email: </span>pm206348@gmail.com
              </div>
              <div className="callraj">
                <i className="icon-colour">
                  <PhoneIcon fontSize="large" />
                </i>
                <span>Prashant Maurya: </span> +91 8104730648
              </div>
            </div>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.9939868147912!2d72.81476931490306!3d19.19546498701947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x29c8dc8a51cd90bc!2zMTnCsDExJzQzLjciTiA3MsKwNDknMDEuMSJF!5e0!3m2!1sen!2sin!4v1673006458575!5m2!1sen!2sin"
                title="iframe"
                style={{ border: 0, height: 400, width: 600 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div
          className="social-contain"
          style={{ borderTop: "2px dotted  #a5f0d3" }}
        >
          <div className="both-container">
            <div className="letsConnect">
              <h2 className="icon-colour">Lets Connect</h2>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/maurya-global-a75888261"
                target="_blank"
              >
                <i className="icon-colour">
                  <LinkedInIcon fontSize="large" />
                </i>
                <h6>linkedIn</h6>
              </a>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/maurya-global-a75888261"
                target="_blank"
              >
                <i className="icon-colour">
                  <LinkedInIcon fontSize="large" />
                </i>
                <h6>linkedIn</h6>
              </a>
            </div>
            <div className="lg-container">
              <img src="/images/MLOGO.png" alt="C logo" />
            </div>
            <div className="Media">
              <h2 className="icon-colour">Social Media</h2>
              <a
                className="Instagram"
                href="https://www.instagram.com/invites/contact/?i=1sxc525ztiiqh&utm_content=qegt46f"
                target="_blank"
              >
                <i className="icon-colour">
                  <InstagramIcon fontSize="large" />
                </i>
                <h6>Instagram</h6>
              </a>
              <a
                className="Facebook"
                href="https://www.instagram.com/invites/contact/?i=1sxc525ztiiqh&utm_content=qegt46f"
                target="_blank"
              >
                <i className="icon-colour">
                  <FacebookIcon fontSize="large" />
                </i>
                <h6>Facebook</h6>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
