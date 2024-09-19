import styled from "styled-components";
import { Data } from "./ProjectData";

function Project() {
  return (
    <>
      <MainCotainer id="project">
        <h1 data-aos="flip-down">Project</h1>
        <ProjectCard>
          {Data.map((dat, index) => {
            return (
              <Card data-aos={dat.animation} key={index}>
                <img src={dat.img} alt="" />
                <div className="content">
                  <h1>{dat.SiteName} </h1>
                  <p>
                    {/* Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cupiditate, facilis. */}
                  </p>
                  {/* <div className="grid grid-cols-2 gap-16 md:grid md:grid-cols-2 md:gap-72 lg:grid lg:grid-cols-2 lg:gap-80 pl-5 mt-4"> */}
                    <a className="text-white bg-red-600 no-underline p-2 border-1 rounded-md w-52 mr-44" href={dat.demo} target="_blank">Demo</a>
                    <a className="text-white bg-red-600 no-underline p-2 border-1 rounded-md w-52" href={dat.githubLink} target="_blank">Github</a>
                  {/* </div> */}
                </div>
              </Card>
            );
          })}
        </ProjectCard>
      </MainCotainer>
    </>
  );
}

export default Project;

const MainCotainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-transform: uppercase;
    text-shadow: 0 0 3px var(--text-color);
    font-size: 3rem;
  }
`;
const ProjectCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  @media screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  width: 35%;
  aspect-ratio: 7/4;
  cursor: pointer;
  border-radius: 20px;
  position: relative;
  overflow: hidden;

  img {
    height: 100%;
    width: 100%;
  }

  &:hover .content {
    bottom: 0px;
  }
  &:hover img {
    filter: brightness(0.4);
    transition: all 0.3s;
  }

  .content {
    position: absolute;
    bottom: -7.5rem;
    left: 15px;
    transition: all 0.4s;
  }

  h1 {
    all: unset;
    font-weight: bolder;
    color: var(--theme);
    font-size: 2rem;
  }
  p {
    font-size: small;
  }

  @media screen and (max-width: 900px) {
    width: 100%;

    h1 {
      font-size: 1.4rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
`;
