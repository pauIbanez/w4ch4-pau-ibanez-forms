import { useRef, useState } from "react";

const FormAccesData = ({
  formData: { username, password },
  onInputChange,
  formStageStatus,
}) => {
  const [repeatPassword, setRepeatPassword] = useState("");
  const repeatedPasswordCheck = useRef(false);

  const passwordFieldName = "password";
  const repeatPasswordFieldName = "repeatPassword";

  const validatePassword = (ref, inputedPassword) => {
    switch (ref) {
      case passwordFieldName:
        if (inputedPassword === repeatPassword) {
          repeatedPasswordCheck.current = true;
          formStageStatus(true);
        } else {
          repeatedPasswordCheck.current = false;
          formStageStatus(false);
        }
        break;

      case repeatPasswordFieldName:
        if (inputedPassword === password) {
          repeatedPasswordCheck.current = true;
          formStageStatus(true);
        } else {
          repeatedPasswordCheck.current = false;
          formStageStatus(false);
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
        name={passwordFieldName}
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
          name={repeatPasswordFieldName}
          className="form__input"
        />
        {repeatPassword ? (repeatedPasswordCheck.current ? "yes" : "no") : ""}
      </div>
    </>
  );
};

export default FormAccesData;
