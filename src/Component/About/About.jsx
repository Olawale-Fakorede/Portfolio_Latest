import { useState } from "react";
import styled from "styled-components";

function About() {
  const [activeSection, setActiveSection] = useState("hobby");

  return (
    <>
      <AboutContainer id="about">
        <AboutWrapper>
          <img src="./Image/My_Image.png" alt="" data-aos="fade-right" className="h-auto w-2/4"/>
          <AboutPart data-aos="fade-left">
            <h1 >About Me</h1>
            <p className="text-sm md:text-lg lg:text-lg">
            As a Full-Stack Developer, I specialize in creating the visual and interactive elements of websites and web applications. 
            I ensure a seamless and responsive user experience across various devices and browsers by building user interfaces. 
            I collaborate with designers to implement designs and develop servers, as a backend developers I integrate server-side logic. 
            My focus is on performance optimization, accessibility, and maintaining clean, efficient code. I have great strength in backend 
            web development. Creating a well structured database server.
            </p>

            
              <ul className="section">
                <li onClick={() => setActiveSection("hobby")}>Hobbies</li>
                <li onClick={() => setActiveSection("education")}>Education</li>
                <li onClick={() => setActiveSection("other")}>Other</li>
              </ul>

            {activeSection === "hobby" ? (
              <Hobby>
                <ul className="list">
                  <li className="list-items">Coding</li>
                  <li className="list-items">Playing Games</li>
                  <li className="list-items">Listening to Music</li>
                  <li className="list-items">Surfing and researching from the internet </li>
                </ul>
              </Hobby>
            ) : activeSection === "education" ? (
              <Education>
                <ul className="list">
                  <li className="list-items">Larva Coding Academy (Full Stack Web Dvelopment)</li>
                  <li className="list-items">Federal College of Agriculture, Ibadan. (HND Agric & Env. Engineering)</li>
                  <li className="list-items">Federal College of Agriculture, Ibadan. (OND Agric Engineering)</li>
                  <li className="list-items"> </li>
                </ul>
              </Education>
            ) : (
              <Other>
                <ul className="list">
                  <li className="list-items"> Learning new things</li>
                  <li className="list-items"> Politics</li>
                  <li className="list-items"> Agriculture</li>
                  <li className="list-items"> </li>
                </ul>
              </Other>
            )}
          </AboutPart>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
}

export default About;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 0 auto;

  img {
    // width: 60%;
    // height: 400px
    aspect-ratio: 1/1;
    border-radius: 20px;
  }

  /* for Hobby , education and other section  */

  .list {
    all: unset;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .list-items {
    color: white;
    font-weight: 300;
  }

  @media screen and (max-width: 900px) {
    .list {
      text-align: center;
    }
  }
`;
const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;
const AboutPart = styled.div`
  width: 40%;

  h1 {
    all: unset;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 4rem;
  }
  // p {
  //   font-size: 30px;
  //   font-weight: 200;
  // }

  .section {
    all: unset;
    list-style: none;
    gap: 5rem;
    display: flex;
    flex-direction: row;
    text-transform: uppercase;
    color: var(--theme);
    font-weight: bolder;
    cursor: pointer;
  }

  @media screen and (max-width: 900px) {
    width: 100%;
    text-align: center;
    h1{
      font-size: 3rem;
    }
    p{
      font-size: 0.7em;
    }
    .section{
    justify-content: center;
      gap: 2rem;
    }
  }
`;

const BaseSection = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  @media screen and (max-width: 900px) {
    text-align: center;
  }
`;
const Hobby = styled(BaseSection)``;
const Education = styled(BaseSection)``;
const Other = styled(BaseSection)``;

