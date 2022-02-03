const FormPersonalData = ({
  formData: { name, lastName, dateOfBirth, email },
  onInputChange,
  formStageStatus,
}) => {
  const data = { name, lastName, dateOfBirth, email };

  const validateForm = () => {
    if (
      data.name &&
      data.lastName &&
      data.dateOfBirth &&
      data.email &&
      data.email.includes("@")
    ) {
      formStageStatus(true);
    } else {
      formStageStatus(false);
    }
  };

  const onChange = (field, val) => {
    data[field] = val;
    validateForm();
    onInputChange(field, val);
  };

  const getYears = () => {
    const today = new Date();
    const dateOfBirthasDate = new Date(data.dateOfBirth);

    let age = today.getFullYear() - dateOfBirthasDate.getFullYear();
    const monthDifference = today.getMonth() - dateOfBirthasDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < dateOfBirthasDate.getDate())
    ) {
      age--;
    }
    return age;
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
        {dateOfBirth && (
          <span className="form__age">{getYears() + " y/o"}</span>
        )}
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
