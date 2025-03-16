export default function ImageModal({ img }) {
  return (
    <div className="flex justify-center items-center fixed top-0 left-0 right-0 bottom-0 z-40">
      <div className="bg-black fixed top-0 left-0 right-0 bottom-0 opacity-50 blur-2xl"></div>
      <div className="flex items-center justify-center relative z-50">
        <img className="h-120" src={img} alt="Certificate/Registration" />
      </div>
    </div>
  );
}
