import ShoppingMania from "../../assets/Images/shopping_mania.png";

export default function WorkCard({ work }) {
  return (
    <div className="bg-third  rounded-tl-xl rounded-br-xl p-3 flex flex-col justify-between items-center group relative">
      <a
        href={work.github}
        target="blank"
        className="peer m-2 mt-1 overflow-hidden rounded-tl-lg rounded-br-lg"
      >
        <img className="hover:scale-105" src={ShoppingMania} alt="" />
        <p className="text-gray-700 mt-2">{work.description}</p>
      </a>
      <div className="mb-2">
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
      {work.responsive && (
        <div className="bg-fourth absolute right-0 top-0 p-1.5 rounded-bl-lg z-1 opacity-0 peer-hover:opacity-100">
          <p className="text-sm">Responsive</p>
        </div>
      )}
    </div>
  );
}
