import { useGSAP } from "@gsap/react/src";
import {
  BootstrapFill,
  CssFill,
  HtmlFill,
  JavascriptFill,
  JqueryFill,
  ReactFill,
} from "akar-icons";
import "boxicons";
import gsap from "gsap";

export default function WorkCard({ work }) {
  useGSAP(() => {
    gsap.to("#workCard", {
      scale: 1,
      opacity: 100,
    });
  }, []);

  return (
    <div
      id="workCard"
      className="scale-75 opacity-0 bg-third rounded-tl-xl rounded-br-xl p-3 flex flex-col justify-between items-center relative"
    >
      <div className="h-4/5">
        <a href={work.github} target="_blank" className="peer group relative">
          <img
            className="group-hover:scale-102 rounded-tl-lg rounded-br-lg w-full h-28"
            src={work.img}
            alt={work.name}
          />
          <div className="bg-black h-full w-full opacity-0 group-hover:opacity-80 absolute top-0 flex gap-1 items-center justify-center  rounded-tl-lg rounded-br-lg group-hover:scale-102">
            <HtmlFill fill="#FC490B" />
            <CssFill fill="#2196F3" />
            <JavascriptFill fill="#F1DC55" size={20} />
            <BootstrapFill fill="#5E3B7F" />
            <JqueryFill fill="#268de1" size={20} />
            <ReactFill fill="#0a7ddc" size={22} />
            <box-icon
              type="logo"
              name="tailwind-css"
              color="#00BCFF"
              size="sm"
            />
          </div>
        </a>
        {work.responsive && (
          <div className="bg-fourth absolute right-0 top-0 p-1.5 rounded-bl-lg z-1 opacity-0 peer-hover:opacity-100">
            <p className="text-sm">Responsive</p>
          </div>
        )}
        <p className="text-gray-700 mt-3">{work.description}</p>
      </div>
      <div className="mt-1">
        <a href={work.liveLink} target="blank">
          <button className="bg-fourth tracking-wider py-2 pb-1.5 px-4.5 cursor-pointer rounded-lg mx-3 hover:-translate-y-0.5">
            Live Link
          </button>
        </a>
        <a href={work.github} target="blank">
          <button className="bg-fourth tracking-wider py-2 pb-1.5 px-4.5 cursor-pointer rounded-lg mx-3 hover:-translate-y-0.5">
            Github
          </button>
        </a>
      </div>
    </div>
  );
}
