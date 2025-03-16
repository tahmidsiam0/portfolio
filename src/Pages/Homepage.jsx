import { useRef } from "react";
import DP from "../assets/Images/DP2-removebg-preview.png";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/all";
import { useGSAP } from "./../../node_modules/@gsap/react/src/index";
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
      <div className="details flex">
        <div className="info w-2/3">
          <p className="mt-5">Hey, I'm</p>
          <p className="text-7xl my-5">Tahmid Hossen</p>
          <p ref={animationRef} className="mt-3"></p>
          <p className="mb-5">
            You can simply call me <strong className="text-2xl">Siam</strong>
          </p>
          <div className="">
            <button className="primary-button my-10">Contact</button>
          </div>
        </div>

        <div className="myImage w-1/3 relative">
          <div className="img bg-blue-400 w-50 rounded-t-full pt-10 pb-5 shadowImg">
            <img
              className="transition-all opacity-90 hover:opacity-100"
              src={DP}
              alt="Display Picture of Tahmid Hossen"
            />
          </div>
          <div className="bg-secondary w-50 h-30 rounded-t-full text-center absolute top-50 pt-8">
            <p className="mb-2">Explore more?</p>
            <button className="transition-all secondary-button rounded-4xl active:scale-95">
              <span>Resume</span>
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
