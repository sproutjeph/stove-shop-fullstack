import React from "react";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

const supportData = [
  { id: "1", support: "sopport-1", info: "info", text: "text" },
  { id: "2", support: "sopport-2", info: "info", text: "text" },
  { id: "3", support: "sopport-3", info: "info", text: "text" },
  { id: "4", support: "sopport-4", info: "info", text: "text" },
  { id: "5", support: "sopport-5", info: "info", text: "text" },
];

const OnsiteSupportList = ({ setShowOnsiteSupportModal }: any) => {
  return (
    <>
      <section className="h-screen" id="support">
        <div className="">
          <h2 className="text-4xl text-center text-primary tracking-wider">
            Onsite Support
          </h2>
        </div>
        <div className="px-4 md:px-8 grid grid-cols-12 gap-6 mt-5 ">
          <div className="intro-y col-span-12 overflow-auto lg:overflow-visible mb-8">
            <table className=" table table-report -mt-2">
              <thead>
                <tr>
                  <th className=" whitespace-nowrap">Supports</th>
                  <th className="text-center whitespace-nowrap">Add Info</th>
                  <th className="text-center whitespace-nowrap">Info</th>
                  <th className="text-center whitespace-nowrap">Test</th>

                  <th className="text-center whitespace-nowrap">Add Support</th>
                </tr>
              </thead>
              <tbody>
                {supportData.map((support, index) => (
                  <tr key={support.id + index} className="intro-x">
                    <td className="">
                      <button className="font-medium whitespace-nowrap">
                        {support.support}
                      </button>
                    </td>
                    <td className="text-center">
                      <button
                        className="btn btn-outline border-2 border-dashed "
                        onClick={() => setShowOnsiteSupportModal(true)}
                      >
                        <PlusIcon className="h-6 w-6" />
                      </button>
                    </td>
                    <td className="text-center ">{support.info}</td>
                    <td className="text-center ">{support.text}</td>

                    <td className="">
                      <div className="justify-center form-check form-switch">
                        <input
                          id="product-status-active"
                          className="form-check-input"
                          type="checkbox"
                          checked={false}
                          onChange={(e: any) => {
                            // console.log(e.target.checked);
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* BEGIN: Pagination -*/}
        <div className="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap px-2 md:px-8">
          <nav className="w-full sm:w-auto sm:mr-auto">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  <ChevronDoubleLeftIcon className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <ChevronLeftIcon className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  ...
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <ChevronRightIcon className="w-4 h-4" />
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  <ChevronDoubleRightIcon className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </nav>
          <select className="w-20 mt-3 form-select box sm:mt-0">
            <option>10</option>
            <option>25</option>
            <option>35</option>
            <option>50</option>
          </select>
        </div>
        {/* END: Pagination -*/}
      </section>
    </>
  );
};

export default OnsiteSupportList;
