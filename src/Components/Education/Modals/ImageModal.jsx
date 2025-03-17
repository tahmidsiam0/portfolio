import { useEffect } from "react";

export default function ImageModal({ img, title, blendy, setShowImgModal }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape")
        blendy.untoggle(title, () => setShowImgModal(false));
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div
        className="flex justify-center items-center fixed inset-0 z-40"
        data-blendy-to={title}
      >
        <div
          className={`fixed inset-0 transition-all duration-300 backdrop-blur-sm
          `}
        ></div>
        <div
          className="bg-black fixed inset-0 opacity-50 backdrop-blur-md transition-all duration-300"
          onClick={() => blendy.untoggle(title, () => setShowImgModal(false))}
        ></div>
        <div className="flex items-center justify-center relative z-50"></div>
        <img
          className="h-120 z-50 rounded-md"
          src={img}
          alt="Certificate/Registration"
        />
        <p className="text-white opacity-60 absolute bottom-3">
          Press Esc or click anywhere outside the modal to close
        </p>
      </div>
    </>
  );
}
