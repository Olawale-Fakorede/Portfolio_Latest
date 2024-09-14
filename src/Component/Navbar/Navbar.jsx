
import styled from "styled-components";
import { Link } from "react-scroll";
import { GoHomeFill } from "react-icons/go";
import { FaUser } from "react-icons/fa";
import { GiArcher } from "react-icons/gi";
import { FaFilePowerpoint } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
function Navbar() {
  return (
    <>
      <header>
        <Nav className=" ">
          <Name className=" text-2xl md:text-4xl lg:text-6xl font-semibold ">PORTFOLIO</Name>
          <Navitems>
            <Link
              to="home"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-100}
              duration={500}
            >
              <GoHomeFill className="hidden " />
              <li className="list-none  cursor-pointer flex items-center gap-1 text-xl md:text-3xl lg:text-4xl ">
                Home
              </li>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-100}
              duration={500}
            >
              <FaUser className="hidden" />{" "}
              <li className="list-none  cursor-pointer text-xl md:text-3xl lg:text-4xl"> About</li>
            </Link>
            <Link
              to="skill"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-100}
              duration={500}
            >
              <GiArcher className="hidden" />
              <li className="list-none  cursor-pointer text-xl md:text-3xl lg:text-4xl">Skills</li>
            </Link>
            <Link
              to="project"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={0}
              duration={500}
            >
              <FaFilePowerpoint className="hidden" />
              <li className="list-none  cursor-pointer text-xl md:text-3xl lg:text-4xl">Project</li>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
            >
              <MdContactPhone className="hidden" />
              <li className="list-none  cursor-pointer text-xl md:text-3xl lg:text-4xl"> Contact</li>
            </Link>
          </Navitems>
        </Nav>
      </header>
    </>
  );
}

export default Navbar;

const Nav = styled.nav`
  width:85%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
`

const Name = styled.h1`
margin-right: 5rem;
  @media screen and (max-width: 600px) {
    display: none;

  }
`;
const Navitems = styled.ul`
  display: flex;
  gap: 1.5rem;

  li {
    color: var(--text-color);
    position: relative;
  }
  li:hover {
    color: white;
  }
  li::before {
    position: absolute;
    content: "";
    bottom: -5px;
    width: 0%;
    height: 3px;
    background-color: var(--theme);
    transition: all 0.5s ease-in-out;
  }
  li:hover::before {
    width: 105%;
  }
  .hidden {
    font-size: large;
    cursor: pointer;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0px;
    li {
      display: none;
    }
    .hidden {
      display: inline-block;

    }
    .hidden:hover {
      color:red;
    }
  }
`;
