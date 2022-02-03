import { useState } from "react";
import FormDataContext from "./FormDataContext";

const FormDataContextProvider = ({ children }) => {
  const contextData = {};

  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    username: "",
    password: "",
  });
  // const [formState, setFormState] = useState(0);

  const onInputChange = (inputRef, value) => {
    setUserData({ ...userData, [inputRef]: value });
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
