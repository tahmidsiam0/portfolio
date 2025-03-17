import { createBlendy } from "blendy";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modals/Modal";
import { Info } from "akar-icons";

export default function StudyCard({ course }) {
  const [showModal, setShowModal] = useState(false); //first modal
  const blendy = useRef(null); //first modal

  useEffect(() => {
    blendy.current = createBlendy({ animation: "spring" });
  }, []);

  return (
    <>
      {/* Portal for opening first modal */}
      {showModal &&
        createPortal(
          <Modal
            course={course}
            setShowModal={setShowModal}
            blendy={blendy.current}
          />,
          document.querySelector("#portalContainer")
        )}

      <div
        data-blendy-from={course.title}
        onClick={() => {
          if (!blendy.current) return;
          setShowModal(true);
          blendy.current.toggle(course.title);
        }}
        className="bg-third educationCard h-35 rounded-xl mt-0 m-7 flex flex-col justify-evenly px-5 shadowPrimary cursor-pointer  font-primary group overflow-hidden"
      >
        <Info
          className="absolute -right-8 group-hover:right-2 -top-8 group-hover:top-2 opacity-0 group-hover:opacity-50 transition-all duration-300"
          size={24}
        />
        {/* <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
          Click for more details
        </p> */}

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
