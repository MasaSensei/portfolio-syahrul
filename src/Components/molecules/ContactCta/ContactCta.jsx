import { Link } from "react-router-dom";

const ContactCTA = (props) => {
  const { icon, judul, text, link } = props;
  return (
    <Link to={link}>
      <div className="flex flex-col lg:flex-row items-center w-full lg:w-full mt-6">
        {/* Ikon di atas */}
        <div className="text-white rounded-sm w-14 h-14 flex items-center justify-center text-2xl">
          {icon}
        </div>
        {/* Teks di bawah */}
        <div className="ml-0 lg:ml-4 mt-4 lg:mt-0">
          <h4 className="font-poppins text-white text-xl mb-1 text-center lg:text-left">
            {judul}
          </h4>
          <p className="text-yellow-600 font-normal text-center lg:text-left">
            {text}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ContactCTA;
