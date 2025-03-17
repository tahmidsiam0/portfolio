import { createBlendy } from "blendy";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";

export default function StudyCard({ course }) {
  const [showModal, setShowModal] = useState(false);
  const blendy = useRef(null);

  useEffect(() => {
    blendy.current = createBlendy({ animation: "spring" });
  }, []);

  return (
    <>
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
        className="bg-third educationCard h-35 rounded-xl mt-0 m-7 flex flex-col justify-evenly px-5 shadowPrimary cursor-pointer  font-primary"
      >
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
