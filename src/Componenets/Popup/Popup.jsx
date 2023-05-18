import React from "react";
import "./Popup.css";
import { useState } from "react";
import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
let counts = 0;
const Popup = () => {
  const [usePop, setusePop] = useState();

  useEffect(() => {
    const onPageLoad = () => {
      if (counts === 0) {
        setusePop(true);
        counts++;
      } else {
        counts++;
      }
    };
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <>
      {usePop && (
        <section className="contact">
          <div onClick={() => setusePop(false)} className="popupcross">
            <CloseIcon style={{ fontSize: "36px" }} />
          </div>
          <div className="content">
            <h2>Contact Us</h2>
            <div className="contactform">
              <form action="https://formspree.io/f/mvonvyzd" method="POST">
                <h2>Send Message</h2>
                <div className="inputbox">
                  <input type="text" name="name" required />
                  <span>Full Name</span>
                </div>
                <div className="inputbox">
                  <input type="email" name="email" required />
                  <span>Email</span>
                </div>
                <div className="inputbox">
                  <textarea name="message" required></textarea>
                  <span>The message you need to send... </span>
                </div>
                <div className="inputbox">
                  <input type="submit" value="Send" />
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Popup;
