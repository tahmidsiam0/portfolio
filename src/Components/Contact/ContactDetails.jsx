import { Envelope, Location, Phone } from "akar-icons";
import { personalInfo } from "../Common/localDatabase";
const email = "example@example.com"; // Replace with your desired email address
const body = "Hello, I wanted to reach out to you about...";

export default function ContactDetails() {
  return (
    <div className="p-6 flex flex-col justify-between">
      <p>
        I've been learning frontend technologies for over a year. I enjoy
        learning and coding, but getting paid for it would make more sense,
        wouldn't it?
      </p>
      <p>We can do so much together! Let's talk.</p>
      <div>
        <p>Alternatives:</p>
        <a
          href={`mailto:${personalInfo.mail}?subject=${personalInfo.subject}&body=${personalInfo.mailBody}`}
          className="flex gap-1"
        >
          <Envelope strokeWidth={2} size={20} />
          <span>{personalInfo.mail}</span>
        </a>
        <p className="flex gap-1">
          <Phone strokeWidth={2} size={20} />
          <span
            onClick={() => navigator.clipboard.writeText(personalInfo.cell1)}
          >
            {personalInfo.cell1}
          </span>{" "}
          /{" "}
          <span
            onClick={() => navigator.clipboard.writeText(personalInfo.cell2)}
          >
            {personalInfo.cell2}
          </span>
        </p>
        <p
          onClick={() => navigator.clipboard.writeText("J")}
          className="flex gap-1"
        >
          <Location strokeWidth={2} size={20} />
          <span>House 30, Road 03, Nikunja 02, Dhaka 1229</span>
        </p>
      </div>
    </div>
  );
}
