
import { FaFacebookSquare } from "react-icons/fa";

function LoginModal() {
  return (
    <>
      {/* globalcontainer */}
      <div className="flex items-center justify-center min-h-screen bg-rose-50">
        {/* card container */}
        <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0">
          {/* left side */}
          <div className="p-6 md:p-20">
            <h2 className="font-mono mb-5 text-4xl font-bold">Log in</h2>
            <p className="max-w-sm mb-12 font-sans font-light text-gra-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum
              est mollitia ab fuga minima obcaecati porro facere harum
              recusandae? Blanditiis?
            </p>

            <input
              type="text"
              className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light placeholder:text-gray-500"
              placeholder="Enter your email address"
            />

            {/* middle content */}
            <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
              <div className="font-thin text-cyan-700">Forgot password</div>
              <button className="w-full md:w-auto flex justify-center items-center p-6 space-x-4 font-sans font-bold text-slate-50 rounded-md px-9 bg-cyan-700 shadow-cyan-100 hover:bg-opacity-90 shadow-sm hover:shadow-lg-cyan-100 border duration-150 hover:-tranlate-y-0.5  ">
                <span>Next</span>
              </button>
            </div>
            {/* border */}
            <div className="mt-12 border-b border-b-gray-300"></div>
            {/* bottom content */}
            <p className="py-6 text-sm font-thin text-center text-gray-400">
              or login with
            </p>
            {/* bottom button container */}
            <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0 justify-between">
              {/* facebook button */}
             <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg duration-150">
             <FaFacebookSquare className="w-9" />
              <span className="font-thin pr-6">Facebook</span>
             </button>
             <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg duration-150">
             <FaFacebookSquare className="w-9" />
              <span className="font-thin pr-6">Facebook</span>
             </button>
            </div>
          </div>
          {/* rigth side */}
        </div>
      </div>
    </>
  );
}

export default LoginModal;



