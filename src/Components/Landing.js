import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.landingData = props.landingData;
  }
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {this.landingData.firstName}
            <span className="text-primary">{this.landingData.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {this.landingData.phoneNumber} ·
            <a href="mailto:rizkyari4121@email.com">{this.landingData.email}</a>
            <br />
            <a
              href="https://drive.google.com/file/d/1r21rjNlmy8eYrx9_utdfIQMYWvBRtq9A/view?usp=sharing"
              target="_blank"
              download="cv.pdf"
            >
              Click to see my resume
            </a>
          </div>
          <p className="lead mb-5">{this.landingData.bio}</p>

          <div className="social-icons">
            <a href={this.landingData.linkedin} target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href={this.landingData.github} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={this.landingData.facebook} target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href={this.landingData.instagram} target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Landing;
