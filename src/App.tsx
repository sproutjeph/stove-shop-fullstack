import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import { Navbar } from "./components";
import {
  CartModal,
  BasicPricingModal,
  ProfessionalPricingModal,
  UltimatePricingModal,
} from "./views";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <CartModal />
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
