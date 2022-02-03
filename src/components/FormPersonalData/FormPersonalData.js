const FormPersonalData = ({
  formData: { name, lastName, dateOfBirth, email },
  onInputChange,
}) => {
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(event) => {
          onInputChange(event.target.name, event.target.value);
        }}
        placeholder="Write your name"
        name="name"
        className="form__input"
      />
      <input
        type="text"
        value={lastName}
        onChange={(event) => {
          onInputChange(event.target.name, event.target.value);
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
            onInputChange(event.target.name, event.target.value);
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
          onInputChange(event.target.name, event.target.value);
        }}
        placeholder="Write your email"
        name="email"
        className="form__input"
      />
    </>
  );
};

export default FormPersonalData;
