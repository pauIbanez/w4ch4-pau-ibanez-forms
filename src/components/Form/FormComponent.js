const FormComponent = () => {
  return (
    <form className="form">
      <h2 className="form__title"></h2>
      <section className="form__inputs">
        <input type="text" name="" id="" className="form__input" />
        <input type="text" name="" id="" className="form__input" />
        <input type="text" name="" id="" className="form__input" />
        <input type="text" name="" id="" className="form__input" />
        <input type="text" name="" id="" className="form__input" />
      </section>
      <section className="form__controlls">
        <button className="form__button"> Previous </button>
        <button className="form__button"> Next </button>
        <button className="form__button form__button--submit"> Submit </button>
      </section>
    </form>
  );
};
