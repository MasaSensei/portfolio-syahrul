import { FaMailBulk, FaPhone } from "react-icons/fa";
import Organism from "../../organism";
import Molecules from "../../molecules";

const ContactSection = () => {
  const formFields = [
    {
      type: "name",
      name: "name",
      inputType: "text",
      placeholder: "Full Name",
      label: "Input Your Name",
    },
    {
      type: "email",
      name: "email",
      inputType: "email",
      placeholder: "example@gmail.com",
      label: "Input Your Email",
    },
    {
      type: "textarea",
      name: "Message",
      inputType: "text",
      placeholder: "Input your message",
      label: "Message",
    },
  ];
  return (
    <section
      className="w-full min-h-screen bg-slate-900 flex flex-col items-center justify-center overflow-hidden"
      id="contact"
    >
      <div className="container mx-auto px-5 py-5 mt-5">
        {/* Judul */}
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-center text-white mx-auto">
            <h1 className="lg:text-7xl text-5xl font-poppins">Contact Me</h1>
            <p className="text-2xl lg:text-lg pt-5">
              If you're impressed by the results of my Apple device repairs,
              don't hesitate to get in touch. I'm ready to assist you in
              restoring your devices.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse mt-8">
          <div className="flex-col gap-5 items-center w-full lg:w-1/2">
            {/* Set 2 */}
            <Molecules.ContactCTA
              icon={<FaMailBulk />}
              link="mailto:syahrulkhanmubarok280903@gmail.com"
              judul="Email"
              text="Don't hesitate to contact me"
            />
          </div>
          {/* Form */}
          <Organism.Form formFields={formFields} />
        </div>
      </div>
      <Organism.Footer />
    </section>
  );
};

export default ContactSection;
