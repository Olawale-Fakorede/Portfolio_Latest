
import styled from "styled-components";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
// import { Button } from "../Hero/Hero";
import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <>
      <ContactContainer id="contact">
        <h1 className=" text-center text-lg md:text-xl lg:text-3xl" data-aos="flip-down">
          Contact Me
        </h1>
        <form>
          <LeftSide data-aos="fade-right">
            <h1>Discuss your Projects with me</h1>
            <p>
            For inquiries or collaborations, feel free to reach out to me. 
            I am available to discuss any backend or frontend development projects, answer questions, or explore new opportunities. 
            Let us connect and see how we can work together to create exceptional user experiences.
            </p>
            <div className="contact">
              <span>
                <IoMdMail /> ayomidefakorede58@mail.com
              </span>
              <span>
                {" "}
                <FaPhoneAlt />
               +2348122422728
              </span>
              <span>
                <MdLocationOn />
                Oyo , Nigeria
              </span>
              <span>
                <FaXTwitter />
              </span>
            </div>
          </LeftSide>
          <RightSide data-aos="fade-left">
            {/* <div className=" relative w-full">
              <label htmlFor="name" className=" absolute  mt-[-0.7rem] ml-2 bg-black pl-2 pr-2">Your Name</label>
              <FormInput type="text" name="name" id="" />
            </div> */}
            {/* <div className=" relative w-full">
              <label htmlFor="mail" className=" absolute  mt-[-0.7rem] ml-2 bg-black pl-2 pr-2">Your Mail</label>
              <FormInput type="text" name="mail" id="" />
            </div> */}
        
            <textarea name="" id=""></textarea>
          </RightSide>
        </form>
        {/* <Button> Send</Button> */}
      </ContactContainer>
    </>
  );
}

export default Contact;

const ContactContainer = styled.div`
  font-weight: 100;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  h1 {
    text-transform: uppercase;
    color: var(--text-color);
    text-shadow: 0 0 3px var(--text-color);
  }

  form {
    z-index: 2;
    position: relative;
    display: flex;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;

    img {
      height: 100%;
      z-index: 0;
      position: absolute;
      right: -250px;
      top: -10px;
    }
  }

  @media screen and (max-width: 1000px) {
    form {
      flex-direction: column;
      align-items: center;
      width: 100%;
      text-align: center;
      margin: 0;
      margin-bottom: 1rem;
      gap: 3rem;
    }
  }
`;

const LeftSide = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  p {
    font-size: medium;
  }
  span {
    display: flex;
    align-items: center;
    margin: 7px;
    gap: 10px;
    font-size: medium;
    font-weight: 500;
  }

  @media screen and (max-width: 1000px) {
    width: 70%;
    text-align: center;
    .contact {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }

  @media screen and (max-width: 580px) {
    .contact {
      flex-direction: column;
      align-items: center;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

const RightSide = styled.div`
  z-index: 2;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 2rem;

 
  textarea {
    width: 100%;
    height: 190px;
    padding: 1rem 1rem;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #d8cfcf;
    resize: none;
    background-image: url("./Image/Group 62.png");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border: 1px solid rgba(72, 72, 72, 1);
  }

  @media screen and (max-width: 900px) {
    width: 60%;
    gap: 1.5rem;
  }
`;

// const FormInput = styled.input`
//   padding: 1.4rem 0px;
//   width: 100%;
//   border-radius: 3px;
//   border: 1px solid rgba(72, 72, 72, 1);
//   color: var(--textcolor);
//   background-color: #000000;

//   @media screen and (max-width: 900px) {
//     label{
//       color: red;
//     }
   
//   }
// `;
