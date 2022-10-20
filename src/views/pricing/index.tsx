import {
  TrophyIcon,
  CheckIcon,
  GiftIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { basicItems } from "../../utils/data";
const PricingPage = () => {
  return (
    <>
      <div className="p-8">
        {/* <h2 className="text-center text-2xl mb-8">Pricing </h2> */}
        <div className="grid md:grid-cols-3 gap-4">
          {/* Begin: Basic Starter  */}
          <div className="bg-white pl-8 py-4 rounded-md">
            <div className="rounded-full bg-[#edf6ff] h-24 w-24 flex items-center justify-center">
              <TrophyIcon className="h-14 w-14" />
            </div>
            <h2 className="text-xl text-black my-3">Basic Starter</h2>
            <h2 className="text-3xl text-primary my-3">
              $50<span className="text-sm">/ month</span>
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
            <button className="btn btn-primary shadow-md mt-5 text-sm tracking-widest">
              Subscribe
            </button>
          </div>
          {/* End: Basic Starter  */}

          {/* Begin: Ultimate Starter  */}
          <div className="box pl-8 py-4">
            <div className="rounded-full bg-[#edf6ff] h-24 w-24 flex items-center justify-center">
              <GiftIcon className="h-14 w-14" />
            </div>
            <h2 className="text-xl text-black my-3">Ultimate</h2>
            <h2 className="text-3xl text-primary my-3">
              $139<span className="text-sm">/ month</span>
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
            <button className="btn btn-primary shadow-md mt-5 text-sm tracking-widest">
              Subscribe
            </button>
          </div>
          {/* END: Ultimate Starter  */}

          {/* Begin: Professional Starter  */}
          <div className="box pl-8 py-4">
            <div className="rounded-full bg-[#edf6ff] h-24 w-24 flex items-center justify-center">
              <RocketLaunchIcon className="h-14 w-14" />
            </div>
            <h2 className="text-xl text-black my-3">Professional</h2>
            <h2 className="text-3xl text-primary my-3">
              $199<span className="text-sm">/ month</span>
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
            <button className="btn btn-primary shadow-md mt-5 text-sm tracking-widest">
              Subscribe
            </button>
          </div>
          {/* END: Professional Starter  */}
        </div>
      </div>
    </>
  );
};

export default PricingPage;
