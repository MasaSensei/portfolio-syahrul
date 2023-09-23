import Atoms from "../../atoms";
import Button from "../../atoms/Button/Button";

const Form = (props) => {
  const { formFields } = props;
  const isFormButton = true;
  return (
    <form
      action=""
      className="flex-1 lg:mr-8 bg-transparent border border-gray-300 rounded-lg p-6 space-y-6 w-full max-w-full"
    >
      {formFields.map((field, index) => {
        switch (field.type) {
          case "textarea":
            return (
              <Atoms.Textarea
                key={index}
                name={field.name}
                id={field.name}
                placeholder={field.placeholder}
              />
            );
          default: {
            return (
              <Atoms.Input
                key={index}
                name={field.name}
                label={field.label}
                id={field.name}
                placeholder={field.placeholder}
                type={field.type}
              />
            );
          }
        }
      })}
      <Atoms.Button isFormButton={isFormButton}>Submit</Atoms.Button>
    </form>
  );
};

export default Form;
