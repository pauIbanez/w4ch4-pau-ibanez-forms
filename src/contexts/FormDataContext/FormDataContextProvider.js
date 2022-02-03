import { useState } from "react";
import FormDataContext from "./FormDataContext";

const FormDataContextProvider = ({ children }) => {
  const contextData = {};

  const [userData, setUserData] = useState({ name: "" });
  // const [formState, setFormState] = useState(0);

  const onInputChange = (inputRef, value) => {
    setUserData({ [inputRef]: value });
  };

  contextData.userData = userData;
  contextData.onInputChange = onInputChange;

  return (
    <FormDataContext.Provider value={contextData}>
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataContextProvider;
