import "./Footer.css";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faComments,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faSquareInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "../../globalStyles.css";
import { button_img1, button_img2 } from "../../images/Button/ButtonImage";
const Footer = () => {
  const tabletFooter = window.matchMedia("(max-width: 768px)");
  const footerHandle = () => {
    const EleAContact = document.querySelector(".contact-catalog-available a");
    if (EleAContact) {
      tabletFooter.matches
        ? (EleAContact.innerText = "We’re here 24/7:")
        : (EleAContact.innerText = "Our experts are available 24/7");

      tabletFooter.matches
        ? (document.querySelector(".button-contact .button-large").innerText =
            "top")
        : (document.querySelector(".button-contact .button-large").innerText =
            "back to top");
    }
  };
  footerHandle(tabletFooter.matches);
  tabletFooter.addEventListener("change", footerHandle);
  return (
    <Fragment>
      <div className="footer">
        <div className="contact">
          <div className="contact-catalog">
            <div className="contact-catalog-component1">
              <div className="contact-catalog-available">
                <Link className="contact body-bold-medium">
                  Our experts are available 24/7
                </Link>
              </div>
              <div className="contact-catalog-infoContact">
                <Link className="contact">
                  <FontAwesomeIcon icon={faPhone} />
                  <div className="body-bold-medium">1-800-672-4399</div>
                </Link>
                <Link className="contact">
                  <FontAwesomeIcon icon={faComments} />
                  <div className="body-bold-medium">chat now</div>
                </Link>
                <Link className="contact">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <div className="body-bold-medium">message us</div>
                </Link>
              </div>
            </div>
            <div className="contact-catalog-component2">
              <Link className="contact">
                <div
                  className="button-contact"
                  style={{ backgroundColor: "var(--primaryColor-primary-200)" }}
                >
                  <FontAwesomeIcon icon={faArrowUp} />
                  <div className="button-large">back to top</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="about">
          <div className="container">
            <div className="about-catalogs">
              <div className="about-catalog body-medium">
                <Link className="aboutList">About</Link>
                <Link className="aboutList">Investor Relations</Link>
                <Link className="aboutList">Affilliates</Link>
                <Link className="aboutList">Jobs</Link>
                <Link className="aboutList">FAQs</Link>
                <Link className="aboutList">Blog</Link>
                <Link className="aboutList">Give Back</Link>
                <Link className="aboutList">Gift Guide</Link>
                <Link className="aboutList">Gift Cards</Link>
              </div>

              <div className="about-social">
                <Link className="icon-social">
                  <FontAwesomeIcon
                    className="icon-facebook"
                    style={{ color: "var(--secondaryColor-blue-900)" }}
                    icon={faFacebook}
                  />
                </Link>
                <Link className="icon-social">
                  <FontAwesomeIcon
                    className="icon-youtube"
                    style={{ color: "var(--secondaryColor-red-900)" }}
                    icon={faYoutube}
                  />
                </Link>
                <Link className="icon-social">
                  <FontAwesomeIcon
                    className="icon-instagram"
                    style={{ color: "var(--secondaryColor-red-500)" }}
                    icon={faSquareInstagram}
                  />
                </Link>
                <Link className="icon-social">
                  <FontAwesomeIcon
                    className="icon-twitter"
                    style={{ color: "var(--secondaryColor-blue-500)" }}
                    icon={faTwitter}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="app-dowload">
          <div className="app-catalog">
            <Link className="dowload-list">
              <img src={button_img1} alt="" />
            </Link>
            <Link className="dowload-list chplay">
              <img src={button_img2} alt="" />
            </Link>
          </div>
        </div>

        <div className="policy">
          <div className="container">
            <div className="polycy_catalog body-extra-small">
              <Link className="polycy-list">Copyright © 2023, Chewy, Inc.</Link>
              <Link className="polycy-list">Terms of Use</Link>
              <Link className="polycy-list">
                Privacy Policy (Updated Dec 21, 2022)
              </Link>
              <Link className="polycy-list">Interest-Based Ads</Link>
              <Link className="polycy-list">Accessibility</Link>
              <Link className="polycy-list">California Supply Chains Act</Link>
              <Link className="polycy-list">Vendor Compliance</Link>
              <div className="polycy-private">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 8.51294C5.79086 8.51294 4 10.3038 4 12.5129C4 14.7221 5.79086 16.5129 8 16.5129C10.2091 16.5129 12 14.7221 12 12.5129C12 10.3038 10.2091 8.51294 8 8.51294ZM6 12.5129C6 11.4084 6.89543 10.5129 8 10.5129C9.10457 10.5129 10 11.4084 10 12.5129C10 13.6175 9.10457 14.5129 8 14.5129C6.89543 14.5129 6 13.6175 6 12.5129Z"
                    fill="#81B5E9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8 4.51294C3.58172 4.51294 0 8.09466 0 12.5129C0 16.9312 3.58172 20.5129 8 20.5129H16C20.4183 20.5129 24 16.9312 24 12.5129C24 8.09466 20.4183 4.51294 16 4.51294H8ZM2 12.5129C2 9.19923 4.68629 6.51294 8 6.51294H16C19.3137 6.51294 22 9.19923 22 12.5129C22 15.8266 19.3137 18.5129 16 18.5129H8C4.68629 18.5129 2 15.8266 2 12.5129Z"
                    fill="#81B5E9"
                  />
                </svg>
                <Link className="polycy-list">Your Privacy Choices</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-mobile">
        <div className="contact">
          <div className="contact-catalog">
            <div className="contact-catalog-component2">
              <Link
                className="contact"
                style={{ backgroundColor: "var(--primaryColor-gray-while)" }}
              >
                <div className="button-contact">
                  <FontAwesomeIcon icon={faArrowUp} />
                  <div className="button-large">back to top</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="about">
          <div className="container">
            <div className="about-catalogs">
              <div className="about-catalog body-medium">
                <Link className="aboutList">About</Link>
                <Link className="aboutList">Investor Relations</Link>
                <Link className="aboutList">Affilliates</Link>
                <Link className="aboutList">Jobs</Link>
                <Link className="aboutList">FAQs</Link>
                <Link className="aboutList">Blog</Link>
                <Link className="aboutList">Give Back</Link>
                <Link className="aboutList">Gift Guide</Link>
                <Link className="aboutList">Gift Cards</Link>
              </div>

              <div className="about-social">
                <Link className="icon-social">
                  <FontAwesomeIcon
                    className="icon-facebook"
                    style={{ color: "var(--secondaryColor-blue-900)" }}
                    icon={faFacebook}
                  />
                </Link>
                <Link className="icon-social">
                  <FontAwesomeIcon
                    className="icon-youtube"
                    style={{ color: "var(--secondaryColor-red-900)" }}
                    icon={faYoutube}
                  />
                </Link>
                <Link className="icon-social">
                  <FontAwesomeIcon
                    className="icon-instagram"
                    style={{ color: "var(--secondaryColor-red-500)" }}
                    icon={faSquareInstagram}
                  />
                </Link>
                <Link className="icon-social">
                  <FontAwesomeIcon
                    className="icon-twitter"
                    style={{ color: "var(--secondaryColor-blue-500)" }}
                    icon={faTwitter}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div> */}

        <div className="app-dowload">
          <div className="button-large">Take it on HPT app</div>
          <div className="app-catalog">
            <Link className="dowload-list">
              <img src={button_img1} alt="" />
            </Link>
            <Link className="dowload-list chplay">
              <img src={button_img2} alt="" />
            </Link>
          </div>
        </div>

        <div className="contact-phone">
          <div className="body-bold-small">We’re here 24/7:</div>
          <div className="body-bold-small">+84123456789</div>
        </div>

        <div className="info-contact body-small">
          <div>Copyright 2023, HPT. Inc.</div>
          <div className="ic-item">
            <div>Privacy Policy(Updated Dec 21, 2022)</div>
            <div>Terms of Use</div>
            <div>Accessibility</div>
          </div>
          <div className="ic-item">
            <div>Vendor Compliance</div>
            <div>California Supply Chains Act</div>
          </div>
          <div className="ic-item">
            <div>About</div>
            <div>Investor Relations</div>
            <div>Jobs</div>
            <div>Blog</div>
          </div>
          <div className="ic-item">
            <div>Gift Cards</div>
            <div>Gift Guid</div>
            <div>Give Back</div>
          </div>
          <div className="polycy-private">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 8.51294C5.79086 8.51294 4 10.3038 4 12.5129C4 14.7221 5.79086 16.5129 8 16.5129C10.2091 16.5129 12 14.7221 12 12.5129C12 10.3038 10.2091 8.51294 8 8.51294ZM6 12.5129C6 11.4084 6.89543 10.5129 8 10.5129C9.10457 10.5129 10 11.4084 10 12.5129C10 13.6175 9.10457 14.5129 8 14.5129C6.89543 14.5129 6 13.6175 6 12.5129Z"
                fill="#81B5E9"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8 4.51294C3.58172 4.51294 0 8.09466 0 12.5129C0 16.9312 3.58172 20.5129 8 20.5129H16C20.4183 20.5129 24 16.9312 24 12.5129C24 8.09466 20.4183 4.51294 16 4.51294H8ZM2 12.5129C2 9.19923 4.68629 6.51294 8 6.51294H16C19.3137 6.51294 22 9.19923 22 12.5129C22 15.8266 19.3137 18.5129 16 18.5129H8C4.68629 18.5129 2 15.8266 2 12.5129Z"
                fill="#81B5E9"
              />
            </svg>
            <Link className="polycy-list">Your Privacy Choices</Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Footer;
