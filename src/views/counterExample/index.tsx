import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../stores/hooks";
import {
  decreament,
  increament,
  incrementByAmount,
  selectCartState,
  clearCart,
  getCartItems,
} from "../../featuers/cart/cartSlice";
// import ModalComponent from "./NavModal";
import { Modal, ModalBody } from "../../base-components/modal";

const CounterExample = () => {
  const [showHolidayModal, setShowHolidayModal] = useState(false);
  const [modalState, setModalState] = useState({ isCreate: true, data: null });
  const showModal = (e: any) => {
    setShowHolidayModal(e.show);
    setModalState(e);
  };

  // useEffect(() => {
  //   dispatch(getCartItems());
  // }, []);

  const dispatch = useAppDispatch();
  const cartState = useAppSelector(selectCartState);
  //You have access to the Entire Store
  const entireStore = useAppSelector((store) => store);
  // console.log(entireStore);

  return (
    <div>
      <button onClick={() => dispatch(increament())}>Add</button>
      <h1 className="text-green-500">{cartState.amount}</h1>
      <button onClick={() => dispatch(decreament())}>Minus</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
    </div>
  );
};

export default CounterExample;
