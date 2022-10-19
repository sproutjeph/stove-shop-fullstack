import { Modal } from "../../components/modal/Modal";
import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { closeCartModal } from "../../featuers/cart/cartSlice";

const CartModal = () => {
  const dispatch = useAppDispatch();
  const { isCartModalOpen } = useAppSelector((state) => state.cart);

  return (
    <>
      <Modal.Frame
        open={isCartModalOpen}
        onClose={() => {
          dispatch(closeCartModal());
        }}
      >
        <>
          <Modal.Head>
            <>
              <h2 className="text-lg">Your Cart Looks Good</h2>
            </>
          </Modal.Head>

          <Modal.Body>
            <div className="flex flex-col space-y-2">
              <input
                className="text-gray-800 outline-none border-2 border-white focus:border-blue-300 p-1"
                placeholder="Username"
              />
              <input
                className="text-gray-800 outline-none border-2 border-white focus:border-blue-300 p-1"
                placeholder="Password"
                type="password"
              />
              <button className="text-gray-100 border-2 border-blue-700 bg-blue-600 rounded shadow-xl p-2 outline-none focus:border-blue-300">
                Check Out
              </button>
            </div>
          </Modal.Body>
        </>
      </Modal.Frame>
    </>
  );
};

export default CartModal;
