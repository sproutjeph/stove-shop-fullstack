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
              <h2 className="text-2xl">Your Cart Looks Good</h2>
              <h4 className="text-md">
                Review your order, then continue to checkout.
              </h4>
            </>
          </Modal.Head>

          <Modal.Body>
            <div className="">
              <div className="text-lg shadow-lg box text-black p-5 max-w-sm">
                5 items in your Cart
              </div>
            </div>
          </Modal.Body>
        </>
      </Modal.Frame>
    </>
  );
};

export default CartModal;
