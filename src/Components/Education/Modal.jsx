import { XSmall, ZoomIn } from "akar-icons";
import { useEffect, useRef, useState } from "react";
import HSC_Certificate from "../../assets/Images/HSC_Certificate.jpg";
import PSC_Certificate from "../../assets/Images/PSC_Certificate.jpeg";
import BSS_Registration from "../../assets/Images/BSS_Registration.jpeg";
import dividerIcon from "../../assets/Images/divider.png";
import ImageModal from "./ImageModal";
import { CurvedArrow } from "../Common/SVG";
import { createBlendy } from "blendy";
import { createPortal } from "react-dom";

export default function Modal({ setShowModal, blendy, course }) {
  const [showImgModal, setShowImgModal] = useState(false);
  const blendy2 = useRef(null);
  const imageDecider =
    course.title === "BSS"
      ? BSS_Registration
      : course.title === "HSC"
      ? HSC_Certificate
      : PSC_Certificate;

  useEffect(() => {
    blendy2.current = createBlendy();

    // const handleKeyDown = (e) => {
    //   if (e.key === "Escape")
    //     blendy.untoggle(course.title, () => setShowModal(false));
    // };
    // document.addEventListener("keydown", handleKeyDown);
    // return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {showImgModal &&
        createPortal(
          <ImageModal
            img={imageDecider}
            setShowImgModal={setShowImgModal}
            blendy={blendy2.current}
            title={`${course.title}2`}
          />,
          document.body
        )}
      <div>
        <div
          className="bg-black fixed z-20 top-0 left-0 right-0 bottom-0 opacity-25 w-full"
          onClick={() => {
            blendy.untoggle(course.title, () => setShowModal(false));
          }}
        ></div>

        <div
          data-blendy-to={course.title}
          className="modal bg-third rounded-lg h-110 w-260 p-15 m-10 shadowSecondary absolute top-7 right-5 z-30 grid grid-cols-2"
        >
          <div className="px-5 flex flex-col justify-evenly">
            <button
              className="absolute right-0 top-0 cursor-pointer hover:bg-secondary p-3 rounded-lg transition-all group"
              onClick={() => {
                blendy.untoggle(course.title, () => setShowModal(false));
              }}
              aria-label="Close Modal"
            >
              <XSmall
                strokeWidth={3}
                size={20}
                className="group-active:scale-80"
              />
            </button>
            <div>
              <p className="text-2xl">{course.course}</p>
              {typeof course.year === "number" ? (
                <p className="text-md">Passing Year: {course.year}</p>
              ) : (
                <p className="text-md">Session: 2022 - 2023</p>
              )}
              {typeof course.year === "number" && (
                <p className="opacity-80">
                  GPA: <strong>{course.GPA}</strong>
                </p>
              )}
              <p className="opacity-60 text-sm">{course.description}</p>
            </div>
            <div>
              <img
                className="opacity-20"
                src={dividerIcon}
                alt="Divider Icon"
              />
            </div>
            <div>
              <p className="text-lg mt-4">{course.institute}</p>
              <p className="opacity-60 text-sm">{course.instituteInfo}</p>
            </div>
          </div>
          <div className="flex flex-col text-center justify-center items-center relative">
            <div className="w-fit h-60 flex justify-center">
              <div
                data-blendy-from={`${course.title}2`}
                onClick={() => {
                  if (!blendy2.current) return;
                  setShowImgModal(true);
                  blendy2.current.toggle(`${course.title}2`);
                }}
                className="relative"
              >
                <div className="flex absolute -top-10 -right-10 opacity-30">
                  <p className="font-secondary w-25 relative">Try clicking</p>
                  <CurvedArrow className="rotate-240 absolute -right-4 top-4.5" />
                </div>
                <div className="bg-black absolute h-full w-full flex justify-center items-center rounded-lg cursor-pointer opacity-0 hover:opacity-40 transition-all group">
                  <ZoomIn
                    size={36}
                    color="white"
                    className="group-active:scale-90"
                  />
                </div>
                <img
                  className="rounded-lg h-full"
                  src={imageDecider}
                  alt="Certification"
                />
              </div>
            </div>
            <p className="opacity-60 mt-2">
              <i>
                {course.title === "BSS" ? "Registration" : "Certificate"} of{" "}
                {course.title}
              </i>
            </p>
          </div>
        </div>
        <p className="text-center text-white absolute bottom-3 left-0 right-0">
          Press Esc or click anywhere outside the modal to close
        </p>
      </div>
    </>
  );
}
