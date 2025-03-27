import { Grid, NextjsFill, ReduxFill } from "akar-icons";
import SkillCard from "./SkillCard";

export default function ProgressSkills() {
  return (
    <div className="skillCard shadowPrimary">
      <h1 className="text-xl mb-2">Progress...</h1>
      <div className="grid grid-cols-2 gap-5">
        <SkillCard slot="a" title="Next">
          <NextjsFill fill="#573cdf" />
        </SkillCard>
        <SkillCard slot="b" title="GSAP">
          <Grid fill="#ABFF84" />
        </SkillCard>
        <SkillCard slot="c" title="Redux">
          <ReduxFill fill="#764ABC" />
        </SkillCard>
      </div>
    </div>
  );
}
