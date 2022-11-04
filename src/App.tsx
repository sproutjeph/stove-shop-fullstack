import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { Navbar } from "./components";
import {
  BasicPricingModal,
  ProfessionalPricingModal,
  UltimatePricingModal,
} from "./views";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <BasicPricingModal />
        <ProfessionalPricingModal />
        <UltimatePricingModal />
        <Router />
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
