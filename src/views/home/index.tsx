import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  OnsiteSupportList,
  OnsiteSupportModal,
  ProductDetailsModal,
  ProductList,
  SoftwareAddOnList,
  SoftwareAddOnModal,
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
  const navigateTo = useNavigate();
  const dispatch = useAppDispatch();

  const [showKit, setShowkit] = useState({
    showCountertopKit: true,
    showCounterCustomerKit: false,
    showGuestServiceKit: false,
    showCounterOnlyKit: false,
    showTableKit: false,
  });

  const [isActivated, setIsActivated] = useState({
    basic: false,
    ultimate: false,
    pro: false,
  });
  const [showOnsiteSupportModal, setShowOnsiteSupportModal] = useState(false);
  const [showSoftwareAddOnModal, setShowSoftwareAddOnModal] = useState(false);
  const [showProductDetailsModal, setShowProductDetailsModal] = useState(false);

  return (
    <>
      <div className="">
        <h2 className="text-center text-2xl mt-6">
          Chose The Right Plan For Your Resturant{" "}
        </h2>

        {/* Begin: All Starters  */}
        <div className="p-8 grid md:grid-cols-3 gap-4">
          {/* Begin: Basic Starter  */}
          <div
            className={`${
              isActivated.basic ? "bg-primary" : "bg-white"
            }  rounded-md px-8 py-4 cursor-pointer`}
            onClick={() =>
              setIsActivated({
                ...isActivated,
                basic: !isActivated.basic,
                pro: false,
                ultimate: false,
              })
            }
          >
            <div className="flex">
              <div className="rounded-full bg-[#edf6ff] h-24 w-24 flex items-center justify-center">
                <TrophyIcon className="h-14 w-14" />
              </div>

              {isActivated.basic && (
                <CheckBadgeIcon className="h-6 w-6   text-warning ml-auto" />
              )}
            </div>
            <h2
              className={`${
                isActivated.basic ? "text-white" : "text-black"
              } text-xl  my-3`}
            >
              Basic Starter
            </h2>
            <h2
              className={`${
                isActivated.basic ? "text-white" : "text-primary"
              } text-3xl  my-3`}
            >
              $59<span className="text-sm">/ month</span>
            </h2>
            <button
              className="btn bg-white btn-outline shadow-md mt-5 text-sm tracking-widest"
              onClick={() => dispatch(openBasicPricingModal())}
            >
              Details
            </button>
          </div>
          {/* End: Basic Starter  */}

          {/* Begin: Ultimate Starter  */}
          <div
            className={`${
              isActivated.ultimate ? "bg-primary" : "bg-white"
            } cursor-pointer rounded-md px-8 py-4`}
            onClick={() =>
              setIsActivated({
                ...isActivated,
                ultimate: !isActivated.ultimate,
                basic: false,
                pro: false,
              })
            }
          >
            <div className="flex">
              <div className="rounded-full bg-[#edf6ff] h-24 w-24 flex items-center justify-center">
                <GiftIcon className="h-14 w-14" />
              </div>
              {isActivated.ultimate && (
                <CheckBadgeIcon className="h-6 w-6  text-warning ml-auto" />
              )}
            </div>
            <h2
              className={`${
                isActivated.ultimate ? "text-white" : "text-black"
              } text-xl  my-3`}
            >
              Ultimate
            </h2>
            <h2
              className={`${
                isActivated.ultimate ? "text-white" : "text-primary"
              } text-3xl  my-3`}
            >
              $139<span className="text-sm">/ month</span>
            </h2>
            <button
              className="btn btn-outline shadow-md mt-5 text-sm tracking-widest bg-white"
              onClick={() => dispatch(openUltimatePricingModal())}
            >
              Details
            </button>
          </div>
          {/* END: Ultimate Starter  */}

          {/* Begin: Professional Starter  */}
          <div
            className={`${
              isActivated.pro ? "bg-primary" : "bg-white"
            } cursor-pointer rounded-md px-8 py-4`}
            onClick={() =>
              setIsActivated({
                ...isActivated,
                pro: !isActivated.pro,
                ultimate: false,
                basic: false,
              })
            }
          >
            <div className="flex">
              <div className="rounded-full bg-[#edf6ff] h-24 w-24 flex items-center justify-center">
                <RocketLaunchIcon className="h-14 w-14" />
              </div>
              {isActivated.pro && (
                <CheckBadgeIcon className="h-6 w-6 ml-auto text-warning" />
              )}
            </div>
            <h2
              className={`${
                isActivated.pro ? "text-white" : "text-black"
              } text-xl  my-3`}
            >
              Professional
            </h2>
            <h2
              className={`${
                isActivated.pro ? "text-white" : "text-primary"
              } text-3xl  my-3`}
            >
              $199<span className="text-sm">/ month</span>
            </h2>

            <button
              className="btn btn-outline shadow-md mt-5 text-sm tracking-widest bg-white"
              onClick={() => dispatch(openProPricingModal())}
            >
              Details
            </button>
          </div>
          {/* END: Professional Starter  */}
        </div>
        {/* END: All Starters  */}
      </div>

      {/* Begin: Starters Image  */}
      <div className="p-8 grid md:grid-cols-2 justify-center gap-8">
        <div className="">
          {showKit.showCountertopKit && (
            <StarterKit
              kitImg={counterTopKit}
              kitMessage="With STOVE your restaurant is always right at your fingertips,
             offering 24/7 access to our fully interactive management system no matter where
              you are!"
            />
          )}
          {showKit.showCounterCustomerKit && (
            <StarterKit
              kitImg={handheldKit}
              kitMessage="Ensuring your guests a seamless and timely dining experience each and every time can be a challenge, but with STOVE you get endless options to tackle even the toughest of guests."
            />
          )}
          {showKit.showGuestServiceKit && (
            <StarterKit
              kitImg={guestServiceKit}
              kitMessage="STOVE allows your staff and restaurant to better engage with your guests, while ensuring that your system is robust and powerful to support every aspect of your restaurant on your hours. "
            />
          )}
          {showKit.showCounterOnlyKit && (
            <StarterKit
              kitImg={guestServiceKit}
              kitMessage="STOVE allows your staff and restaurant to better engage with your guests, while ensuring that your system is robust and powerful to support every aspect of your restaurant on your hours. "
            />
          )}
          {showKit.showTableKit && (
            <StarterKit
              kitImg={guestServiceKit}
              kitMessage="STOVE allows your staff and restaurant to better engage with your guests, while ensuring that your system is robust and powerful to support every aspect of your restaurant on your hours. "
            />
          )}

          {/* Begin: CounterTopKit Description */}
          <div className="">
            {showKit.showCounterOnlyKit && (
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
            {showKit.showTableKit && (
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
            {showKit.showCountertopKit && (
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

        <div className="text-2xl mt-4 md:-mt-2">
          <h2 className="text-center">Stove Starter Kits </h2>

          <div className="bg-white rounded-md flex p-2 mt-6 justify-between items-center">
            <ComputerDesktopIcon className="h-8 w-8" />
            <div className="text-base">CounterTopKit</div>

            <div className=" form-check form-switch">
              <input
                id="product-status-active"
                className="form-check-input"
                type="checkbox"
                checked={showKit.showCountertopKit}
                onChange={() =>
                  setShowkit({
                    ...showKit,
                    showCountertopKit: true,
                    showCounterCustomerKit: false,
                    showGuestServiceKit: false,
                    showCounterOnlyKit: false,
                    showTableKit: false,
                  })
                }
              />
            </div>
          </div>
          <div className="bg-white rounded-md flex p-2 mt-6 justify-between items-center">
            <DevicePhoneMobileIcon className="w-8 h-8" />
            <div className="text-base">Counter + Customer Kit</div>

            <div className=" form-check form-switch">
              <input
                id="product-status-active"
                className="form-check-input"
                type="checkbox"
                checked={showKit.showCounterCustomerKit}
                onChange={() => {
                  setShowkit({
                    ...showKit,
                    showCounterCustomerKit: true,
                    showCountertopKit: false,
                    showGuestServiceKit: false,
                    showCounterOnlyKit: false,
                    showTableKit: false,
                  });
                }}
              />
            </div>
          </div>
          <div className="bg-white rounded-md flex p-2 mt-6 justify-between items-center">
            <UserGroupIcon className="h-8 w-8" />
            <div className="text-base">Guest Self-Service Kit</div>
            <div className=" form-check form-switch">
              <input
                id="product-status-active"
                className="form-check-input"
                type="checkbox"
                checked={showKit.showGuestServiceKit}
                onChange={() => {
                  setShowkit({
                    ...showKit,
                    showGuestServiceKit: true,
                    showCountertopKit: false,
                    showCounterCustomerKit: false,
                    showCounterOnlyKit: false,
                    showTableKit: false,
                  });
                }}
              />
            </div>
          </div>
          <div className="bg-white rounded-md flex p-2 mt-6 justify-between items-center">
            <UserGroupIcon className="h-8 w-8" />
            <div className="text-base">Counter Only Kit</div>
            <div className=" form-check form-switch">
              <input
                id="product-status-active"
                className="form-check-input"
                type="checkbox"
                checked={showKit.showCounterOnlyKit}
                onChange={() => {
                  setShowkit({
                    ...showKit,
                    showCounterOnlyKit: true,
                    showCountertopKit: false,
                    showCounterCustomerKit: false,
                    showGuestServiceKit: false,
                    showTableKit: false,
                  });
                }}
              />
            </div>
          </div>
          <div className="bg-white rounded-md flex p-2 mt-6 justify-between items-center">
            <UserGroupIcon className="h-8 w-8" />
            <div className="text-base">Table Kit</div>
            <div className=" form-check form-switch">
              <input
                id="product-status-active"
                className="form-check-input"
                type="checkbox"
                checked={showKit.showTableKit}
                onChange={() => {
                  setShowkit({
                    ...showKit,
                    showTableKit: true,
                    showCountertopKit: false,
                    showCounterCustomerKit: false,
                    showGuestServiceKit: false,
                    showCounterOnlyKit: false,
                  });
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center mx-8 border border-b-gray-300 pb-4 gap-4">
        <a href="#product">
          <button className="btn btn-primary shadow-md  text-sm ">
            Build Your Kit
          </button>
        </a>
      </div>
      <div className="mt-14 mb-8">
        <ProductList setShowProductDetailsModal={setShowProductDetailsModal} />
        <ProductDetailsModal
          setShowProductDetailsModal={setShowProductDetailsModal}
          showProductDetailsModal={showProductDetailsModal}
        />
      </div>
      <div className=" flex justify-center mx-8 border border-b-gray-300 pb-4 gap-4">
        <a href="#software">
          <button className="btn btn-primary shadow-md  text-sm ">
            Add Software
          </button>
        </a>
      </div>

      <div className="mt-14 ">
        <SoftwareAddOnList
          setShowSoftwareAddOnModal={setShowSoftwareAddOnModal}
        />
        <SoftwareAddOnModal
          setShowSoftwareAddOnModal={setShowSoftwareAddOnModal}
          showSoftwareAddOnModal={showSoftwareAddOnModal}
        />
      </div>
      <div className=" flex justify-center mx-8 border border-b-gray-300 pb-4 gap-4">
        <a href="#support">
          <button className="btn btn-primary shadow-md  text-sm ">
            Add Support
          </button>
        </a>
      </div>
      <div className="mt-14 mb-8">
        <OnsiteSupportList
          setShowOnsiteSupportModal={setShowOnsiteSupportModal}
        />

        <OnsiteSupportModal
          showOnsiteSupportModal={showOnsiteSupportModal}
          setShowOnsiteSupportModal={setShowOnsiteSupportModal}
        />
      </div>
    </>
  );
};

export default HomePage;
