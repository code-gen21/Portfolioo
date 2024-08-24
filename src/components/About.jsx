import React from "react";
import "./About.css";
import pic from "../assets/pic2.jpg";
import { SlArrowRight } from "react-icons/sl";

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <div className="image-about-section">
          <img src={pic} alt="Siddharth's Pic" />
          <div className="about-section">
            <div className="about-sid">
              Hello I’m a recent Computer Science and Engineering graduate from
              Maharaja Agrasen Institute of Technology with a passion for
              building innovative solutions and a solid foundation in full stack
              development. Focused and enthusiastic developer with a keen
              interest in software development. Throughout my academic journey,
              I developed expertise in some programming languages, like C++ and
              JavaScript, and worked extensively with libraries and frameworks
              such as React JS and Node.js. I am a passionate individual who
              thrives to build and apply algorithms to solve real-world industry
              problems.
            </div>
            <div className="basic-info-container">
              <div className="basic-info">
                <SlArrowRight className="arrow-right" />
                <h4>Birthday:</h4> 17 May 2001
              </div>
              <div className="basic-info">
                <SlArrowRight className="arrow-right" />
                <h4>City:</h4> Ghaziabad, Uttar Pradesh India
              </div>
              <div className="basic-info">
                <SlArrowRight className="arrow-right" />
                <h4>Phone:</h4> 7065306923
              </div>
              <div className="basic-info">
                <SlArrowRight className="arrow-right" />
                <h4>Email:</h4> siddharth.kandwal05@gmail.com
              </div>
            </div>
          </div>
        </div>
        <h3>Interests---------------</h3>
        <div className="interests">
          <div className="each-interest">
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="#1976D2"
                  stroke-width="2"
                  fill="none"
                />

                <path
                  d="M2 12C4 8 8 6 12 6C16 6 20 8 22 12C20 16 16 18 12 18C8 18 4 16 2 12Z"
                  stroke="#2196F3"
                  stroke-width="2"
                />
                <path
                  d="M2 12C4 16 8 18 12 18C16 18 20 16 22 12C20 8 16 6 12 6C8 6 4 8 2 12Z"
                  stroke="#2196F3"
                  stroke-width="2"
                />

                <path
                  d="M12 2C12 6 12 18 12 22"
                  stroke="#2196F3"
                  stroke-width="2"
                />
                <path
                  d="M4.93 4.93C8.24 8.24 15.76 15.76 19.07 19.07"
                  stroke="#2196F3"
                  stroke-width="2"
                />
                <path
                  d="M4.93 19.07C8.24 15.76 15.76 8.24 19.07 4.93"
                  stroke="#2196F3"
                  stroke-width="2"
                />

                <circle cx="12" cy="12" r="1.5" fill="#4CAF50" />
                <circle cx="12" cy="6" r="1.5" fill="#4CAF50" />
                <circle cx="12" cy="18" r="1.5" fill="#4CAF50" />
                <circle cx="6" cy="12" r="1.5" fill="#4CAF50" />
                <circle cx="18" cy="12" r="1.5" fill="#4CAF50" />
                <circle cx="4.93" cy="4.93" r="1.5" fill="#4CAF50" />
                <circle cx="19.07" cy="4.93" r="1.5" fill="#4CAF50" />
                <circle cx="4.93" cy="19.07" r="1.5" fill="#4CAF50" />
                <circle cx="19.07" cy="19.07" r="1.5" fill="#4CAF50" />
              </svg>
            </span>
            Software Development
          </div>
          <div className="each-interest">
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="4"
                  width="18"
                  height="12"
                  rx="2"
                  stroke="#1976D2"
                  stroke-width="2"
                  fill="#E3F2FD"
                />

                <path
                  d="M7 8L5 12L7 16"
                  stroke="#F57C00"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17 8L19 12L17 16"
                  stroke="#F57C00"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 12H15"
                  stroke="#F57C00"
                  stroke-width="2"
                  stroke-linecap="round"
                />

                <path
                  d="M7 10H17"
                  stroke="#004D40"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M7 12H17"
                  stroke="#004D40"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M7 14H17"
                  stroke="#004D40"
                  stroke-width="2"
                  stroke-linecap="round"
                />

                <rect
                  x="10"
                  y="16"
                  width="4"
                  height="1"
                  rx="0.5"
                  fill="#1976D2"
                />
                <rect x="11" y="17" width="2" height="1" fill="#1976D2" />
              </svg>
            </span>
            Problem Solving
          </div>
          <div className="each-interest">
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 8L5 12L7 16"
                  stroke="#F57C00"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <path
                  d="M17 8L19 12L17 16"
                  stroke="#F57C00"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <path
                  d="M9 12H15"
                  stroke="#004D40"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            Web Development
          </div>
          <div className="each-interest">
            <span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="4"
                  r="3"
                  stroke="#4CAF50"
                  stroke-width="2"
                  fill="#A5D6A7"
                />
                <text
                  x="12"
                  y="4"
                  fill="#4CAF50"
                  font-size="4"
                  text-anchor="middle"
                  alignment-baseline="middle"
                >
                  Start
                </text>

                <rect
                  x="6"
                  y="10"
                  width="12"
                  height="6"
                  rx="2"
                  stroke="#2196F3"
                  stroke-width="2"
                  fill="#BBDEFB"
                />
                <text
                  x="12"
                  y="13"
                  fill="#2196F3"
                  font-size="4"
                  text-anchor="middle"
                  alignment-baseline="middle"
                >
                  Step 1
                </text>

                <path
                  d="M12 17L8 13L12 9L16 13L12 17Z"
                  stroke="#FFC107"
                  stroke-width="2"
                  fill="#FFF9C4"
                />
                <text
                  x="12"
                  y="14"
                  fill="#FFC107"
                  font-size="4"
                  text-anchor="middle"
                  alignment-baseline="middle"
                >
                  Decision
                </text>

                <rect
                  x="6"
                  y="20"
                  width="12"
                  height="6"
                  rx="2"
                  stroke="#FF5722"
                  stroke-width="2"
                  fill="#FFCCBC"
                />
                <text
                  x="12"
                  y="23"
                  fill="#FF5722"
                  font-size="4"
                  text-anchor="middle"
                  alignment-baseline="middle"
                >
                  Step 2
                </text>

                <circle
                  cx="12"
                  cy="30"
                  r="3"
                  stroke="#9C27B0"
                  stroke-width="2"
                  fill="#E1BEE7"
                />
                <text
                  x="12"
                  y="30"
                  fill="#9C27B0"
                  font-size="4"
                  text-anchor="middle"
                  alignment-baseline="middle"
                >
                  End
                </text>

                <path
                  d="M12 7V10"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M12 16V19"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M12 20V23"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M12 25L12 30"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                />

                <path
                  d="M8 13L7 11"
                  stroke="#FFC107"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M8 13L7 15"
                  stroke="#FFC107"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M16 13L17 11"
                  stroke="#FFC107"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M16 13L17 15"
                  stroke="#FFC107"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </span>
            Algorithms
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
