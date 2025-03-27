import { FancyDividerHidden } from "../Components/Common/FancyDivider";
import ContactDetails from "../Components/Contact/ContactDetails";
import ContactForm from "../Components/Contact/ContactForm";

export default function ContactPage() {
  // useGSAP(() => {
  // gsap.fromTo(
  //   ".contactPage",
  //   { y: 50 },
  //   { y: 0, opacity: 1, duration: 0.5, ease: "back", delay: 0.5 }
  // );

  // }, []);
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
      <div className="flex flex-col items-center contactPage">
        <div>
          <h1 id="contactHeader" className="text-4xl"></h1>
        </div>
        <FancyDividerHidden className="w-75" />
        <div className="grid grid-cols-2 gap-6 pt-2">
          <ContactDetails />
          <ContactForm />
        </div>
      </div>
    </>
  );
}
