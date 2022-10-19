import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import itemImg1 from "@/assets/images/handheld-kit.jpg";
import { PlusIcon, MinusIcon, TrashIcon } from "@heroicons/react/24/outline";

const CartPage = () => {
  const navigateTo = useNavigate();
  const [quantity, setQuantity] = useState(0);

  return (
    <>
      <div className="p-8 ">
        <div className="bg-white max-w-lg md:max-w-2xl p-4 text-center mx-auto">
          <h2 className="text-4xl font-thin tracking-wide">
            Your Cart Looks Good
          </h2>
          <h6 className="text-sm mt-2">
            Review your order, then continue to checkout.
          </h6>
        </div>

        <div className="mt-4 flex gap-8 justify-center md:gap-40 border-b-[1px]  border-slate-500 pb-6 md:pb-12">
          <div className="w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem]">
            <img src={itemImg1} alt="" className="rounded-md " />
          </div>
          <div className="">
            <h2 className="text-primary tracking-wider text-lg md:text-xl">
              Stove POS 2 $409+ $50 <span className="text-sm">/mo</span>
            </h2>
            <p className="text-xs w-60 mt-2 md:text-sm">
              Inside, outside, drive-through, curbside - Toast Go® 2 mobile
              handhelds are fast, safe, flexible and ready to help your business
              adapt.
            </p>

            <div className="flex gap-8 mb-4 items-center bg-gray-300 w-40 rounded-md mt-6">
              <button
                className=" tracking-widest bg-white py-2 px-4 rounded-md rounded-r-none"
                onClick={() => setQuantity(quantity - 1)}
              >
                <MinusIcon className="w-6 h-6" />
              </button>
              <span className="text-xl text-green-700">{quantity}</span>
              <button
                className="py-2 px-4 tracking-widest bg-green-500 text-white"
                onClick={() => setQuantity(quantity + 1)}
              >
                <PlusIcon className="w-6 h-6" />
              </button>
              <button
                className="py-2 px-4 tracking-widest bg-warning text-white rounded-md rounded-l-none -ml-8"
                // onClick={() => setQuantity(quantity + 1)}
              >
                <TrashIcon className="w-6 h-6" />
              </button>
            </div>

            <h2 className="text-2xl tracking-widest">$200</h2>
          </div>
        </div>

        <div className="mt-6 flex justify-between mx-auto  max-w-2xl">
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
          <div className="flex justify-between text-black text-3xl mt-4">
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
