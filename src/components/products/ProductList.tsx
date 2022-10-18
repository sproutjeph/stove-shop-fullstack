import React from "react";
import { ProductData } from "../../utils/data";
const ProductList = () => {
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
                <th className="text-center whitespace-nowrap">Price</th>
                <th className="text-center whitespace-nowrap">Add Product</th>
              </tr>
            </thead>
            <tbody>
              {ProductData.map((product, index) => (
                <tr key={product.PartNumber + index} className="intro-x">
                  <td className="">
                    <button className="font-medium whitespace-nowrap">
                      {product.productName}
                    </button>
                  </td>
                  <td className="text-center">{product.productId}</td>
                  <td className="text-center ">{product.PartNumber}</td>
                  <td className="text-center ">{product.productPrice}</td>
                  <td className="text-center ">item_price</td>

                  <td className="">
                    <div className="justify-center form-check form-switch">
                      <input
                        id="product-status-active"
                        className="form-check-input"
                        type="checkbox"
                        checked={false}
                        // onChange={(e) => {
                        //   console.log(e.target.checked);
                        //   onActiveChange(e, menuItem);
                        // }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProductList;
