import { useRef, useState } from "react";

const FormAccesData = ({ formData: { username, password }, onInputChange }) => {
  const [repeatPassword, setRepeatPassword] = useState("");
  const repeatedPasswordCheck = useRef(false);

  const validatePassword = (ref, inputedPassword) => {
    switch (ref) {
      case "password":
        if (inputedPassword === repeatPassword) {
          repeatedPasswordCheck.current = true;
        } else {
          repeatedPasswordCheck.current = false;
        }
        break;

      case "repeatPassword":
        if (inputedPassword === password) {
          repeatedPasswordCheck.current = true;
        } else {
          repeatedPasswordCheck.current = false;
        }
        setRepeatPassword(inputedPassword);
        break;

      default:
    }
  };

  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(event) => {
          onInputChange(event.target.name, event.target.value);
        }}
        placeholder="Write a username"
        name="username"
        className="form__input"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => {
          onInputChange(event.target.name, event.target.value);
          validatePassword(event.target.name, event.target.value);
        }}
        placeholder="Write a password"
        name="password"
        className="form__input"
      />
      <div className="form__repeat-password">
        <input
          type="password"
          value={repeatPassword}
          onChange={(event) => {
            validatePassword(event.target.name, event.target.value);
          }}
          placeholder="Write the password again"
          name="repeatPassword"
          className="form__input"
        />
        {repeatPassword ? (repeatedPasswordCheck.current ? "yes" : "no") : ""}
      </div>
    </>
  );
};

export default FormAccesData;
