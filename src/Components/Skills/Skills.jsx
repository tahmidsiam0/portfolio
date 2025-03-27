import {
  BootstrapFill,
  CssFill,
  HtmlFill,
  JqueryFill,
  ReactFill,
} from "akar-icons";
import SkillCard from "./SkillCard";
import "boxicons";

export default function Skills() {
  return (
    <div className="skillCard shadowPrimary">
      <h1 className="text-2xl mb-2">Major</h1>
      <div className="grid grid-cols-2 gap-5">
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
