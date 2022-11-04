import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/outline";
import { Modal } from "../modal/Modal";
import { useAppSelector } from "../../stores/hooks";
import counterTopKit from "@/assets/images/counter-top-kit.jpg";

const ProductDetailsModal = ({
  setShowProductDetailsModal,
  showProductDetailsModal,
}: any) => {
  const { products } = useAppSelector((state) => state.product);
  const [params, _] = useSearchParams();
  const [productId, setProductId] = useState("");
  const product = products.find((item) => item.id === productId);

  useEffect(() => {
    const id = params.get("productId");
    setProductId(id as string);
  }, [params]);

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
                  <h2 className="text-2xl text-primary">{product?.name}</h2>
                  <div className="flex gap-2 mt-2">
                    <StarIcon className="h-5 w-5 fill-warning" />
                    <StarIcon className="h-5 w-5 fill-warning" />
                    <StarIcon className="h-5 w-5 fill-warning" />
                    <StarIcon className="h-5 w-5 fill-warning" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                  </div>
                  <p className="text-sm text-gray-500 mt-2 max-w-md leading-6">
                    {product?.description}
                  </p>
                  {/* <p className="text-sm text-gray-600 mt-2">
                    Dimensions: 7.5" x 4" x .0.8 - 2"
                  </p> */}
                  <h4 className="text-primary text-2xl mt-2">
                    Price :{" "}
                    <span className="text-slate-900">${product?.price}</span>
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
