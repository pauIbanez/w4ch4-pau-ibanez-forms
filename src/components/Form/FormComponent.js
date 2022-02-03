import { useContext } from "react";
import FormDataContext from "../../contexts/FormDataContext/FormDataContext";
import FormPersonalData from "../FormPersonalData/FormPersonalData";

const FormComponent = () => {
  const { userData, onInputChange } = useContext(FormDataContext);

  const formData = { ...userData };
  const onChange = (field, val) => {
    formData[field] = val;
    onInputChange(field, val);
  };
  return (
    <form className="form">
      <h2 className="form__title"> hello </h2>
      <section className="form__inputs">
        <FormPersonalData formData={formData} onInputChange={onChange} />
        {/* <input
          type="text"
          value={formData.username}
          onChange={(event) => {
            onChange(event.target.name, event.target.value);
          }}
          placeholder="Username"
          name="username"
          className="form__input"
        /> */}
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
