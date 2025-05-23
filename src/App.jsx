import "./App.css";

import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { ImCompass2 } from "react-icons/im";
function App() {
  toast.success("Hellow World");
  return (
    <>
      <Button>
        Click Me <ImCompass2 />
      </Button>
      <h1>Coming soon .......!</h1>;
      <ToastContainer />
    </>
  );
}

export default App;
