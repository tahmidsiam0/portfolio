import { XSmall, ZoomIn } from "akar-icons";
import { useEffect } from "react";
import HSC_Certificate from "../../assets/Images/HSC_Certificate.jpg";
import PSC_Certificate from "../../assets/Images/PSC_Certificate.jpeg";
import BSS_Registration from "../../assets/Images/BSS_Registration.jpeg";
import dividerIcon from "../../assets/Images/divider.png";
import ImageModal from "./ImageModal";

export default function Modal({ setShowModal, blendy, course }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape")
        blendy.untoggle(course.title, () => setShowModal(false));
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
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
            <img className="opacity-20" src={dividerIcon} alt="Divider Icon" />
          </div>
          <div>
            <p className="text-lg mt-4">{course.institute}</p>
            <p className="opacity-60 text-sm">{course.instituteInfo}</p>
          </div>
        </div>
        <div className="flex flex-col text-center justify-center items-center">
          <ImageModal img={BSS_Registration} />
          <div className="w-fit h-60 flex justify-center relative">
            <div className="bg-black absolute h-full w-full flex justify-center items-center rounded-lg cursor-pointer opacity-0 hover:opacity-40 transition-all group">
              <ZoomIn
                size={36}
                color="white"
                className="group-active:scale-90"
              />
            </div>
            <img
              className="rounded-lg h-full"
              src={
                course.title === "BSS"
                  ? BSS_Registration
                  : course.title === "HSC"
                  ? HSC_Certificate
                  : PSC_Certificate
              }
              alt="Certification"
            />
          </div>
          <p className="opacity-60 mt-2">
            <i>
              {course.title === "BSS" ? "Registration" : "Certificate"} of{" "}
              {course.title}
            </i>
          </p>
        </div>
      </div>
      <p className="text-center text-white">
        Press Esc or click anywhere outside the modal to close
      </p>
    </div>
  );
}
