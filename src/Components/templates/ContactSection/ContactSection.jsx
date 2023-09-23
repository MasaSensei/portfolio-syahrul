import { FaPhone } from "react-icons/fa";
import Organism from "../../organism";

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
      name: "message",
      inputType: "text",
      placeholder: "Input your message",
      label: "Message",
    },
  ];
  return (
    <section className="w-full min-h-screen bg-slate-900 flex flex-col items-center justify-center overflow-hidden">
      <div className="container mx-auto px-5 py-5 mt-5">
        {/* Judul */}
        <div className="flex flex-col items-center justify-center h-full">
          <div className="text-center text-white mx-auto">
            <h1 className="lg:text-7xl text-5xl font-poppins">Contact Me</h1>
            <p className="text-2xl lg:text-lg pt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
              odit cumque eos cupiditate omnis quae. Accusantium quisquam
              maiores eius aspernatur beatae quos, doloribus unde commodi! Ipsa
              magni laboriosam hic ipsam?
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse mt-8">
          <div className="flex-col gap-5 items-center justify-between w-full lg:w-1/2">
            {/* Set 2 */}
            <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-full mt-6">
              {/* Ikon di atas */}
              <div className="text-white rounded-sm w-14 h-14 flex items-center justify-center text-2xl">
                <FaPhone />
              </div>
              {/* Teks di bawah */}
              <div className="ml-0 lg:ml-4 mt-4 lg:mt-0">
                <h4 className="font-poppins text-xl mb-1 text-center lg:text-left">
                  Hello Set 2
                </h4>
                <p className="mb-1 text-center lg:text-left">
                  Lorem ipsum, dolor sit amet consectetur adipisicing.
                </p>
                <p className="text-green-700 font-normal text-center lg:text-left">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                  voluptates quam, doloribus sunt fugiat eaque. Dolorum quasi
                  similique molestiae saepe.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-full mt-6">
              {/* Ikon di atas */}
              <div className="text-white rounded-sm w-14 h-14 flex items-center justify-center text-2xl">
                <FaPhone />
              </div>
              {/* Teks di bawah */}
              <div className="ml-0 lg:ml-4 mt-4 lg:mt-0">
                <h4 className="font-poppins text-xl mb-1 text-center lg:text-left">
                  Hello Set 2
                </h4>
                <p className="mb-1 text-center lg:text-left">
                  Lorem ipsum, dolor sit amet consectetur adipisicing.
                </p>
                <p className="text-green-700 font-normal text-center lg:text-left">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
                  voluptates quam, doloribus sunt fugiat eaque. Dolorum quasi
                  similique molestiae saepe.
                </p>
              </div>
            </div>
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
