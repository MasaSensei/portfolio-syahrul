import { Link } from "react-router-dom";

const Button = (props) => {
  const { children, link, isFormButton } = props;
  const buttonClasses = isFormButton
    ? "btn btn-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    : "mt-5 text-white bg-blue-500 hover:bg-blue-700 border border-blue-500 rounded-lg px-4 py-2";
  return (
    <button className={buttonClasses}>
      <Link to={link} className="hover:no-underline">
        {children}
      </Link>
    </button>
  );
};

export default Button;
