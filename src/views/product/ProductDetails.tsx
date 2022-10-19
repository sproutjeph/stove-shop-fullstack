import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductData } from "../../utils/data";
import { StarIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";

import counterTopKit from "@/assets/images/counter-top-kit.jpg";

interface IProps {
  productId: string;
}

const ProductDetails = () => {
  // const [params, setParams] = useSearchParams();
  const [productId, setProductId] = useState("153bd7ae");
  const [quantity, setQuantity] = useState(0);

  // useEffect(() => {
  //   setProductId(()=> params.get("productId"))
  //   console.log(params.get("productId"));
  // }, [params]);
  const product = ProductData.find((item) => item.productId === productId);

  return (
    <div className="p-8">
      <div className="grid md:grid-cols-2 gap-8 md:gap-20">
        <div className="md:w-[40rem] md:h-[25rem]">
          <img src={counterTopKit} alt="" className="rounded-md" />
        </div>
        <div className="">
          <h2 className="text-2xl text-primary">{product?.productName}</h2>
          <div className="flex gap-2 mt-2">
            <StarIcon className="h-5 w-5 fill-warning" />
            <StarIcon className="h-5 w-5 fill-warning" />
            <StarIcon className="h-5 w-5 fill-warning" />
            <StarIcon className="h-5 w-5 fill-warning" />
            <StarIcon className="h-5 w-5 " />
            <StarIcon className="h-5 w-5" />
          </div>
          <p className="text-sm text-gray-500 mt-2 max-w-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nisi
            aperiam possimus mollitia incidunt, excepturi dolor facilis
            reiciendis asperiores eos?
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Dimensions: 7.5" x 4" x .0.8 - 2"
          </p>
          <h4 className="text-warning text-lg mt-2">
            $100 + $50 <span className="text-sm">/mon</span>{" "}
          </h4>
          <div className="mt-4">
            <div className="flex gap-8 mb-4 items-center bg-gray-300 w-40 rounded-md">
              <button
                className=" tracking-widest bg-white py-2 px-4 rounded-md rounded-r-none"
                onClick={() => setQuantity(quantity - 1)}
              >
                <MinusIcon className="w-6 h-6" />
              </button>
              <span className="text-xl text-green-700">{quantity}</span>
              <button
                className="py-2 px-4 tracking-widest bg-green-500 text-white rounded-md rounded-l-none"
                onClick={() => setQuantity(quantity + 1)}
              >
                <PlusIcon className="w-6 h-6" />
              </button>
            </div>
            <button className="btn btn-primary tracking-widest mt-4 w-44">
              Add to Kit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
