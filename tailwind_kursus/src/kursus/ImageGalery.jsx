import React from "react";

function ImageGalery() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cyan-50">
      {/* card container */}
      <div className="bg-white p-6 m-3 space-y-10 shadow-2xl rounded-3xl md:p-40">
        {/* menu container */}
        <div className="flex flex-col items-center justify-center space-y-3 md:flex-row md:space-y-0 md:space-x-8 md:mb-24 md:justify-end">
          {/* menu items */}
          <div className="group">
            <a href="">Vector</a>
            <div className="mx-2 mt-2duration-500 border-b-2 opacity-0 bg-black group-hover:opacity-100 "></div>
          </div>
          <div className="group">
            <a href="">Illustrations</a>
            <div className="mx-2 mt-2duration-500 border-b-2 opacity-0 bg-black group-hover:opacity-100 "></div>
          </div>{" "}
          <div className="group">
            <a href="">Images</a>
            <div className="mx-2 mt-2duration-500 border-b-2 opacity-0 bg-black group-hover:opacity-100 "></div>
          </div>{" "}
          <div className="group">
            <a href="">Icons</a>
            <div className="mx-2 mt-2duration-500 border-b-2 opacity-0 bg-black group-hover:opacity-100 "></div>
          </div>
        </div>
        {/* seacrh container */}
        <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
          {/* input and SVG container */}
          <div className="flex justify-between border-b">
            <input
              type="text"
              className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none "
              placeholder="Search images..."
            />
            <button>Search</button>
          </div>

          {/* upload button */}

          <button className="p-3 px-14 text-lg font-normal text-white bg-black border border-black rounded-md shadow-2xl duration-200 hover:bg-white hover:text-black">
            Upload
          </button>
        </div>

        {/* galllery */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="relative group">
            <img
              src="https://source.unsplash.com/black-and-silver-headphones-on-white-surface-LSNJ-pltdu8"
              alt=""
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract</p>
                  <p className="text-xs">243 Likes -35 Shares</p>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://source.unsplash.com/black-and-silver-headphones-on-white-surface-LSNJ-pltdu8"
                    alt="bookmark"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* image 2 */}
          <div className="relative group">
            <img
              src="https://source.unsplash.com/black-and-silver-headphones-on-white-surface-LSNJ-pltdu8"
              alt=""
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract</p>
                  <p className="text-xs">243 Likes -35 Shares</p>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://source.unsplash.com/black-and-silver-headphones-on-white-surface-LSNJ-pltdu8"
                    alt="bookmark"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* image 3 */}
          <div className="relative group">
            <img
              src="https://source.unsplash.com/black-and-silver-headphones-on-white-surface-LSNJ-pltdu8"
              alt=""
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract</p>
                  <p className="text-xs">243 Likes -35 Shares</p>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://source.unsplash.com/black-and-silver-headphones-on-white-surface-LSNJ-pltdu8"
                    alt="bookmark"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* image 4 */}
          <div className="relative group">
            <img
              src="https://source.unsplash.com/black-and-silver-headphones-on-white-surface-LSNJ-pltdu8"
              alt=""
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract</p>
                  <p className="text-xs">243 Likes -35 Shares</p>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://source.unsplash.com/black-and-silver-headphones-on-white-surface-LSNJ-pltdu8"
                    alt="bookmark"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* image5 */}
          <div className="relative group">
            <img
              src="https://source.unsplash.com/black-and-silver-headphones-on-white-surface-LSNJ-pltdu8"
              alt=""
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40">
              <div className="flex justify-between w-full">
                <div className="font-normal">
                  <p className="text-sm">Abstract</p>
                  <p className="text-xs">243 Likes -35 Shares</p>
                </div>
                <div className="flex items-center">
                  <img
                    src="https://source.unsplash.com/black-and-silver-headphones-on-white-surface-LSNJ-pltdu8"
                    alt="bookmark"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGalery;
