import React from "react";
import footerStyles from "@/app/styles/footer.module.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";

export const metadata = {
  url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css",
};

const Footer = () => {
  return (
    <>
      <footer className={footerStyles.footer}>
        <div className={footerStyles.content}>
          <div className={footerStyles.top}>
            <div className={footerStyles["logo-details"]}>
              {/*<i className={footerStyles.fab fa-slack]></i>*/}
              <span className={footerStyles.logo_name}>SuDiPtA FlEx</span>
            </div>
            <div className={footerStyles[`media-icons`]}>
              <Link href="https://www.facebook.com/profile.php?id=100083116548901&mibextid=ZbWKwL">
                <i>
                  {" "}
                  <FaFacebookF />
                </i>
              </Link>
              <Link href="#">
                <i>
                  {" "}
                  <FaTwitter />{" "}
                </i>{" "}
              </Link>
              <Link
                href="https://www.instagram.com/itz_sudipta_prince?igsh=YTludDQ0NDMzbDV0"
                target="_blank"
              >
                <i>
                  {" "}
                  <FaInstagram />{" "}
                </i>
              </Link>
              <Link href="https://www.linkedin.com/in/sudipta-ghorami-261a81292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <i>
                  {" "}
                  <FaLinkedinIn />{" "}
                </i>
              </Link>
              <Link href="#">
                <i>
                  {" "}
                  <FaYoutube />{" "}
                </i>
              </Link>
            </div>
          </div>
          <div className={footerStyles["link-boxes"]}>
            <ul className={footerStyles.box}>
              <li className={footerStyles.link_name}>Company</li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Get started</a>
              </li>
            </ul>
            <ul className={footerStyles.box}>
              <li className={footerStyles.link_name}>Services</li>
              <li>
                <a href="#">App design</a>
              </li>
              <li>
                <a href="#">Web design</a>
              </li>
              <li>
                <a href="#">Logo design</a>
              </li>
              <li>
                <a href="#">Banner design</a>
              </li>
            </ul>
            <ul className={footerStyles.box}>
              <li className={footerStyles.link_name}>Account</li>
              <li>
                <a href="#">Profile</a>
              </li>
              <li>
                <a href="#">My account</a>
              </li>
              <li>
                <a href="#">Prefrences</a>
              </li>
              <li>
                <a href="#">Purchase</a>
              </li>
            </ul>
            <ul className={footerStyles.box}>
              <li className={footerStyles.link_name}>Courses</li>
              <li>
                <a href="#">HTML & CSS</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
              <li>
                <a href="#">Photography</a>
              </li>
              <li>
                <a href="#">Photoshop</a>
              </li>
            </ul>
            <ul className={`${footerStyles.box} ${footerStyles["input-box"]}`}>
              <li className={footerStyles.link_name}>Subscribe</li>
              <li>
                <input type="text" placeholder="Enter your email" />
              </li>
              <li>
                <input type="button" value="Subscribe" />
              </li>
            </ul>
          </div>
        </div>
        <div className={footerStyles["bottom-details"]}>
          <div className={footerStyles.bottom_text}>
            <span className={footerStyles.copyright_text}>
              {" "}
              Copyright © 2023
              <Link href="/"> SuDiPtAFLix</Link> All rights reserved{" "}
            </span>
            <span className={footerStyles.policy_terms}>
              <Link href="/">Privacy policy</Link>
              <Link href="/">Terms & condition</Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
