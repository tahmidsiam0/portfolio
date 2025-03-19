import { useRef } from "react";
import DP from "../assets/Images/DisplayPic-removebg-preview.png";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import { useGSAP } from "./../../node_modules/@gsap/react/src/index";
import NeonBG from "../assets/Images/nnneon.svg";
import { Link } from "react-router-dom";
import DeveloperSnippet from "./../Components/Common/DeveloperSnippet";
gsap.registerPlugin(TextPlugin);

export default function Homepage() {
  const animationRef = useRef(null);

  useGSAP(() => {
    gsap.to(animationRef.current, {
      duration: 3,
      text: "Front End based web developer",
    });
  }, []);

  return (
    <>
      <div className="details flex h-full">
        <div className="info pe-20 w-2/3 flex flex-col justify-between h-full">
          <p>Hey, I'm</p>
          <p className="text-7xl mt-2">Tahmid Hossen</p>
          <p ref={animationRef}></p>
          {/* <p className="mb-5">
            You can simply call me <strong className="text-2xl">Siam</strong>
          </p> */}
          <DeveloperSnippet />
          {/* <Link to="contact">
            <button className="primary-button cursor-pointer">Contact</button>
          </Link> */}
        </div>

        <div className="w-1/3 h-full relative text-center flex items-end justify-center">
          <img
            className="absolute left-0 top-0 z-2 p-2"
            src={NeonBG}
            alt="Neon Background"
          />
          <img
            className="dp absolute left-0 top-0 z-1 pt-10 p-15"
            src={DP}
            alt="Display Picture of Tahmid Hossen"
          />
          <button className="transition-all secondary-button rounded-4xl active:scale-95">
            <span>Resume</span>
            <span>Download</span>
          </button>
        </div>
      </div>
    </>
  );
}
