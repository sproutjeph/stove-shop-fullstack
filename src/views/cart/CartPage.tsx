import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import itemImg1 from "@/assets/images/counter-top-kit.jpg";
import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/outline";

const CartPage = () => {
  const navigateTo = useNavigate();
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      <div className="p-8 ">
        <div className=" max-w-xl md:max-w-2xl p-4 text-center mx-auto">
          <h2 className="text-4xl font-thin tracking-wide">
            Your Cart Looks Good
          </h2>
          <h6 className="text-sm mt-2">
            Review your order, then continue to checkout.
          </h6>
        </div>

        <div className=" mt-4 md:flex gap-8 justify-center border-b-[1px]  border-slate-500 pb-6 md:pb-12">
          <div className="max-w-lg mb-2 mx-auto md:mx-0 md:w-72 h-56">
            <img src={itemImg1} alt="" className="rounded-md h-full w-full " />
          </div>
          <div className="text-center ">
            <h2 className="text-primary tracking-wider text-lg md:text-xl">
              Stove POS 2 $409+ $50 <span className="text-sm">/mo</span>
            </h2>
            <p className="text-xs max-w-[22rem]  mt-2 md:text-sm ">
              Inside, outside, drive-through, curbside - Toast Go® 2 mobile
              handhelds are fast, safe, flexible and ready to help your business
              adapt.
            </p>

            <div className="flex gap-8 mb-4 items-center bg-gray-300 w-full rounded-md mt-6">
              <button
                className=" tracking-widest bg-white py-2 px-10 rounded-md rounded-r-none"
                onClick={() => setQuantity(quantity - 1)}
              >
                <MinusIcon className="w-6 h-6" />
              </button>
              <span className="text-base py-2 px-[21px] w-[25px] text-green-700">
                {quantity}
              </span>
              <button
                className="py-2 px-10 tracking-widest bg-green-500 text-white"
                onClick={() => setQuantity(quantity + 1)}
              >
                <PlusIcon className="w-6 h-6" />
              </button>
              <button
                className="py-2 px-10 tracking-widest bg-warning text-white rounded-md rounded-l-none -ml-8"
                // onClick={() => setQuantity(quantity + 1)}
              >
                <TrashIcon className="w-6 h-6" />
              </button>
            </div>

            <h2 className="text-2xl tracking-widest">Amount : $200</h2>
          </div>
        </div>

        <div className="mt-6 flex justify-between mx-auto  max-w-3xl">
          <button
            className="py-2 px-4 tracking-widest bg-primary text-white rounded-md rounded-r-none "
            onClick={() => navigateTo("/")}
          >
            Go to Products
          </button>
          <button
            className="py-2 px-4 tracking-widest bg-warning text-white rounded-md rounded-l-none"
            // onClick={() => setQuantity(quantity + 1)}
          >
            Clear Cart
          </button>
        </div>
        <div className=" my-8 border border-slate-500 p-4  max-w-md md:ml-auto ">
          <div className="grid grid-cols-2 gap-2 justify-center place-items-center text-lg border-slate-500 tracking-widest border-b-[1px] pb-4">
            <h2 className="">Subtotal</h2>
            <h2 className="text-green-500">$ 300.87</h2>
            <h2 className="">Tax</h2>
            <h2 className="text-green-500">$ 30.87</h2>
          </div>
          <div className="flex justify-between text-black text-2xl mt-4">
            <h1 className="">Order Total :</h1>
            <h1 className="">$ 78.76</h1>
          </div>
        </div>
        <div className="flex">
          <div />
          <button className="bg-primary w-full btn text-white text-lg tracking-widest max-w-md ml-auto ">
            Check Out
          </button>
        </div>
      </div>
    </>
  );
};

export default CartPage;
