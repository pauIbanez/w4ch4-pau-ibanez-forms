import { useContext } from "react";
import { useRef } from "react/cjs/react.development";
import FormDataContext from "../../contexts/FormDataContext/FormDataContext";
import FormAccesData from "../FormAccessData/FormAccessData";
import FormLogin from "../FormLogin/FormLogin";
import FormPersonalData from "../FormPersonalData/FormPersonalData";

const FormComponent = () => {
  const { userData, onInputChange } = useContext(FormDataContext);

  const formData = { ...userData };

  const onChange = (field, val) => {
    formData[field] = val;
    onInputChange(field, val);
  };
  const userInputData = useRef({ username: "", password: "" });

  const onUserInputChange = (field, val) => {
    userInputData.current[field] = val;
  };

  return (
    <form className="form">
      <h2 className="form__title"> hello </h2>
      <section className="form__inputs">
        <FormPersonalData formData={formData} onInputChange={onChange} />
        <FormAccesData formData={formData} onInputChange={onChange} />
        <FormLogin
          userInput={userInputData}
          onUserInputChange={onUserInputChange}
        />
      </section>
      <section className="form__controlls">
        <button className="form__button"> Previous </button>
        <button className="form__button"> Next </button>
        <button className="form__button form__button--submit"> Submit </button>
      </section>
    </form>
  );
};

export default FormComponent;
