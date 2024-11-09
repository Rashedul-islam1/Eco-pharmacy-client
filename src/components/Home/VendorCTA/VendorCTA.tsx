import Image from "next/image";
import VendorCTAImage from "../../../../public/images/VendorCTA.png";
const VendorCTA = () => {
  return (
    <>
      <section>
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl  lg:px-8 lg:pt-20">
          <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-display text-3xl font-semibold tracking-wide text-gray-900 sm:text-4xl sm:leading-tight ">
                  Add your local pharmacy online
                  <span className="relative pl-1 inline-block text-primary">
                    NOW
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae. explicabo.
                </p>
              </div>
              <p className="mb-4 text-sm font-semibold tracking-widest uppercase text-teal-700 font-sans">
                Features
              </p>
              <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0 text-gray-800">
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-primary"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        ></polygon>
                      </svg>
                    </span>
                    Take user orders form online
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-primary"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        ></polygon>
                      </svg>
                    </span>
                    Create your shop profile
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-primary"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        ></polygon>
                      </svg>
                    </span>
                    Manage your store
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-primary"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        ></polygon>
                      </svg>
                    </span>
                    Get more orders
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-primary"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        ></polygon>
                      </svg>
                    </span>
                    Storage shed
                  </li>
                  <li className="flex">
                    <span className="mr-1">
                      <svg
                        className="w-5 h-5 mt-px text-primary"
                        stroke="currentColor"
                        viewBox="0 0 52 52"
                      >
                        <polygon
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          points="29 13 14 29 25 29 23 39 38 23 27 23"
                        ></polygon>
                      </svg>
                    </span>
                    Satoshi Nakamoto
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <Image
                width={1200}
                height={100}
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={VendorCTAImage}
                alt="admin-panel"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="px-0 py-12 mx-auto max-w-7xl sm:px-4 mt-10">
        <div className="text-white bg-primary border-teal-400 rounded-none card card-body sm:rounded-lg">
          <div className="flex flex-col items-center justify-between px-2 py-4 lg:flex-row sm:py-8 sm:px-4">
            <p className="mb-6 text-lg lg:text-xl font-sans font-medium lg:mb-0 text-white tracking-wide">
              Open your local pharmacy turn into online store and increase your
              sells. It is totally free!
            </p>
            <button className="flex py-2 px-6 rounded shadow-3xl bg-teal-50 focus:outline-none active:bg-teal-400 text-primary/90 font-medium transition duration-150 ease-in-out hover:bg-teal-100 hover:text-teal-800">
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              Create a new Store
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default VendorCTA;
