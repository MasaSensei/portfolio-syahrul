import { Link } from "react-router-dom";

const Icon = (props) => {
  const { children, link } = props;
  return (
    <Link
      to={link} // Ganti dengan nomor WhatsApp Anda atau tautan wa.me yang sesuai
      target="_blank"
      rel="noopener noreferrer"
      className="text-white text-4xl mt-[10px] block"
    >
      {children}
    </Link>
  );
};

export default Icon;
