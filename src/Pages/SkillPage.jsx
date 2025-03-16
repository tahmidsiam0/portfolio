import OtherSkills from "../Components/Skills/OtherSkills";
import ProgressSkills from "../Components/Skills/ProgressSkills";
import Skills from "../Components/Skills/Skills";

export default function SkillPage() {
  return (
    <div className="flex gap-10">
      <Skills />
      <ProgressSkills />
      <OtherSkills />
    </div>
  );
}
