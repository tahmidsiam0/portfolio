import {
  BootstrapFill,
  CssFill,
  GithubFill,
  NextjsFill,
  VscodeFill,
} from "akar-icons";
import { useEffect, useRef } from "react";
import { createSwapy } from "swapy";
import SkillCard from "./SkillCard";

export default function OtherSkills() {
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
      <h1 className="text-xl mb-2">Other</h1>
      <div className="flex gap-5" ref={container}>
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
