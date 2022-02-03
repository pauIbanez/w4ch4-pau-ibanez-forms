import { useContext, useState } from "react";
import FormDataContext from "./FormDataContext";

const FormDataContextProvider = ({ children }) => {
  const contextData = {};

  const [userdata, setUserData] = useContext({});
  const [formState, setFormState] = useState(0);

  const onInputChange = (inputRef, value) => {
    setUserData({ [inputRef]: value });
  };

  contextData.userdata = userdata;
  contextData.onInputChange = onInputChange;

  return (
    <FormDataContext.Provider value={contextData}>
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataContextProvider;
