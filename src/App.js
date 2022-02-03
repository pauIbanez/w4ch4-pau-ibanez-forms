import { useContext } from "react";
import "./App.css";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import FormComponent from "./components/Form/FormComponent";
import FormDataContext from "./contexts/FormDataContext/FormDataContext";

function App() {
  const { loggedIn, userData } = useContext(FormDataContext);
  return (
    <div className="container">
      {!loggedIn && <FormComponent />}
      {loggedIn && <DetailsPage userData={userData} />}
    </div>
  );
}

export default App;
