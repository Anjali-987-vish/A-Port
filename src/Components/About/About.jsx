import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h1 data-aos="fade-right" className="mobileHead">
          Hey there ! 👋, I'm <span className="about__name">Anjali Vishwakarma</span> 👩🏻‍💻
        </h1>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          


        {/* I'm an enthusiastic Full Stack Developer who loves to create and innovate. I'm skilled in the MERN (MongoDB, Express.js, React.js, Node.js) stack, which lets me build awesome web applications. My journey in the development world has exposed me to a variety of tools and technologies that I'm really good at using. I'm always eager to learn and improve, excited to explore new opportunities in the ever-changing tech landscape. */}

        I've been truly fascinated by programming, and it brings me comfort to think that I've grasped a meaningful part of its complex nature... 🤗 . 

I am fluent in classics like C, C++, Javascript.

My field of Interest's are building new  Web Technologies and Products

Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks  like React.js 
My journey in the development world has exposed me to a variety of tools and technologies that I'm really good at using. I'm always eager to learn and improve, excited to explore new opportunities in the ever-changing tech landscape.



        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/Anjali-987-vish"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:arvish946@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+919336364026"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/anjali-vishwakarma-524170212/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
          {/* <a
            href="https://twitter.com/KhakalShreyas"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a> */}
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/14--DEZ0wOfSeBw5iFE1qyOMPw2gng01a/view?usp=drivesdk"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
