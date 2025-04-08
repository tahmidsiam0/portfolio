import { XSmall, ZoomIn } from "akar-icons";
import { useState } from "react";
import HSC_Certificate from "../../../assets/Images/HSC_Certificate.jpg";
import PSC_Certificate from "../../../assets/Images/PSC_Certificate.jpeg";
import BSS_Registration from "../../../assets/Images/BSS_Registration.jpeg";
import SSC_Marksheet from "../../../assets/Images/SSC_Marksheet.jpg";
import JSC_Marksheet from "../../../assets/Images/JSC_Marksheet.jpg";
import ImageModal from "./ImageModal";
import { createPortal } from "react-dom";
import CourseInfo from "../CourseInfo";
import InstituteInfo from "../InstituteInfo";
import FancyDivider from "../../Common/FancyDivider";
import TryClicking from "../../Common/TryClicking";
import { Divider } from "@mui/material";

export default function Modal({ setShowModal, course }) {
  const [showImgModal, setShowImgModal] = useState(false); //for second modal
  const imageDecider =
    course.title === "BSS"
      ? BSS_Registration
      : course.title === "HSC"
      ? HSC_Certificate
      : course.title === "SSC"
      ? SSC_Marksheet
      : course.title === "JSC"
      ? JSC_Marksheet
      : PSC_Certificate;

  return (
    <>
      {/* Portal for opening second modal */}
      {showImgModal &&
        createPortal(
          <ImageModal img={imageDecider} setShowImgModal={setShowImgModal} />,
          document.body
        )}

      <div>
        <div
          className="bg-black fixed z-20 top-0 left-0 right-0 bottom-0 opacity-25 w-full"
          onClick={() => setShowModal(false)}
        ></div>

        <div className="modal bg-third rounded-lg h-110 w-260 p-15 shadowSecondary absolute z-30 grid grid-cols-2">
          {/* First modal closing button */}
          <button
            className="absolute right-0 top-0 cursor-pointer hover:bg-secondary p-3 rounded-lg transition-all group"
            onClick={() => setShowModal(false)}
            aria-label="Close Modal"
          >
            <XSmall
              strokeWidth={3}
              size={20}
              className="group-active:scale-80"
            />
          </button>

          <div className="px-5 flex flex-col justify-evenly">
            {/* Course info (such as title, passing year, gpa) */}
            <CourseInfo course={course} />

            <FancyDivider />

            {/* Institute info */}
            <InstituteInfo course={course} />
          </div>

          <div className="flex flex-col text-center justify-center items-center relative">
            <div className="w-fit h-60 flex justify-center">
              {/* starting the second modal */}
              <Divider
                onClick={() => setShowImgModal(true)}
                className="relative"
              >
                <TryClicking />

                {/* Image & hover effects */}
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
              </Divider>
            </div>

            {/* Certificate identifying */}
            <p className="opacity-60 mt-2">
              <i>
                {course.title === "BSS"
                  ? "Registration"
                  : course.title === "SSC" || course.title === "JSC"
                  ? "Marksheet"
                  : "Certificate"}{" "}
                of {course.title}
              </i>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
