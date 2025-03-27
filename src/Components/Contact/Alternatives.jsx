import { personalInfo } from "../Common/localDatabase";
import InfoCard from "./InfoCard";

export default function Alternatives() {
  return (
    <div
      id="alternatives"
      className="bg-fourth rounded-lg p-3 opacity-0 scale-75"
    >
      <p>Alternatives:</p>
      <InfoCard type="mail" data={personalInfo} />
      <InfoCard data={personalInfo.cell1} />
      <InfoCard data={personalInfo.cell2} />
      <InfoCard type="address" data={personalInfo} />
    </div>
  );
}
