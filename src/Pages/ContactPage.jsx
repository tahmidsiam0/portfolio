import { useGSAP } from "@gsap/react/src";
import FancyDivider from "../Components/Common/FancyDivider";
import ContactDetails from "../Components/Contact/ContactDetails";
import ContactForm from "../Components/Contact/ContactForm";
import gsap from "gsap";

export default function ContactPage() {
  useGSAP(() => {
    gsap.fromTo(
      ".contactPage",
      { y: 50 },
      { y: 0, opacity: 1, duration: 0.5, ease: "back", delay: 0.5 }
    );
  }, []);
  // useGSAP(() => {
  //   gsap.fromTo(
  //     ".contactPage",
  //     {
  //       y: 100,
  //       opacity: 0,
  //     },
  //     { y: 0, duration: 2, opacity: 1 }
  //   );
  //   // gsap.from(".contactPage", { y: 100 });
  // }, []);

  return (
    <>
      <div className="flex flex-col items-center contactPage opacity-0">
        <div>
          <h1 className="text-4xl ">Let's Work Together</h1>
        </div>
        <FancyDivider className="w-75" />
        <div className="grid grid-cols-2 pt-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </>
  );
}
