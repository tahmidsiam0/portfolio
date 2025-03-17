import { useEffect } from "react";

export default function ImageModal({ img, title, blendy, setShowImgModal }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") blendy.untoggle(title, () => setShowModal(false));
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div
        className="flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-40"
        data-blendy-to={title}
      >
        <div
          className="bg-black fixed top-0 left-0 right-0 bottom-0 opacity-50"
          onClick={() => blendy.untoggle(title, () => setShowImgModal(false))}
        ></div>
        <div className="flex items-center justify-center relative z-50"></div>
        <img className="h-120 z-50" src={img} alt="Certificate/Registration" />
      </div>
    </>
  );
}
