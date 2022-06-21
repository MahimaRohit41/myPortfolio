import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hello, I am Mahima</h2>
        <div className="prompt">
          <p>A student with a passion for learning and creating.</p>
          <FaLinkedin/>
          <FaGithub/>
          <FaTwitter/>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, amet error temporibus id quasi labore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, facere.
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui voluptatem amet beatae a molestiae voluptas.
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolor.</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
