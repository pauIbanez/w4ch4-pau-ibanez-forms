const FormLogin = ({
  userInput: { username, password },
  onUserInputChange,
}) => {
  return (
    <>
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
    </>
  );
};

export default FormLogin;
