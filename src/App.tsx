import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { Navbar } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
