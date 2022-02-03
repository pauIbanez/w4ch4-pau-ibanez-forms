import { useContext, useState } from "react";
import { useRef } from "react/cjs/react.development";
import FormDataContext from "../../contexts/FormDataContext/FormDataContext";
import FormAccesData from "../FormAccessData/FormAccessData";
import FormLogin from "../FormLogin/FormLogin";
import FormPersonalData from "../FormPersonalData/FormPersonalData";

const FormComponent = () => {
  const {
    userData,
    onInputChange,
    formStage,
    updateFormStage,
    setFormApproved,
  } = useContext(FormDataContext);

  const formData = { ...userData };

  const onChange = (field, val) => {
    formData[field] = val;
    onInputChange(field, val);
  };
  const userInputData = useRef({ username: "", password: "" });
  const [formGood, setFormGood] = useState(false);

  const formStageStatus = (mode) => {
    setFormGood(mode);
  };

  const onUserInputChange = (field, val) => {
    userInputData.current[field] = val;
  };

  const formValidation = () => {
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
      setFormApproved();
    }
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <section className="form__inputs">
        {formStage === 1 && (
          <FormPersonalData
            formData={formData}
            onInputChange={onChange}
            formStageStatus={formStageStatus}
          />
        )}
        {formStage === 2 && (
          <FormAccesData
            formData={formData}
            onInputChange={onChange}
            formStageStatus={formStageStatus}
          />
        )}
        {formStage === 3 && (
          <FormLogin
            userInput={userInputData}
            onUserInputChange={onUserInputChange}
            onInputChange={onChange}
            save={formData.save}
          />
        )}
      </section>
      <section className="form__controlls">
        {formStage !== 1 && (
          <button
            className="form__button"
            onClick={(event) => {
              event.preventDefault();
              setFormGood(false);
              updateFormStage(false);
            }}
          >
            Previous
          </button>
        )}
        {formStage !== 3 && (
          <button
            className="form__button"
            onClick={(event) => {
              event.preventDefault();
              setFormGood(false);
              updateFormStage(true);
            }}
            disabled={!formGood}
          >
            Next
          </button>
        )}
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
