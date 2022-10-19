import { CheckIcon, GiftIcon } from "@heroicons/react/24/outline";
import { Modal } from "../../../components/modal/Modal";
import { basicItems } from "../../../utils/data";
import { useAppSelector, useAppDispatch } from "../../../stores/hooks";
import { closeUltimatePricingModal } from "../../../featuers/modal/modalSlice";
const UltimatePricingModal = () => {
  const dispatch = useAppDispatch();
  const { isUltimatePricingModalOpen } = useAppSelector((state) => state.modal);
  return (
    <>
      <Modal.Frame
        open={isUltimatePricingModalOpen}
        onClose={() => {
          dispatch(closeUltimatePricingModal());
        }}
      >
        <>
          <Modal.Head>
            <>
              <h2 className="text-lg">Ultimate</h2>
            </>
          </Modal.Head>

          <Modal.Body>
            <div className="z-50 pl-8 py-4">
              <div className="rounded-full bg-[#edf6ff] h-24 w-24 flex items-center justify-center">
                <GiftIcon className="h-14 w-14  text-black" />
              </div>
              <h2 className="text-xl text-black my-3">Ultimate Starter</h2>
              <h2 className="text-3xl text-primary my-3">
                $139<span className="text-sm">/ month</span>
              </h2>
              <hr />
              <ul className="mt-6 grid grid-cols-2 gap-4 text-black">
                {basicItems.map((item, index) => (
                  <li className="flex items-center gap-1" key={index + item}>
                    {" "}
                    <CheckIcon className="w-5 h-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="btn btn-primary shadow-md mt-5 text-sm tracking-widest">
                Subscribe
              </button>
            </div>
          </Modal.Body>
        </>
      </Modal.Frame>
    </>
  );
};

export default UltimatePricingModal;
