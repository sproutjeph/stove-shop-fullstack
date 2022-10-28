import React, { useState } from "react";
import { Modal } from "../modal/Modal";
import counterTopKit from "@/assets/images/counter-top-kit.jpg";

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
              <div className="grid md:grid-cols-2 gap-8 md:gap-20">
                <div className="">
                  <img src={counterTopKit} alt="" className="rounded-md" />
                </div>
                <div className="">
                  <h2 className="text-2xl text-primary">Support 1</h2>

                  <p className="text-sm text-gray-500 mt-2 max-w-md">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Harum nisi aperiam possimus mollitia incidunt, excepturi
                    dolor facilis reiciendis asperiores eos?
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    Dimensions: 7.5" x 4" x .0.8 - 2"
                  </p>
                  <h4 className="text-warning text-lg mt-2">
                    $100 + $50 <span className="text-sm">/mon</span>{" "}
                  </h4>
                </div>
              </div>
              <div className="px-5 mt-5 mb-5 text-center">
                <button
                  className="btn btn-secondary w-24 ml-2 "
                  onClick={() => setShowOnsiteSupportModal(false)}
                >
                  Close
                </button>
              </div>
            </>
          </Modal.Body>
        </>
      </Modal.Frame>
    </div>
  );
};

export default OnSiteSupportModal;
