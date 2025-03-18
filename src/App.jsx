import Homepage from "./Pages/Homepage";
import { Route, Routes } from "react-router-dom";
import SkillPage from "./Pages/SkillPage";
import LeftNavBar from "./Components/Navigation/LeftNavBar";
import EducationPage from "./Pages/EducationPage";
import { useEffect, useState } from "react";
import ConstructionImage from "./assets/Images/construction.png";
import NothingFoundPage from "./Pages/NothingFoundPage";
import AnimatedShape from "./assets/Images/Animated.svg";

function App() {
  const [construction, setConstruction] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setConstruction(true);
    }, 2000);
  }, []);

  return (
    <>
      {/* {construction && (
        <div className="fixed inset-0 z-50 flex flex-col justify-evenly items-center backdrop-blur-sm pb-5 transition-all duration-500">
          <div className="fixed inset-0 bg-black opacity-60"></div>
          <p className="text-white z-1">
            This site is under construction. Please visit later 😊
          </p>
          <img className="z-50 h-100" src={ConstructionImage} alt="" />
          <button
            className="bg-amber-300 p-5 z-1 rounded-lg cursor-pointer"
            onClick={() => setConstruction(false)}
          >
            Force Visit
          </button>
        </div>
      )} */}
      <div className="font-primary w-full py-7 pe-15">
        <div className="flex justify-between">
          <LeftNavBar />
          <div
            id="portalContainer"
            className="bg-[#F1F1FC] rounded-lg h-110 w-260 my-10 shadowSecondary relative"
          >
            <img
              className="absolute"
              src={AnimatedShape}
              alt="Animated Shape"
            />
            <div className="h-full w-full px-15 py-10 absolute">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/skills" element={<SkillPage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="*" element={<NothingFoundPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
