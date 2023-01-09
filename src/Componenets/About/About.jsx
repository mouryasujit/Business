import React from "react";
import "./About.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const About = () => {
  return (
    <>
      <Navbar />
      <div class="sections">
        <div class="about-containers">
          <div class="content-section">
            <div class="title">
              <h2>About Us</h2>
            </div>
            <div class="content">
              <h3>We are Maurya Global </h3>
              <p>
                elit. Quam dolorem obcaecati saepe enim vitae nobis animi
                cumque, accusamus, nesciunt eos aspernatur necessitatibus
                excepturi veniam hic autem laborum beatae amet eum! Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Nam saepe, sint
                quidem, quas labore, doloremque consequatur ab perferendis illo
                eius odit qui debitis. Laboriosam ad quaerat ut, aperiam eveniet
                officiis!
              </p>
              <div class="button">
                <Link to="/contact" className="link">
                  Contact Us
                </Link>
              </div>
            </div>
            <div class="social">
              <Link to="" className=".link">
                <FacebookIcon className="i" fontSize="large" />
              </Link>
              <Link to="" className=".link">
                <InstagramIcon className="i" fontSize="large" />
              </Link>
              <Link to="" className=".link">
                <LinkedInIcon className="i" fontSize="large" />
              </Link>
            </div>
          </div>
          <div class="image-section">
            <img src="/images/grid_image1.png" alt="office-imag" width="100%" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
