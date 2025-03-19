import DP from "../assets/Images/DisplayPic-removebg-preview.png";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import { useGSAP } from "./../../node_modules/@gsap/react/src/index";
import NeonBG from "../assets/Images/nnneon.svg";
import DeveloperSnippet from "./../Components/Common/DeveloperSnippet";
gsap.registerPlugin(TextPlugin);

export default function Homepage() {
  useGSAP(() => {
    gsap
      .timeline()
      .to("#hey", {
        duration: 0.5,
        text: "Hey, I'm",
        opacity: 100,
      })
      .to("#name", {
        duration: 1,
        text: "Tahmid Hossen",
        opacity: 100,
      })
      .to("#devText", {
        duration: 2,
        text: "Front End based web developer",
        opacity: 100,
      })
      .to(".snippet", {
        opacity: 100,
        scale: 1,
      });

    // gsap.to("#displayImage", { x: 100, duration: 1 });
    //WITH Timelines (cleaner, more versatile)
    // var tl = gsap.timeline().from("#displayImage", { y: 100 });
    // tl.to("#displayImage", { x: 100, duration: 1 });
    // tl.to("#displayImage", { y: 50, duration: 1 });
    // tl.to("#displayImage", { y: 0, x: 100 });

    // then we can control the whole thing easily...
    // tl.pause();
    // tl.resume();
    // tl.seek();
    // tl.reverse();
    // gsap.from("#displayImage", {
    //   opacity: 0,
    //   scale: 0,
    //   ease: "back",
    //   duration: 4,
    // });
    gsap
      .timeline()
      .to("#displayImage", {
        opacity: 100,
        scale: 1,
      })
      .to(".secondary-button", {
        opacity: 100,
        scale: 1,
      });
  }, []);

  return (
    <>
      <div className="details flex h-full">
        <div className="info pe-20 w-2/3 flex flex-col justify-between h-full">
          <div className="h-35">
            <p id="hey" className="opacity-0 h-1/5"></p>
            <p id="name" className="text-7xl opacity-0 h-3/5"></p>
            <p id="devText" className="opacity-0 h-1/5"></p>
          </div>
          {/* <p className="mb-5">
            You can simply call me <strong className="text-2xl">Siam</strong>
          </p> */}
          <DeveloperSnippet />
          {/* <Link to="contact">
            <button className="primary-button cursor-pointer">Contact</button>
          </Link> */}
        </div>

        <div
          id="displayImage"
          className="w-1/3 h-full relative text-center flex items-end justify-center transition-all duration-300 opacity-0 scale-75"
        >
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
          <button className="transition-all secondary-button rounded-4xl active:scale-95 scale-80 opacity-0">
            <span>Resume</span>
            <span>Download</span>
          </button>
        </div>
      </div>
    </>
  );
}
