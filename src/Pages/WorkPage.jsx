import WorkCard from "../Components/Works/WorkCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import { workData } from "../Components/Common/localDatabase";

export default function WorkPage() {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <>
      <InfiniteScroll
        className="scrollbar"
        height={330}
        dataLength={2}
        loader={<p className="text-center">Loading...</p>}
      >
        <div className="grid grid-cols-3 gap-10 justify-center w-full overflow-hidden mb-5">
          {workData.map((work, index) => {
            if (index < 3) {
              return <WorkCard work={work} key={index} />;
            }
          })}
        </div>
        {seeMore && (
          <div className="grid grid-cols-3 gap-10 justify-center w-full overflow-hidden">
            {workData.map((work, index) => {
              if (index > 2) {
                return <WorkCard work={work} key={index} />;
              }
            })}
          </div>
        )}
      </InfiniteScroll>

      <div className="flex justify-center w-full">
        <button
          onClick={() => setSeeMore(seeMore ? false : true)}
          className="mt-4 tracking-widest cursor-pointer px-7 py-2 bg-fourth rounded-md"
        >
          {seeMore ? "See Less" : "See More"}
        </button>
      </div>
    </>
  );
}
