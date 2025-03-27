import { useGSAP } from "@gsap/react/src";
import Field from "./Field";
import { WhatsappFill } from "akar-icons";
import gsap from "gsap";

export default function ContactForm() {
  useGSAP(() => {
    gsap
      .timeline()
      .to("#contactHeader", {
        text: "Let's Work Together",
      })
      .to("#FancyDividerHidden", {
        scale: 1,
        opacity: 1,
      })
      .to("#contactDescription1", {
        duration: 0.4,
        text: `I've been learning frontend technologies for over a year. I enjoy
          learning and coding, but getting paid for it would make more sense,
          wouldn't it?`,
        opacity: 0.8,
      })
      .to("#contactDescription2", {
        duration: 0.2,
        text: "We can do so much together! Let's talk.",
        opacity: 0.8,
      })
      .to(["#contactForm", "#alternatives"], {
        scale: 1,
        opacity: 1,
      });
  }, []);

  return (
    <form
      className="opacity-0 scale-75 relative overflow-hidden rounded-xl p-6 bg-third shadowPrimary"
      action=""
      id="contactForm"
    >
      <Field label="Full Name" type="text" />
      <Field label="Email" type="email" />
      <Field className="mt-8" label="Message" type="textarea" />
      <div className="flex justify-center gap-3 items-center">
        <button
          className="cursor-pointer px-8 pt-3 pb-2 rounded-lg bg-fourth active:scale-95 hover:-translate-y-0.5 tracking-widest
"
        >
          Send
        </button>
        <p className="opacity-50">or</p>
        <a
          href="https://wa.me/1736373595"
          target="blank"
          className="cursor-pointer px-5 pt-3 pb-2 rounded-lg bg-[#26D367] active:scale-95 hover:-translate-y-0.5 flex gap-2 tracking-wider"
        >
          <span>What's App </span> <WhatsappFill size={18} />
        </a>
      </div>
    </form>
  );
}
