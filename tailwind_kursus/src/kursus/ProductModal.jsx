import React from "react";

function ProductModal() {
  return (
    <div>
      {/* Global container */}
      <div className="flex items-center justify-center min-h-screen bg-slate-100">
        {/* Card Container */}
        <div className="flex flex-col p-6 m-3 space-y-10 bg-white rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
          {/* image div */}
          <div className="">
            <img
              src="https://source.unsplash.com/black-and-silver-headphones-on-white-surface-LSNJ-pltdu8"
              className="mx-auto hover:scale-105 duration-200 w-60"
            />
          </div>
          {/* content div*/}
          <div className="flex flex-col space-y-6">
            {/* label here and desc */}
            <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
              <div className="">
                <div className="inline-block px-3 py-1 text-sm text-white bg-black rounded-full ">
                  Free shipping
                </div>
              </div>

              {/* Title */}
              <div className="max-w-sm text-2xl font-medium">
                Lorem ipsum dolor sit amet consectetur.
              </div>

              {/* price container */}
              <div className="flex flex-col mb-4 space-y-3 text-center md:text-left">
                <p className="line-through">$565</p>
                <p className="text-5xl font-bold">$234</p>
                <p className="text-sm font-light text-gray-400">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem, eos?
                </p>
              </div>
              {/* button group */}
              <div className="group">
                <button className="w-full bg-blue-700 text-white border-b-8 border-blue-700 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-700 group-hover:border-t-blue-700 group-hover:shadow-lg duration-200">
                  <div className="px-8 py-4 bg-blue-500 rounded-lg group-hover:bg-blue-600 duration-150">
                    Add to chart
                  </div>
                </button>
              </div>

              {/* stock    */}
              <div className="flex items-center space-x-3 group">
                <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping"></div>
                <div className="text-sm">50+ pcs ins Stock</div>
              </div>
              {/* bottom button container */}
              <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row ">
                <button className="flex items-center justify-center py-3 space-x-3 border-2 border-gray-200 rounded-lg hover:bg-opacity-30 duration-200 shadow-sm hover:shadow-xl hover:-translate-y-0.5 translation-all  ">
                  <img
                    src="https://source.unsplash.com/black-and-silver-headphones-on-white-surface-LSNJ-pltdu8"
                    alt=""
                    className="w-8"
                  />
                  <span>Add to chart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;
