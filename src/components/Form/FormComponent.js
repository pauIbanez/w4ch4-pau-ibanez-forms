import { useContext } from "react";
import FormDataContext from "../../contexts/FormDataContext/FormDataContext";

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
        <input
          type="text"
          value={formData.name}
          onChange={(event) => {
            onChange(event.target.name, event.target.value);
          }}
          placeholder="Write your name"
          name="name"
          className="form__input"
        />
        <input
          type="text"
          value={formData.lastName}
          onChange={(event) => {
            onChange(event.target.name, event.target.value);
          }}
          placeholder="Write your last name"
          name="lastName"
          className="form__input"
        />
        <input
          type="date"
          value={formData.dateOfBirth}
          onChange={(event) => {
            onChange(event.target.name, event.target.value);
          }}
          placeholder="Write your date of birth"
          name="dateOfBirth"
          className="form__input form__input--date"
        />
        <input
          type="email"
          value={formData.email}
          onChange={(event) => {
            onChange(event.target.name, event.target.value);
          }}
          placeholder="Write your email"
          name="email"
          className="form__input"
        />
        <input
          type="text"
          value={formData.username}
          onChange={(event) => {
            onChange(event.target.name, event.target.value);
          }}
          placeholder="Username"
          name="username"
          className="form__input"
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
