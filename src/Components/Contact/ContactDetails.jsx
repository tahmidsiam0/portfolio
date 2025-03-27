import Alternatives from "./Alternatives";

export default function ContactDetails() {
  return (
    <div className="px-6 flex gap-2 flex-col">
      <p>
        <span id="contactDescription1" className="opacity-0"></span>
        <br />
        <span id="contactDescription2" className="opacity-0"></span>
      </p>
      <Alternatives />
    </div>
  );
}
