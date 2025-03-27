import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modals/Modal";
import { Info } from "akar-icons";

export default function StudyCard({ course }) {
  const [showModal, setShowModal] = useState(false); //first modal

  return (
    <>
      {/* Portal for opening first modal */}
      {showModal &&
        createPortal(
          <Modal course={course} setShowModal={setShowModal} />,
          document.querySelector("#portalContainer")
        )}

      <div
        onClick={() => {
          setShowModal(true);
        }}
        className="bg-third educationCard h-35 rounded-xl mt-0 m-7 flex flex-col justify-evenly px-5 shadowPrimary cursor-pointer  font-primary group overflow-hidden"
      >
        <Info
          className="absolute -right-8 group-hover:right-2 -top-8 group-hover:top-2 opacity-0 group-hover:opacity-50 transition-all duration-300"
          size={24}
        />
        <p className="text-2xl">
          {course.course} ({course.title})
        </p>
        <p className="text-sm opacity-60">{course.institute}</p>
        <p className="text-sm">
          Department: <strong>{course.department}</strong>
        </p>
        {typeof course.year === "number" ? (
          <p className="text-l">
            GPA: <strong>{course.GPA}</strong>{" "}
            <span className="opacity-30"> out of 5.00</span>
          </p>
        ) : (
          <p>{course.GPA}</p>
        )}
      </div>
    </>
  );
}
