import { useState } from "react";

interface IValues {
  tiered: { qualified: number; nonQualified: number; isSelected: boolean };
  ic020: { rate: number; fees: number; isSelected: boolean };
  ic030: { rate: number; fees: number; isSelected: boolean };
}

const Payment = () => {
  const [values, setValues] = useState<IValues>({
    tiered: { qualified: 2.6, nonQualified: 2.6, isSelected: false },
    ic020: { rate: 0.2, fees: 0.1, isSelected: true },
    ic030: { rate: 0.3, fees: 0.0, isSelected: false },
  });

  const onchangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.id);

    if (e.target.value === "tiered") {
      setValues({
        ...values,
        ic020: { ...values.ic020, isSelected: false },
        ic030: { ...values.ic030, isSelected: false },
        tiered: { ...values.tiered, isSelected: true },
      });
    }
    if (e.target.value === "ic020") {
      setValues({
        ...values,
        tiered: { ...values.tiered, isSelected: false },
        ic030: { ...values.ic030, isSelected: false },
        ic020: { ...values.ic020, isSelected: true },
      });
    }
    if (e.target.value === "ic030") {
      setValues({
        ...values,
        ic020: { ...values.ic020, isSelected: false },
        tiered: { ...values.tiered, isSelected: false },
        ic030: { ...values.ic030, isSelected: true },
      });
    }
  };
  return (
    <>
      <section className="" id="payment">
        <div className="px-6">
          <h2 className="text-4xl text-center text-primary tracking-wide">
            Payments
          </h2>

          <div className="bg-white md:p-10 md:gap-y-6 md:gap-x-10  p-4 my-4 rounded-md grid md:grid-cols-2 gap-4 mt-4">
            <div className="">
              <label htmlFor="input-wizard-1" className="form-label">
                Payment processing Type
              </label>
              <select
                name=""
                id=""
                className="form-control"
                onChange={(e) => onchangeHandler(e)}
              >
                <option value="flat" id="flat">
                  Flat Rate
                </option>
                <option value="tiered">Tiered</option>
                <option value="ic020">Ic+ .20/10trans</option>
                <option value="ic030">Ic 0.30/0trans</option>
                <option value="icplus">Ic Plus</option>
                <option value="iccustom">Custom</option>
                {/* <option value={values.value}>Custom</option> */}
              </select>
            </div>
            <div />
            {values.ic020.isSelected || values.ic030.isSelected ? (
              <>
                <div className="">
                  <label htmlFor="input-wizard-1" className="form-label">
                    Visa card present Rate
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={
                      values.ic020.isSelected
                        ? values.ic020.rate
                        : values.ic030.rate
                    }
                    readOnly
                  />
                </div>
                <div className="">
                  <label htmlFor="input-wizard-1" className="form-label">
                    Visa card not present Rate
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={
                      values.ic020.isSelected
                        ? values.ic020.rate
                        : values.ic030.rate
                    }
                    readOnly
                  />
                </div>

                <div className="">
                  <label htmlFor="input-wizard-1" className="form-label">
                    Amex card not present Rate
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={
                      values.ic020.isSelected
                        ? values.ic020.rate
                        : values.ic030.rate
                    }
                    readOnly
                  />
                </div>

                <div className="">
                  <label htmlFor="input-wizard-1" className="form-label">
                    Amex card not present Rate
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={
                      values.ic020.isSelected
                        ? values.ic020.rate
                        : values.ic030.rate
                    }
                    readOnly
                  />
                </div>

                <div className="">
                  <label htmlFor="input-wizard-1" className="form-label">
                    Visa card present Fee
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={
                      values.ic020.isSelected
                        ? values.ic020.fees
                        : values.ic030.fees
                    }
                    readOnly
                  />
                </div>
                <div className="">
                  <label htmlFor="input-wizard-1" className="form-label">
                    Visa card not present Fee
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={
                      values.ic020.isSelected
                        ? values.ic020.fees
                        : values.ic030.fees
                    }
                    readOnly
                  />
                </div>
                <div className="">
                  <label htmlFor="input-wizard-1" className="form-label">
                    Amex card not present Fee
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={
                      values.ic020.isSelected
                        ? values.ic020.fees
                        : values.ic030.fees
                    }
                    readOnly
                  />
                </div>
                <div className="">
                  <label htmlFor="input-wizard-1" className="form-label">
                    Amex card not present Fee
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={
                      values.ic020.isSelected
                        ? values.ic020.fees
                        : values.ic030.fees
                    }
                    readOnly
                  />
                </div>
              </>
            ) : null}

            {values.tiered.isSelected ? (
              <>
                <div className="">
                  <label htmlFor="input-wizard-1" className="form-label">
                    Qualified
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={values.tiered.qualified}
                    readOnly
                  />
                </div>
                <div className="">
                  <label htmlFor="input-wizard-1" className="form-label">
                    Non qualified
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    value={values.tiered.nonQualified}
                    readOnly
                  />
                </div>
              </>
            ) : null}
            <button className="btn btn-primary w-40">Next</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
