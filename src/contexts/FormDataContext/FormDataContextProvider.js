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
  const [formStage, setFormStage] = useState(1);
  const [loggedIn, setLoggedIn] = useState(false);

  const updateFormStage = (mode) => {
    if (mode) {
      setFormStage(formStage + 1);
    } else {
      setFormStage(formStage - 1);
    }
  };
  const setFormApproved = () => {
    setLoggedIn(true);
  };

  const onInputChange = (inputRef, value) => {
    setUserData({ ...userData, [inputRef]: value });
  };

  contextData.userData = userData;
  contextData.onInputChange = onInputChange;
  contextData.formStage = formStage;
  contextData.updateFormStage = updateFormStage;
  contextData.setFormApproved = setFormApproved;
  contextData.loggedIn = loggedIn;

  return (
    <FormDataContext.Provider value={contextData}>
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataContextProvider;
