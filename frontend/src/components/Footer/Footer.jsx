import React from "react";
import "./Footer.css";
import companylogo from "../../assets/Images/Osumare_Logo.png";
import phoneblackvector from "../../assets/Vector/phone_black.svg";
import mailblackvector from "../../assets/Vector/mail_black.svg";
import { menulists, socialLinks } from "../../constant/menu";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-section container-padding">
        <footer role="article" id="footer" tabIndex={0}>
          <div className="footer_wrapper">
            <div className="footer_wrapper-about">
              <img
                src={companylogo}
                alt="Osumare Company Logo"
                className="footer-logo"
              />
              <p className="open-sans-normal">
                The best digital marketing agency in Pune with a proven track
                record of consistently delivering quality service.
              </p>
              <div className="footer_wrapper-address">
                <h3 className="montserrat-bold">Address</h3>
                <p>
                  Survey No. 43, Pathare Thube Nagar, Nagar Road, Kharadi,
                  Pune-14, Maharashtra, India.
                </p>
              </div>
              <div className="footer_wrapper-contacts">
                <h3 className="montserrat-bold">Contacts</h3>
                <p className="open-sans-normal contact-text">
                  <img
                    src={mailblackvector}
                    alt="Email Icon"
                    className="icon"
                  />
                  hello@osumare.in
                </p>
                <p className="open-sans-normal contact-text">
                  <img
                    src={phoneblackvector}
                    alt="Phone Icon"
                    className="icon"
                  />
                  +91 8459 8762 26
                </p>
              </div>
            </div>

            <div className="footer_wrapper-menu">
              <h3 className="montserrat-bold">Menu</h3>
              <ul>
                {menulists.map((item) => (
                  <li key={item.id}>
                    <a href={item.url}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer_wrapper-social">
              <h3 className="montserrat-bold">Social</h3>
              <div className="social-icons">
                {socialLinks.map((item) => (
                  <a key={item.id} href={item.url} className="montserrat-midnormal">
                    <img src={item.imageurl} alt={item.label} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
      <p className="montserrat-midnormal">
        © 2023 Osumare. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
