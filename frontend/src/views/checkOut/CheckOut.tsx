import React from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "../../components";
import { useAppSelector } from "../../stores/hooks";
const CheckOut = () => {
  const navigateTo = useNavigate();
  //docusignSecretKey =  af9eb92a-6dac-444c-88ee-ef4165ae17aa
  // integrationKey = 230e536c-e4d9-488e-aaf9-b4acf567217b

  const { cartItems, totalPrice, subscriptionFee } = useAppSelector(
    (state) => state.cart
  );
  return (
    <>
      <div className="px-4 md:px-16  my-8  flex justify-between">
        <h2 className="text-4xl font-medium text-primary">Checkout</h2>
        <button className="btn btn-outline" onClick={() => navigateTo("/cart")}>
          Back to Cart
        </button>
      </div>
      <div className="px-4 md:px-16">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-md grid grid-cols-12 p-5 gap-4 w-full h-fit">
            <div className="col-span-12">
              <h2 className="text:lg md:text-xl">
                If you have hardware items in your order we will ship them to
                this address.
              </h2>
            </div>
            <div className=" col-span-6 ">
              <label htmlFor="input-wizard-1" className="form-label">
                Customer name
              </label>
              <input type="text" className="form-control"></input>
            </div>

            <div className=" col-span-6">
              <label htmlFor="input-wizard-1" className="form-label">
                Email
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className=" col-span-6">
              <label htmlFor="input-wizard-1" className="form-label">
                Contact Phone
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className=" col-span-6">
              <label htmlFor="input-wizard-1" className="form-label">
                Address
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className=" col-span-6">
              <label htmlFor="input-wizard-1" className="form-label">
                Bank Info
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className=" col-span-6">
              <label htmlFor="input-wizard-1" className="form-label">
                Ein
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className=" col-span-6">
              <label htmlFor="input-wizard-1" className="form-label">
                Business owner
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className=" col-span-6">
              <label htmlFor="input-wizard-1" className="form-label">
                Percentage of business owned
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className=" col-span-full w-full">
              <label htmlFor="update-profile-form-2" className="form-label">
                Upload drivers license
              </label>
              <div className="w-full border">
                <Image />
              </div>
            </div>
            <div className=" col-span-full w-full">
              <label htmlFor="update-profile-form-2" className="form-label">
                Bank Check Image
              </label>
              <div className="w-full border">
                <Image />
              </div>
            </div>
            <div className=" col-span-12 mt-7 ">
              <button className="bg-primary py-2 rounded-md w-full text-white ">
                Proceed
              </button>
            </div>
          </div>

          <div className="box p-8 text-xl  bg-primary text-white h-fit">
            <h2 className="text-3xl mb-8">Order Summary</h2>
            <div className="md:mr-40 flex flex-col gap-4">
              <div className="flex gap-10 ">
                <h2>Subtotal</h2>
                <h2 className="ml-auto">${totalPrice}</h2>
              </div>
              <div className="flex gap-10 ">
                <h2>Shipping</h2>
                <h2 className="ml-auto">$0.00</h2>
              </div>
              <div className="flex gap-10  ">
                <h2>Monthly Fee</h2>
                <h2 className="ml-auto">${subscriptionFee}</h2>
              </div>
              <hr />
              <div className="flex gap-10 text-2xl tracking-wider font-extrabold">
                <h2>Total</h2>
                <h2 className="ml-auto ">${totalPrice + subscriptionFee}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-8 h-20" />
    </>
  );
};

export default CheckOut;
