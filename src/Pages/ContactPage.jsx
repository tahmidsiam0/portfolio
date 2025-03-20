import FancyDivider from "../Components/Common/FancyDivider";
import ContactDetails from "../Components/Contact/ContactDetails";
import ContactForm from "../Components/Contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl">Let's Work Together</h1>
      <FancyDivider className="w-75" />
      <div className="grid grid-cols-2">
        <ContactDetails />
        <ContactForm />
      </div>
    </div>
  );
}
