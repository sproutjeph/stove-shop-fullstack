import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductData } from "../../utils/data";
import { StarIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { Modal } from "../modal/Modal";

import counterTopKit from "@/assets/images/counter-top-kit.jpg";

interface IProps {
  productId: string;
}

const ProductDetailsModal = ({
  setShowProductDetailsModal,
  showProductDetailsModal,
}: any) => {
  const navigateTo = useNavigate();
  // const [params, setParams] = useSearchParams();
  const [productId, setProductId] = useState("153bd7ae");
  const [quantity, setQuantity] = useState(0);

  // useEffect(() => {
  //   setProductId(()=> params.get("productId"))
  //   console.log(params.get("productId"));
  // }, [params]);
  const product = ProductData.find((item) => item.productId === productId);

  return (
    <div>
      <Modal.Frame
        open={showProductDetailsModal}
        onClose={() => setShowProductDetailsModal(false)}
      >
        <>
          <Modal.Head>
            <h2 className="text-2xl">Product Details</h2>
          </Modal.Head>

          <Modal.Body>
            <>
              <div className="grid md:grid-cols-2 gap-8 md:gap-20">
                <div className="">
                  <img src={counterTopKit} alt="" className="rounded-md" />
                </div>
                <div className="">
                  <h2 className="text-2xl text-primary">
                    {product?.productName}
                  </h2>
                  <div className="flex gap-2 mt-2">
                    <StarIcon className="h-5 w-5 fill-warning" />
                    <StarIcon className="h-5 w-5 fill-warning" />
                    <StarIcon className="h-5 w-5 fill-warning" />
                    <StarIcon className="h-5 w-5 fill-warning" />
                    <StarIcon className="h-5 w-5 " />
                    <StarIcon className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-gray-500 mt-2 max-w-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum nisi aperiam possimus mollitia incidunt, excepturi
                    dolor facilis reiciendis asperiores eos?
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Dimensions: 7.5" x 4" x .0.8 - 2"
                  </p>
                  <h4 className="text-warning text-lg mt-2">
                    $100 + $50 <span className="text-sm">/mon</span>{" "}
                  </h4>
                </div>
              </div>
              <div className="px-5 mt-5 mb-5 text-center">
                <button
                  className="btn btn-secondary w-24 ml-2 "
                  onClick={() => setShowProductDetailsModal(false)}
                >
                  Close
                </button>
              </div>
            </>
          </Modal.Body>
        </>
      </Modal.Frame>
    </div>
  );
};

export default ProductDetailsModal;
