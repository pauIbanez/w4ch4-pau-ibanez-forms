import { useContext } from "react";
import { useRef } from "react/cjs/react.development";
import FormDataContext from "../../contexts/FormDataContext/FormDataContext";
import FormAccesData from "../FormAccessData/FormAccessData";
import FormLogin from "../FormLogin/FormLogin";
import FormPersonalData from "../FormPersonalData/FormPersonalData";

const FormComponent = () => {
  const { userData, onInputChange, formStage, setFormApproved } =
    useContext(FormDataContext);

  const formData = { ...userData };

  const onChange = (field, val) => {
    formData[field] = val;
    onInputChange(field, val);
  };
  const userInputData = useRef({ username: "", password: "" });

  const onUserInputChange = (field, val) => {
    userInputData.current[field] = val;
  };

  const formValidation = () => {
    if (!userInputData.current.username || !userInputData.current.password) {
      return false;
    }
    if (
      userInputData.current.password !== formData.password ||
      userInputData.current.username !== formData.username
    ) {
      return false;
    }

    return true;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (formValidation()) {
      setFormApproved(true);
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
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
        {formStage !== 1 && (
          <button className="form__button"> Previous </button>
        )}
        {formStage !== 3 && <button className="form__button"> Next </button>}
        {formStage === 3 && (
          <button className="form__button form__button--submit" type="submit">
            Submit
          </button>
        )}
      </section>
    </form>
  );
};

export default FormComponent;
