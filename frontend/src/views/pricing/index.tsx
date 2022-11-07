import { toast } from "react-toastify";
import { basicItems } from "../../utils/data";
import { selectSubscription } from "../../featuers/cart/cartSlice";
import { useAppSelector, useAppDispatch } from "../../stores/hooks";
import {
  TrophyIcon,
  CheckIcon,
  GiftIcon,
  RocketLaunchIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
const PricingPage = () => {
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.product);
  const { subscriptionFee } = useAppSelector((state) => state.cart);
  return (
    <>
      <div className="p-8">
        {/* <h2 className="text-center text-2xl mb-8">Pricing </h2> */}
        <div className="grid md:grid-cols-3 gap-4">
          {products
            .filter((item) => item.category === "subscription")
            .map((subscription) => (
              <div
                className="bg-white pl-8 py-4 rounded-md"
                key={subscription.id}
              >
                <div className="flex justify-between">
                  <div className="rounded-full bg-[#edf6ff] h-24 w-24 flex items-center justify-center">
                    <TrophyIcon className="h-14 w-14" />
                  </div>

                  {subscriptionFee === Number(subscription.price) ? (
                    <CheckBadgeIcon className="h-6 w-6   text-warning mr-4" />
                  ) : null}
                </div>
                <h2 className="text-xl text-black my-3">{subscription.name}</h2>
                <h2 className="text-3xl text-primary my-3">
                  ${subscription.price}
                  <span className="text-sm">/ month</span>
                </h2>
                <ul className="mt-6 flex flex-col gap-4">
                  {basicItems.map((item, index) => (
                    <li className="flex items-center gap-1" key={index + item}>
                      {" "}
                      <CheckIcon className="w-5 h-5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className="btn btn-primary shadow-md mt-5 text-sm tracking-widest"
                  onClick={() => {
                    dispatch(selectSubscription(Number(subscription.price)));
                    toast(`${subscription.name} Added`);
                  }}
                >
                  Order Now
                </button>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default PricingPage;
