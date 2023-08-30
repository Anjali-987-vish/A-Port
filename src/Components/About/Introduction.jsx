import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Anjali.jpg";


export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            LET ME  <span className="different"> INTRODUCE </span> MYSELF 🙋‍♀️
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone 👋, My name is{" "}
                <span className="different">Anjali Vishwakarma</span> and I am from{" "}
                <span className="different">
                  {" "}
                  Mirzapur in Uttar Pradesh (India)
                </span>
                . I am excited as a get closer to completing my B.Tech degree in Information Technology
                 in {"2024"} from{" "}
                <span className="different">
                Dr. Ambedkar Institute Of Technology For Handicapped , Kanpur. {" "}
                </span>
               Recently , I had the chance to work as a web Developer during a one-month internship at a startup called  {" "}
                <span className="different">Code Alpha</span>, It was a cool experience that taught me a lot about creating websites.
              </h4>
              {/* <h4>Terms That can describe me apart form Coding :</h4> */}
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
               Programmer
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Developer
              </h4>
              {/* <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                YouTuber{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Poet{" "}
              </h4> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
