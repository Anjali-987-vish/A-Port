import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiDjango,
  SiPostgresql,
  SiReact,
  SiAmazonaws
  
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
export const Projects = () => {
  return (
    <>
      <div className="section">
        <h2 className="section__title different">Projects 👩🏻‍💻</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://miro.medium.com/v2/resize:fit:2000/format:webp/1*Qxpy7GN8132veIMzUfWOLA.png"
                    alt="Chat - App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Chat - App </h2>
                <p>
                Designed and Developed a real-time chat application with React.js, Node.js, and Socket.IO, allowing users to communicate
seamlessly and efficiently.It supports multi-user functionality, allowing multiple users to engage in real-time
conversations.
                </p>
                <div>
                {/* <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                  <SiDjango />
                  <SiPostgresql /> */}
                </div>
                <div>
                  {/* <a
                    href="https://store-rockstargames.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/Anjali-987-vish/Chat-App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://res.cloudinary.com/practicaldev/image/fetch/s--LjoUBzAE--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/59c00m1unsjv97o7n4av.png"
                    alt="routes-web-App"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Sorting - Visualizer</h2>
                <p>
               This Sorting Visualizer created using html ,CSS and Javascript will be displaying the working mechanism of various sorting algorithms like, Bubble Sort, Selection Sort, Insertion Sort, Quick Sort, Heap Sort and Merge Sort.
                </p>
                <div>
                  
                  {/* <SiHtml5 />
                  <SiDjango /> */}
                  
                </div>
                <div>
                  {/* <a
                    href="https://sk-weather-app.netlify.app/weather-app.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/Anjali-987-vish/Sorting-Visualizer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img src="https://user-images.githubusercontent.com/42378118/99897986-fd02dc00-2cc3-11eb-9cac-f5b577bfef40.png" alt="" />
                </div>
              </div>
              <div className="project_information">
                <h2>Weather - App </h2>
                <p>
                A weather application is designed using HTML, CSS, and JavaScript, providing real-time weather details
through a responsive and device-adaptive interface, User can search for a specific city and get the weather report

                </p>
                <div>
                  {/* < SiReactrouter /> */}
                 
                  
                 
                </div>
                <div>
                  {/* <a
                    href="https://www.npmjs.com/package/apijs-mongo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      View NPM Package
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/Anjali-987-vish/Weather-App"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/02/chatgpt-page-on-openai-website-with-the-try-chatgpt-button-highlighted.webp"
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Chat - Gpt clone</h2>
                <p>
                This application leverages the capabilities of OpenAI’s GPT-3 language model to
enable users to engage in conversations with the AI, It has Provided Additional Features like Text Summarization,Paragraph Generator,Code Converter and AI
image Generator using OpenAI.
                </p>
                <div>
                  {/* <SiReact/> */}
                 
                </div>
                <div>
                  {/* <a
                    href="https://drive-system.herokuapp.com/user/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      URL for the API
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/Anjali-987-vish/Chat-Gpt-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://nordicapis.com/wp-content/uploads/5-Best-Speech-to-Text-APIs-in-2021.png"
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Speech-React App</h2>
                <p>
                About
This is a react application made using Speech-Recognition .it will convert your voice into text .many more functionalities are provided in it, like You can open the websites ,change the background color of the web page ,etc.
                </p>
                <div>
                  {/* <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb /> */}
                 
                </div>
                <div>
                  {/* <a
                    href="https://uniqlo-clone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/Anjali-987-vish/Speech-react-app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://user-images.githubusercontent.com/10364402/101376379-30935800-38b9-11eb-8e03-a00c93203a53.png"
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Url - Shortner</h2>
                <p>
                This URL shortener is an application that converts a regular URL into its condensed format.

                </p>
                <div>
                {/* <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiAmazonaws /> */}
                </div>
                <div>
                  {/* <a
                    href="https://pulseplus-clone.netlify.app/landing_page.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a> */}
                  <a
                    href="https://github.com/Anjali-987-vish/CodeAlpha_URL_Shortner"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};
