import { personalInfo } from "../Common/localDatabase";
import InfoCard from "./InfoCard";

export default function ContactDetails() {
  return (
    <div className="px-6 flex gap-5 flex-col justify-between">
      <p>
        <span>
          I've been learning frontend technologies for over a year. I enjoy
          learning and coding, but getting paid for it would make more sense,
          wouldn't it?
        </span>
        <br />
        <span>We can do so much together! Let's talk.</span>
      </p>
      <div>
        <p>Alternatives:</p>
        <InfoCard type="mail" data={personalInfo} />
        <InfoCard data={personalInfo.cell1} />
        <InfoCard data={personalInfo.cell2} />
        <InfoCard type="address" data={personalInfo} />
      </div>
    </div>
  );
}
