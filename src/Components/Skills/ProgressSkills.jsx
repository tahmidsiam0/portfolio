import { Grid, NextjsFill, ReduxFill } from "akar-icons";
import { useEffect, useRef } from "react";
import { createSwapy } from "swapy";
import SkillCard from "./SkillCard";

export default function ProgressSkills() {
  const swapy = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    if (container.current) {
      swapy.current = createSwapy(container.current);
    }

    return () => swapy.current?.destroy();
  }, []);

  return (
    <div className="skillCard shadowPrimary">
      <h1 className="text-xl mb-2">Progress...</h1>
      <div className="grid grid-cols-2 gap-5" ref={container}>
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
