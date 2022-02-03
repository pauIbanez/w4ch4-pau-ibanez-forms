const FormPersonalData = ({
  formData: { name, lastName, dateOfBirth, email },
  onInputChange,
  formStageStatus,
}) => {
  const validateForm = () => {
    if (name && lastName && dateOfBirth) {
      if (email.includes("@")) {
        formStageStatus(true);
      }
    } else {
      formStageStatus(false);
    }
  };

  const onChange = (field, val) => {
    validateForm();
    onInputChange(field, val);
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          onChange(event.target.name, event.target.value);
        }}
        placeholder="Write your name"
        name="name"
        className="form__input"
      />
      <input
        type="text"
        value={lastName}
        onChange={(event) => {
          onChange(event.target.name, event.target.value);
        }}
        placeholder="Write your last name"
        name="lastName"
        className="form__input"
      />
      <div className="form__age-container">
        <input
          type="date"
          value={dateOfBirth}
          onChange={(event) => {
            onChange(event.target.name, event.target.value);
          }}
          placeholder="Write your date of birth"
          name="dateOfBirth"
          className="form__input form__input--date"
        />
        {dateOfBirth && <span className="form__age">aaaaaaaa</span>}
      </div>
      <input
        type="email"
        value={email}
        onChange={(event) => {
          onChange(event.target.name, event.target.value);
        }}
        placeholder="Write your email"
        name="email"
        className="form__input"
      />
    </>
  );
};

export default FormPersonalData;
