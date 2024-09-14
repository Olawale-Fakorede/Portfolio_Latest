
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
import { FiDownload } from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";

export const Button = styled.button`
  all: unset;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  background-color: var(--theme);
  color: var(--text-color);
  padding: 20px 40px;
  border-radius: 3px;
  cursor: pointer;

  @media screen and (max-width: 500px) {
    font-size: 0.8rem;
    padding:7px 23px ;

  }
`;

export function Hero() {
  return (
    <>
      <HeroContainer className=" h-screen ">
        <Navbar />

        <Main>
          <About data-aos="fade-right">
            <h1 className=" text-5xl mb-0 ">
              Hello! 
              <br/>
              I'm <span>Olawale Fakorede</span>
            </h1>
            <h2 id="h2" className="mb-0 ">
              And I'm {" "}
              <span className="typedeffect text-2xl md:text-2xl lg:text-5xl">
                <Typewriter
                  className="  xs:text-yellow-400"
                  words={["Full Stack Developer", "Frontend Developer", "Tutor", "Backend Developer"]}
                  loop={false}
                  cursor
                  cursorStyle=""
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <p className="text-sm md:text-lg lg:text-4xl  mb-9">
              Hi!!, i am a passionate frontend developer . 
              A Frontend Developer focuses on creating and optimizing the user-facing aspects of websites, ensuring they are visually appealing and user-friendly.
             
            </p>
            <a
              // href="Interview.pdf"
              download="Resume.pdf"
              className=" no-underline"
            >
              <Button className="h-5 w-10">
                <FiDownload />
                My Resume
              </Button>
            </a>
          </About>

          <img
            data-aos="fade-left"
            src="./Image/image1.jpg"
            alt=""
            className="aspect-square
            w-1/3 rounded-full mt-24 border-4 border-solid"
          />
        </Main>
      </HeroContainer>
    </>
  );
}

// export default Hero;

const HeroContainer = styled.div`
width: 100vw;
  @media screen and (max-width: 900px) {
    height: 80vh;
  }
`;
const About = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .typedeffect {
    color: var(--theme);
  }

  @media screen and (max-width: 900px) {
    align-items: center;
    width: 100%;
    h1 {
      font-size: 2rem;
      white-space: nowrap;
    }
    P {
      text-align: center;
    }
    #h2 {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 90px;
      font-size: 1rem;
    }
    .typedeffect {
      display: inline-block;
      color: var(--theme);
    }
    @media screen and (max-width: 430px) {
      h1 {
        font-size: 1.3rem;
      }
      .typedeffect {
        font-size: 1.4rem;
      }
    }
  }
`;

const Main = styled.div`
  /* border: 2px solid white; */
  display: flex;
  color: var(--text-color);
  width: 90%;
  margin: 0 auto;
  justify-content: space-around;

  img {
    border-color: var(--theme);
    box-shadow: var(--box-shadow);
  }

  @media screen and (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
