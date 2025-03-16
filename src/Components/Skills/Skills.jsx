import {
  BootstrapFill,
  CssFill,
  HtmlFill,
  JqueryFill,
  ReactFill,
} from "akar-icons";
import { useEffect, useRef } from "react";
import { createSwapy } from "swapy";
import SkillCard from "./SkillCard";
import "boxicons";

export default function Skills() {
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
      <h1 className="text-2xl mb-2">Major</h1>
      <div className="grid grid-cols-2 gap-5" ref={container}>
        <SkillCard title="HTML" slot="a">
          <HtmlFill fill="#FC490B" />
        </SkillCard>
        <SkillCard title="CSS" slot="b">
          <CssFill fill="#2196F3" />
        </SkillCard>
        <SkillCard title="Bootstrap" slot="c">
          <BootstrapFill fill="#5E3B7F" />
        </SkillCard>
        <SkillCard title="jQuery" slot="d">
          <JqueryFill fill="#268de1" />
        </SkillCard>
        <SkillCard title="React" slot="e">
          <ReactFill fill="#0a7ddc" />
        </SkillCard>
        <SkillCard title="Tailwind" slot="f">
          <box-icon type="logo" name="tailwind-css" color="#00BCFF" size="sm" />
        </SkillCard>
      </div>
    </div>
  );
}
