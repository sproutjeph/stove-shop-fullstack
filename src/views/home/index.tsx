import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ProductList,
  StarterKit,
  StarterKitDescription,
} from "../../components";
import counterTopKit from "@/assets/images/counter-top-kit.jpg";
import handheldKit from "@/assets/images/gest-service-kit-2.jpg";
import guestServiceKit from "@/assets/images/guest-service-kit.jpg";
import {
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
  TrophyIcon,
  GiftIcon,
  RocketLaunchIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";
import { useAppDispatch } from "../../stores/hooks";
import {
  openBasicPricingModal,
  openProPricingModal,
  openUltimatePricingModal,
} from "../../featuers/modal/modalSlice";

const HomePage = () => {
  const [showCountertopKit, setShowCountertopKit] = useState(true);
  const [showHandheldKit, setShowHandheldKit] = useState(false);
  const [showGuestServiceKit, setShowGuestServiceKit] = useState(false);
  const [showCounterOnlyKit, setShowCounterOnlyKit] = useState(false);
  const [showTableKit, setShowTableKit] = useState(false);

  const dispatch = useAppDispatch();
  const [isActivated, setIsActivated] = useState({
    basic: false,
    ultimate: false,
    pro: false,
  });
  const navigateTo = useNavigate();

  return (
    <>
      <div className="">
        <h2 className="text-center text-2xl mt-6">
          Chose The Right Plan For Your Resturant{" "}
        </h2>

        {/* Begin: All Starters  */}
        <div className="p-8 grid md:grid-cols-3 gap-4">
          {/* Begin: Basic Starter  */}
          <div className="bg-white rounded-md px-8 py-4">
            <div className="flex">
              <div className="rounded-full bg-[#edf6ff] h-24 w-24 flex items-center justify-center">
                <TrophyIcon className="h-14 w-14" />
              </div>

              {isActivated.basic && (
                <CheckBadgeIcon className="h-6 w-6   text-warning ml-auto" />
              )}
            </div>
            <h2 className="text-xl text-black my-3">Basic Starter</h2>
            <h2 className="text-3xl text-primary my-3">
              $50<span className="text-sm">/ month</span>
            </h2>
            <div className="flex justify-between">
              <button
                className="btn btn-outline shadow-md mt-5 text-sm tracking-widest"
                onClick={() => dispatch(openBasicPricingModal())}
              >
                Details
              </button>

              <button
                className="btn btn-primary shadow-md mt-5 text-sm tracking-widest "
                onClick={() =>
                  setIsActivated({
                    ...isActivated,
                    basic: !isActivated.basic,
                    pro: false,
                    ultimate: false,
                  })
                }
              >
                {isActivated.basic ? "Activated" : "Activate"}
              </button>
            </div>
          </div>
          {/* End: Basic Starter  */}

          {/* Begin: Ultimate Starter  */}
          <div className="bg-white rounded-md px-8 py-4">
            <div className="flex">
              <div className="rounded-full bg-[#edf6ff] h-24 w-24 flex items-center justify-center">
                <GiftIcon className="h-14 w-14" />
              </div>
              {isActivated.ultimate && (
                <CheckBadgeIcon className="h-6 w-6  text-warning ml-auto" />
              )}
            </div>
            <h2 className="text-xl text-black my-3">Ultimate</h2>
            <h2 className="text-3xl text-primary my-3">
              $139<span className="text-sm">/ month</span>
            </h2>
            <div className="flex justify-between">
              <button
                className="btn btn-outline shadow-md mt-5 text-sm tracking-widest"
                onClick={() => dispatch(openUltimatePricingModal())}
              >
                Details
              </button>
              <button
                className="btn btn-primary shadow-md mt-5 text-sm tracking-widest "
                onClick={() =>
                  setIsActivated({
                    ...isActivated,
                    ultimate: !isActivated.ultimate,
                    basic: false,
                    pro: false,
                  })
                }
              >
                {isActivated.ultimate ? "Activated" : "Activate"}
              </button>
            </div>
          </div>
          {/* END: Ultimate Starter  */}

          {/* Begin: Professional Starter  */}
          <div className="bg-white rounded-md px-8 py-4">
            <div className="flex">
              <div className="rounded-full bg-[#edf6ff] h-24 w-24 flex items-center justify-center">
                <RocketLaunchIcon className="h-14 w-14" />
              </div>
              {isActivated.pro && (
                <CheckBadgeIcon className="h-6 w-6 ml-auto text-warning" />
              )}
            </div>
            <h2 className="text-xl text-black my-3">Professional</h2>
            <h2 className="text-3xl text-primary my-3">
              $199<span className="text-sm">/ month</span>
            </h2>

            <div className="flex justify-between">
              <button
                className="btn btn-outline shadow-md mt-5 text-sm tracking-widest"
                onClick={() => dispatch(openProPricingModal())}
              >
                Details
              </button>
              <button
                className="btn btn-primary shadow-md mt-5 text-sm tracking-widest "
                onClick={() =>
                  setIsActivated({
                    ...isActivated,
                    pro: !isActivated.pro,
                    ultimate: false,
                    basic: false,
                  })
                }
              >
                {isActivated.pro ? "Activated" : "Activate"}
              </button>
            </div>
          </div>
          {/* END: Professional Starter  */}
        </div>
        {/* END: All Starters  */}
      </div>

      {/* Begin: Starters Image  */}
      <div className="p-8 grid md:grid-cols-2 justify-center gap-8">
        <div className="">
          {showCountertopKit && (
            <StarterKit
              kitImg={counterTopKit}
              kitMessage="With STOVE your restaurant is always right at your fingertips,
             offering 24/7 access to our fully interactive management system no matter where
              you are!"
            />
          )}
          {showHandheldKit && (
            <StarterKit
              kitImg={handheldKit}
              kitMessage="Ensuring your guests a seamless and timely dining experience each and every time can be a challenge, but with STOVE you get endless options to tackle even the toughest of guests."
            />
          )}
          {showGuestServiceKit && (
            <StarterKit
              kitImg={guestServiceKit}
              kitMessage="STOVE allows your staff and restaurant to better engage with your guests, while ensuring that your system is robust and powerful to support every aspect of your restaurant on your hours. "
            />
          )}

          {/* Begin: CounterTopKit Description */}
          <div className="">
            {showCountertopKit && (
              <StarterKitDescription
                descriptionHeader="Point of Sale that is more than just a POS. Join the revolution and
          experience STOVE’s all in one platform that can streamline your
          operations while increasing your overall guest engagement!"
                descriptionItems={[
                  "Robust guest centric point of sale",
                  "Reservation data available to servers",
                  "Dynamic and themed integrated online ordering",
                  "Guest Self Ordering and Checkout",
                  "Station, Handheld, Kiosks available",
                ]}
              />
            )}

            {/* END: CounterTopKit Description */}

            {/* Begin: handheldKit Description */}
            {showHandheldKit && (
              <StarterKitDescription
                descriptionHeader="Whether you're fulfilling orders in the dining room, opening your patio, or hitting the road, the next generation of Stove handheld POS is ready."
                descriptionItems={[
                  "Robust guest centric point of sale",
                  "Reservation data available to servers",
                  "Dynamic and themed integrated online ordering",
                  "Guest Self Ordering and Checkout",
                  "Station, Handheld, Kiosks available",
                ]}
              />
            )}

            {/* END: handheldKit Description */}

            {/* Begin: Guest service kit Description */}
            {showGuestServiceKit && (
              <StarterKitDescription
                descriptionHeader="Enhance your guests experience as soon as they walk through the door. STOVE’s modern form
of labor is here to stay, add self ordering kiosks to your quick service, fast casual, café or bakery, or any enterprise today!"
                descriptionItems={[
                  "Robust guest centric point of sale",
                  "Reservation data available to servers",
                  "Dynamic and themed integrated online ordering",
                  "Guest Self Ordering and Checkout",
                  "Station, Handheld, Kiosks available",
                ]}
              />
            )}
          </div>

          {/* END: Guest service kit Description */}
        </div>

        <div className="text-2xl mt-8 md:mt-0">
          <h2 className="text-center">Stove Starter Kits </h2>

          <div className="bg-white rounded-md flex p-4 mt-6 justify-between items-center">
            <ComputerDesktopIcon className="h-12 w-12" />
            <div>CounterTopKit</div>

            <div className=" form-check form-switch">
              <input
                id="product-status-active"
                className="form-check-input"
                type="checkbox"
                checked={showCountertopKit}
                onChange={() => {
                  setShowCountertopKit(true);
                  setShowHandheldKit(false);
                  setShowGuestServiceKit(false);
                }}
              />
            </div>
          </div>
          <div className="bg-white rounded-md flex p-4 mt-6 justify-between items-center">
            <DevicePhoneMobileIcon className="w-12 h-12" />
            <div>Counter + Customer Kit</div>

            <div className=" form-check form-switch">
              <input
                id="product-status-active"
                className="form-check-input"
                type="checkbox"
                checked={showHandheldKit}
                onChange={() => {
                  setShowHandheldKit(true);
                  setShowCountertopKit(false);
                  setShowGuestServiceKit(false);
                }}
              />
            </div>
          </div>
          <div className="bg-white rounded-md flex p-4 mt-6 justify-between items-center">
            <UserGroupIcon className="h-12 w-12" />
            <div>Guest Self-Service Kit</div>
            <div className=" form-check form-switch">
              <input
                id="product-status-active"
                className="form-check-input"
                type="checkbox"
                checked={showGuestServiceKit}
                onChange={() => {
                  setShowGuestServiceKit(true);
                  setShowCountertopKit(false);
                  setShowHandheldKit(false);
                  setShowCounterOnlyKit(false);
                }}
              />
            </div>
          </div>
          <div className="bg-white rounded-md flex p-4 mt-6 justify-between items-center">
            <UserGroupIcon className="h-12 w-12" />
            <div>Counter Only Kit</div>
            <div className=" form-check form-switch">
              <input
                id="product-status-active"
                className="form-check-input"
                type="checkbox"
                checked={showGuestServiceKit}
                onChange={() => {
                  setShowCounterOnlyKit(true);
                  setShowGuestServiceKit(false);
                  setShowCountertopKit(false);
                  setShowHandheldKit(false);
                  setShowTableKit(false);
                }}
              />
            </div>
          </div>
          <div className="bg-white rounded-md flex p-4 mt-6 justify-between items-center">
            <UserGroupIcon className="h-12 w-12" />
            <div>Table Kit</div>
            <div className=" form-check form-switch">
              <input
                id="product-status-active"
                className="form-check-input"
                type="checkbox"
                checked={showGuestServiceKit}
                onChange={() => {
                  setShowTableKit(true);
                  setShowGuestServiceKit(false);
                  setShowCountertopKit(false);
                  setShowHandheldKit(false);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-end mx-8 lg:-mt-32">
        <button className="btn btn-primary shadow-md  text-sm">
          Add to Cart
        </button>
        <a href="#product">
          <button className="btn btn-primary shadow-md  text-sm ml-10">
            Build Your Kit
          </button>
        </a>
      </div>
      <div className="mt-32">
        <ProductList />
      </div>
    </>
  );
};

export default HomePage;
