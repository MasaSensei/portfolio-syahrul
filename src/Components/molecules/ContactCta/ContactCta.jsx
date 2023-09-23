const ContactCTA = (props) => {
  const { icon } = props;
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between w-full lg:w-full mt-6">
      {/* Ikon di atas */}
      <div className="text-white rounded-sm w-14 h-14 flex items-center justify-center text-2xl">
        {icon}
      </div>
      {/* Teks di bawah */}
      <div className="ml-0 lg:ml-4 mt-4 lg:mt-0">
        <h4 className="font-poppins text-xl mb-1 text-center lg:text-left">
          {judul}
        </h4>
        <p className="mb-1 text-center lg:text-left">
          Lorem ipsum, dolor sit amet consectetur adipisicing.
        </p>
        <p className="text-green-700 font-normal text-center lg:text-left">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde
          voluptates quam, doloribus sunt fugiat eaque. Dolorum quasi similique
          molestiae saepe.
        </p>
      </div>
    </div>
  );
};

export default ContactCTA;
