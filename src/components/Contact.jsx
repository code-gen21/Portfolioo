import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h4>Contact---------------</h4>
        <div className="contact-ways">
          <div className="contact-block">
            <div className="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2C7.03 2 3 6.03 3 11C3 16 12 22 12 22C12 22 21 16 21 11C21 6.03 16.97 2 12 2ZM12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="content">
              <div className="content-heading">My Address</div>
              <div className="main-content">Sector 2A Vasundhara Ghaziabad</div>
            </div>
          </div>
          <div className="contact-block">
            <div className="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.29 6.71C9.68 6.32 10.31 6 11 6C12.1 6 13.15 6.73 13.79 8.07L15.78 10.06C16.42 11.4 16.1 12.63 15.21 13.52L14.07 14.66C13.42 15.31 12.31 15.49 11.36 14.93L9.67 13.87C9.22 13.62 8.92 13.17 8.88 12.66C8.84 12.21 9.01 11.79 9.36 11.52L10.29 10.59C10.68 10.2 11.31 10 12 10C12.68 10 13.32 10.25 13.8 10.8L11.81 12.79C11.39 13.21 10.87 13.37 10.37 13.07L9.07 12.18C8.91 12.06 8.83 11.85 8.88 11.65C8.93 11.45 9.12 11.32 9.32 11.29L11.62 11.18C12.35 11.14 13.06 10.9 13.58 10.52L15.31 8.79C15.8 8.31 15.95 7.63 15.74 7.02C15.54 6.42 14.86 6 14.22 6H12.29C11.71 6 11.16 6.32 10.76 6.71L9.29 6.71Z"
                  fill="white"
                />
                <path
                  d="M14.5 7.5C15.9 7.5 17.15 8.48 17.81 9.93L19.71 12.06C20.37 13.51 19.85 15.1 18.79 16.06L17.88 17.07C17.3 17.62 16.14 17.61 15.64 16.92L14.1 15.52C13.69 15.15 13.09 15.16 12.7 15.6C12.31 16.04 12.2 16.59 12.39 17.04L12.63 17.46C12.84 18.06 13.3 18.45 13.87 18.64C14.44 18.83 15.06 18.77 15.55 18.42L16.72 17.25C17.23 16.74 17.37 15.86 17.1 15.07L15.45 13.42C14.86 12.83 14.04 12.65 13.24 12.95L12.8 13.25C12.28 13.48 11.73 13.59 11.2 13.55C10.6 13.51 10.12 13.28 9.73 12.85L9.07 12.18C8.67 11.79 8.42 11.28 8.41 10.77C8.41 10.41 8.61 10.1 8.95 10.02L11.37 9.65C12.06 9.58 12.76 9.89 13.31 10.53L14.14 11.31C14.57 11.69 14.97 12.07 15.34 12.49L17.22 14.29C17.76 14.73 18.12 15.36 18.19 16.04C18.27 16.65 17.88 17.2 17.27 17.46L16.34 17.96C15.97 18.15 15.62 18.2 15.28 18.06C14.94 17.92 14.64 17.63 14.5 17.22V17.22C14.5 16.32 14.15 15.46 13.56 14.88L12.46 13.98C11.93 13.43 11.39 13.24 10.89 13.46L10.25 13.73C9.66 13.98 9.03 13.69 8.85 13.12L7.77 11.64C7.58 11.27 7.46 10.84 7.46 10.4C7.46 9.99 7.7 9.58 8.09 9.48L10.14 9.22C11.07 9.11 12.06 9.54 12.82 10.26L14.5 11.75L14.5 7.5Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="content">
              <div className="content-heading">Social Profiles</div>
              <div className="main-content">
                <a
                  href="https://github.com/code-gen21"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="icons-size" size={30} />
                </a>
                <a
                  href="https://www.linkedin.com/in/siddharth-kandwal-4759a0205/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="icons-size" size={30} />
                </a>
                <a
                  href="mailto: siddharth.kandwal05@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaMailBulk className="icons-size" size={30} />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-block">
            <div className="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 6H3C2.45 6 2 6.45 2 7V17C2 17.55 2.45 18 3 18H21C21.55 18 22 17.55 22 17V7C22 6.45 21.55 6 21 6ZM12 13L3 7L21 7L12 13Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="content">
              <div className="content-heading">Email</div>
              <div className="main-content">siddharth.kandwal05@gmail.com</div>
            </div>
          </div>
          <div className="contact-block">
            <div className="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 15.46c-0.25 0-0.49-0.08-0.69-0.22l-2.24-1.55c-0.5-0.35-0.75-0.96-0.6-1.6l0.32-1.19c0.15-0.64 0.59-1.11 1.22-1.22l1.75-0.19c0.65-0.07 1.25 0.22 1.66 0.72l2.04 2.04c0.36 0.36 0.5 0.88 0.35 1.38l-0.35 1.3c-0.14 0.51-0.58 0.85-1.11 0.85zM17.8 13.8l1.09 1.09 0.83-3.14-1.09-1.09-0.83 3.14zM6.62 10.6c-0.4 0.28-0.64 0.74-0.64 1.23v4.18c0 0.5 0.24 0.95 0.64 1.23l1.48 1.04c0.46 0.32 1.05 0.33 1.52 0.03l2.07-2.07c0.47-0.47 0.47-1.22 0-1.69l-1.48-1.48c-0.47-0.47-1.22-0.47-1.69 0l-1.04 1.48c-0.28 0.39-0.73 0.64-1.23 0.64H6.62zM12.45 17.4l-1.8 1.8c-0.3 0.3-0.78 0.3-1.08 0-0.3-0.3-0.3-0.78 0-1.08l1.8-1.8c0.3-0.3 0.78-0.3 1.08 0 0.3 0.3 0.3 0.78 0 1.08z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="content">
              <div className="content-heading">Contact</div>
              <div className="main-content">+91 7065306923</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
