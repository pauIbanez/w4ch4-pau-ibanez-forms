import { useContext } from "react";
import FormDataContext from "../../contexts/FormDataContext/FormDataContext";

const FormComponent = () => {
  const { userData, onInputChange } = useContext(FormDataContext);

  return (
    <form className="form">
      <h2 className="form__title"> hello </h2>
      <section className="form__inputs">
        <input
          type="text"
          value={userData.name}
          onChange={(event) => {
            onInputChange(event.target.name, event.target.value);
          }}
          placeholder="Write your name"
          name="name"
          className="form__input"
        />
        <input type="text" name="lname" className="form__input" />
        <input
          type="date"
          name="date-of-birth"
          className="form__input form__input--date"
        />
        <input type="email" name="email" className="form__input" />
        <input type="text" name="username" className="form__input" />
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
