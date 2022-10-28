import { useState } from "react";

const Payment = () => {
  const [tried, setTried] = useState(false);
  const [ic, setIc] = useState(true);
  const onchangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "tried") {
      setTried(true);
    } else {
      setTried(false);
    }
    if (e.target.value === "ic") {
      setIc(true);
    } else {
      setIc(false);
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
                <option value="tried">Tiered</option>
                <option value="ic">ic 0.10</option>
                <option value="ic">ic 0.20</option>
                <option value="ic">ic 0.30</option>
                <option value="flat">flat</option>
              </select>
            </div>
            <div />
            {ic ? (
              <>
                <div className="">
                  <label htmlFor="input-wizard-1" className="form-label">
                    Visa card present Rate
                  </label>
                  <input type="text" className="form-control"></input>
                </div>
                <div className="">
                  <label htmlFor="input-wizard-1" className="form-label">
                    Visa card not present Rate
                  </label>
                  <input type="text" className="form-control"></input>
                </div>

                <div className="">
                  <label htmlFor="input-wizard-1" className="form-label">
                    Amex card not present Rate
                  </label>
                  <input type="text" className="form-control"></input>
                </div>

                <div className="">
                  <label htmlFor="input-wizard-1" className="form-label">
                    Amex card not present Rate
                  </label>
                  <input type="text" className="form-control"></input>
                </div>

                <div className="">
                  <label htmlFor="input-wizard-1" className="form-label">
                    Visa card present trans Fee
                  </label>
                  <input type="text" className="form-control"></input>
                </div>
                <div className="">
                  <label htmlFor="input-wizard-1" className="form-label">
                    Visa card not present Fee
                  </label>
                  <input type="text" className="form-control"></input>
                </div>
                <div className="">
                  <label htmlFor="input-wizard-1" className="form-label">
                    Amex card not present Fee
                  </label>
                  <input type="text" className="form-control"></input>
                </div>
                <div className="">
                  <label htmlFor="input-wizard-1" className="form-label">
                    Amex card not present Fee
                  </label>
                  <input type="text" className="form-control"></input>
                </div>
              </>
            ) : null}

            {tried ? (
              <>
                <div className="">
                  <label htmlFor="input-wizard-1" className="form-label">
                    Qualified
                  </label>
                  <input type="text" className="form-control"></input>
                </div>
                <div className="">
                  <label htmlFor="input-wizard-1" className="form-label">
                    Non qualified
                  </label>
                  <input type="text" className="form-control"></input>
                </div>
              </>
            ) : null}
            <button className="btn btn-primary w-40">Submit</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
