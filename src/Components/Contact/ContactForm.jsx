import Field from "./Field";
import { WhatsappFill } from "akar-icons";

export default function ContactForm() {
  return (
    <form
      className="relative overflow-hidden rounded-xl p-6 bg-third shadowPrimary"
      action=""
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
