import React, { useState } from "react";
import { Modal } from "../modal/Modal";

const OnsiteSupportModal = ({
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
            <div className="">
              <div className="text-lg   text-black p-5 max-w-sm">
                Coming soon
              </div>
            </div>
          </Modal.Body>
        </>
      </Modal.Frame>
    </div>
  );
};

export default OnsiteSupportModal;
