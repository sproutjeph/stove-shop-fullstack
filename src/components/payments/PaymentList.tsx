import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
const paymentData = [
  { id: "1", payment: "payment-1", info: "info", text: "text" },
  { id: "2", payment: "payment-2", info: "info", text: "text" },
  { id: "3", payment: "payment-3", info: "info", text: "text" },
  { id: "4", payment: "payment-4", info: "info", text: "text" },
  { id: "5", payment: "payment-5", info: "info", text: "text" },
  { id: "6", payment: "payment-6", info: "info", text: "text" },
  { id: "7", payment: "payment-7", info: "info", text: "text" },
];

const PaymentList = () => {
  return (
    <>
      <section className="" id="payment">
        <div className="">
          <h2 className="text-4xl text-center text-primary tracking-wide">
            Payments
          </h2>
        </div>
        <div className="px-4 md:px-8 grid grid-cols-12 gap-6 mt-2 md:mt-0 ">
          <div className="intro-y col-span-12 overflow-auto lg:overflow-visible">
            <table className=" table table-report -mt-2">
              <thead>
                <tr>
                  <th className=" whitespace-nowrap">Payments</th>
                  <th className="text-center whitespace-nowrap">Visa card </th>
                  <th className="text-center whitespace-nowrap">Amex card</th>
                  <th className="text-center whitespace-nowrap">Rate</th>

                  <th className="text-center whitespace-nowrap">Active</th>
                </tr>
              </thead>
              <tbody>
                {paymentData.map((payment, index) => (
                  <tr key={payment.id + index} className="intro-x">
                    <td className="">
                      <button
                        className="font-medium whitespace-nowrap"
                        // onClick={() => setShowOnsiteSupportModal(true)}
                      >
                        {payment.payment}
                      </button>
                    </td>

                    <td className="text-center ">
                      <select name="" id="" className="form-control w-40">
                        <option value="">Present</option>
                        <option value="">Not Present</option>
                      </select>
                    </td>
                    <td className="text-center ">
                      <select name="" id="" className="form-control w-40">
                        <option value="">Present</option>
                        <option value="">Not Present</option>
                      </select>
                    </td>
                    <td className="text-center ">5</td>

                    <td className="">
                      <div className="justify-center form-check form-switch">
                        <input
                          id="product-status-active"
                          className="check-box"
                          type="checkbox"
                          onChange={(e: any) => {
                            console.log(e.target.checked);
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

export default PaymentList;
