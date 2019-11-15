import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAward } from "@fortawesome/free-solid-svg-icons";

class Awards extends Component {
  constructor(props) {
    super(props);

    this.awards = props.awards;
  }

  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Training &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            {this.awards.map((data, index) => (
              <li key={index}>
                <li>
                  <FontAwesomeIcon icon={faAward} color="#ffc107" />
                  <span className="ml-2"> {data.awardDetail} on </span>
                  <span className="ml-2"> {data.awardDate} </span>
                </li>
                <li>
                  <span className="ml-2"> - {data.awardDesc} </span>
                </li>
                <li>
                  <a href={data.awardLink} target="_blank">
                    check my certificate here
                  </a>
                </li>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default Awards;
