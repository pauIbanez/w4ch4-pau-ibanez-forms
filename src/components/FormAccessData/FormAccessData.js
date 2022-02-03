const FormAccesData = ({ formData: { username, password }, onIputChange }) => {
  return (
    <>
      <input
        type="text"
        value={username}
        onChange={(event) => {
          onIputChange(event.target.name, event.target.value);
        }}
        placeholder="Username"
        name="username"
        className="form__input"
      />
      <input
        type="text"
        value={username}
        onChange={(event) => {
          onIputChange(event.target.name, event.target.value);
        }}
        placeholder="Username"
        name="username"
        className="form__input"
      />
      <input
        type="text"
        value={username}
        onChange={(event) => {
          onIputChange(event.target.name, event.target.value);
        }}
        placeholder="Username"
        name="username"
        className="form__input"
      />
    </>
  );
};

export default FormAccesData;
