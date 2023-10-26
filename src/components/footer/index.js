import React from "react";
import FooterLogo from "../../images/footer-logo.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./style.scss";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="footer-content-block">
                <div className="logo-block">
                  <img
                    src={FooterLogo}
                    alt={"FooterLogo"}
                    className="footer-logo "
                  />
                  <ul className="social-link">
                    <li>
                      <a href="javascript:void(0);">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <FaInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <FaTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer-menu-block">
                  <h2>Locations</h2>
                  <ul>
                    <li>
                      <a href="javascript:void(0);">Ambattur</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Avadi</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Thirumullaivoyal</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Poompozilnagar</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Mugapair</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-menu-block">
                  <h2>Links</h2>

                  <ul>
                    <li>
                      <a href="javascript:void(0);">Home</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Sweet</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Savouries</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">About Us</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="footer-menu-block">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="javascript:void(0);">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">Cookie Policy</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="copy-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <h6>
                Copyright © 2022 <span>ZamZamSweets</span>. All Rights Reserved.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
