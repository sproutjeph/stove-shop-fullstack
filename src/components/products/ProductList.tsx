import { useSearchParams } from "react-router-dom";
import { ProductData } from "../../utils/data";
import { useNavigate } from "react-router-dom";
import {
  ChevronLeftIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const ProductList = () => {
  const navigateTo = useNavigate();
  const [params, setParams] = useSearchParams();
  // console.log(params.get("productId"));

  return (
    <section className="h-screen" id="product">
      <div className="">
        <h2 className="text-4xl text-center text-primary tracking-wider">
          Products
        </h2>
      </div>
      <div className="px-4 md:px-8 grid grid-cols-12 gap-6 mt-5 ">
        <div className="intro-y col-span-12 overflow-auto lg:overflow-visible mb-8">
          <table className=" table table-report -mt-2">
            <thead>
              <tr>
                <th className=" whitespace-nowrap">Product NAME</th>
                <th className="text-center whitespace-nowrap">Product ID</th>
                <th className="text-center whitespace-nowrap">Part Number</th>
                <th className="text-center whitespace-nowrap">Product Price</th>
                <th className="text-center whitespace-nowrap">
                  Default Currency
                </th>
                <th className="text-center whitespace-nowrap">QTY</th>
                <th className="text-center whitespace-nowrap">Add Product</th>
              </tr>
            </thead>
            <tbody>
              {ProductData.map((product, index) => (
                <tr key={product.PartNumber + index} className="intro-x">
                  <td className="">
                    <button
                      className="font-medium whitespace-nowrap"
                      onClick={() => {
                        setParams({
                          ...params,
                          productId: `${product.productId}`,
                        });
                        navigateTo("/product-details");
                      }}
                    >
                      {product.productName}
                    </button>
                  </td>
                  <td className="text-center">{product.productId}</td>
                  <td className="text-center ">{product.PartNumber}</td>
                  <td className="text-center ">{product.productPrice}</td>
                  <td className="text-center ">USD</td>

                  <td className="text-center">
                    <input
                      id=""
                      className="form-control outline-none w-20"
                      type="number"
                      step={1}
                      min={1}
                      onChange={(e: any) => {
                        // console.log(e.target.checked);
                      }}
                    />
                  </td>
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
      <div className="flex flex-wrap items-center col-span-12 intro-y sm:flex-row sm:flex-nowrap px-8">
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
  );
};

export default ProductList;
