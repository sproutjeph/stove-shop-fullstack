import React, { useState } from "react";
import { Modal } from "../modal/Modal";

const OnSiteSupportModal = ({
  showOnsiteSupportModal,
  setShowOnsiteSupportModal,
}: any) => {
  return (
    <div>
      <Modal.Frame
        open={showOnsiteSupportModal}
        onClose={() => {
          setShowOnsiteSupportModal(!showOnsiteSupportModal);
        }}
      >
        <>
          <Modal.Head>
            <>
              <h2 className="text-2xl">Onsite Support</h2>
            </>
          </Modal.Head>

          <Modal.Body>
            <>
              <div className="grid grid-cols-12 gap-4 gap-y-5 mt-5 p-5">
                <div className="intro-y col-span-12 md:col-span-6">
                  <label
                    htmlFor="input-wizard-1"
                    className="form-label text-slate-700"
                  >
                    Company Name
                  </label>
                  <input className="form-control p-2 border outline-none" />
                </div>
                <div className="intro-y col-span-12 md:col-span-6">
                  <label
                    htmlFor="input-wizard-1"
                    className="form-label text-slate-700"
                  >
                    Contact Person
                  </label>
                  <input className="form-control p-2 border outline-none" />
                </div>
                <div className="intro-y col-span-12 md:col-span-6">
                  <label
                    htmlFor="input-wizard-1"
                    className="form-label text-slate-700"
                  >
                    Tax ID Number
                  </label>
                  <input className="form-control p-2 border outline-none" />
                </div>
                <div className="intro-y col-span-12 md:col-span-6">
                  <label
                    htmlFor="input-wizard-1"
                    className="form-label text-slate-700"
                  >
                    Drivers license
                  </label>
                  <input className="form-control p-2 border outline-none" />
                </div>
                <div className="intro-y col-span-12 md:col-span-6">
                  <label
                    htmlFor="input-wizard-1"
                    className="form-label text-slate-700"
                  >
                    Bank or voided check
                  </label>
                  <input className="form-control p-2 border outline-none" />
                </div>
                {/* <div className="intro-y col-span-6 sm:col-span-6">
                  <label htmlFor="input-wizard-1" className="form-label">
                    Employee Name
                  </label>
                  <select className="form-select col-span-3">
                    <option value="">jeph</option>
                  </select>
                </div> */}
              </div>
              <div className="px-5 mt-5 mb-5 text-center">
                <button className="btn btn-primary w-24 ml-2">Submit</button>
                <button className="btn btn-secondary w-24 ml-2">Cancel</button>
              </div>
            </>
          </Modal.Body>
        </>
      </Modal.Frame>
    </div>
  );
};

export default OnSiteSupportModal;
