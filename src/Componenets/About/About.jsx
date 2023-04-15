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
                Welcome to Maurya Global, an E-Commerce company that specializes
                in the import and export of high-quality vegetables, spices, and
                other products. Our mission is to provide our customers with the
                best products sourced from around the world. At Maurya Global,
                we are passionate about delivering the highest quality products
                to our customers. We have a team of experts who work tirelessly
                to ensure that our products are of the highest standards. Our
                products are sourced directly from trusted farmers and suppliers
                who adhere to strict quality control standards. We pride
                ourselves on offering a wide variety of products, from fresh
                vegetables to spices and other pantry staples. Our range of
                products is carefully curated to ensure that we offer only the
                best to our customers. We believe in building long-term
                relationships with our customers and strive to exceed their
                expectations in every way possible. Thank you for choosing
                Maurya Global, and we look forward to serving you!
              </p>
              <div class="button">
                <Link to="/contact" className="link">
                  Contact Us
                </Link>
              </div>

              <div class="social">
                <a
                  href="https://www.instagram.com/invites/contact/?i=1sxc525ztiiqh&utm_content=qegt46f"
                  target="_blank"
                  className=".link"
                >
                  <FacebookIcon className="i" fontSize="large" />
                </a>
                <a
                  href="https://www.instagram.com/invites/contact/?i=1sxc525ztiiqh&utm_content=qegt46f"
                  className=".link"
                  target="_blank"
                >
                  <InstagramIcon className="i" fontSize="large" />
                </a>
                <a
                  href="https://www.linkedin.com/in/maurya-global-a75888261"
                  className=".link"
                  target="_blank"
                >
                  <LinkedInIcon className="i" fontSize="large" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
