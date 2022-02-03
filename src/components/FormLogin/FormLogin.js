const FormLogin = ({
  userInput: { username, password },
  onUserInputChange,
  onInputChange,
  save,
}) => {
  return (
    <>
      <h2 className="form__title"> Login </h2>
      <input
        type="text"
        value={username}
        onChange={(event) => {
          onUserInputChange(event.target.name, event.target.value);
        }}
        placeholder="Write your username"
        name="username"
        className="form__input"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(event) => {
          onUserInputChange(event.target.name, event.target.value);
        }}
        placeholder="Write your password"
        name="password"
        className="form__input"
        required
      />
      <input
        type="checkbox"
        onChange={(event) => {
          onInputChange(event.target.name, event.target.checked);
        }}
        placeholder="Write your password"
        name="save"
        className="form__input"
        required
      />
    </>
  );
};

export default FormLogin;
