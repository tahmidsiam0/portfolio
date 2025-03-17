import Homepage from "./Pages/Homepage";
import { Route, Routes } from "react-router-dom";
import SkillPage from "./Pages/SkillPage";
import LeftNavBar from "./Components/Navigation/LeftNavBar";
import EducationPage from "./Pages/EducationPage";

function App() {
  return (
    <>
      <div className="font-primary w-full py-7 pe-15">
        <div className="flex justify-between">
          <LeftNavBar />
          <div
            id="portalContainer"
            className="bg-[#F1F1FC] rounded-lg h-110 w-260 p-15 my-10 shadowSecondary"
          >
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/skills" element={<SkillPage />} />
              <Route path="/education" element={<EducationPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
