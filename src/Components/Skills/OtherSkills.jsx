import { GithubFill, VscodeFill } from "akar-icons";
import SkillCard from "./SkillCard";

export default function OtherSkills() {
  return (
    <div className="skillCard shadowPrimary">
      <h1 className="text-xl mb-2">Other</h1>
      <div className="flex gap-5">
        <SkillCard slot="a" title="Github">
          <GithubFill fill="#7F2FCA" />
        </SkillCard>
        <SkillCard slot="b" title="VS Code">
          <VscodeFill fill="#2196F3" />
        </SkillCard>
      </div>
    </div>
  );
}
