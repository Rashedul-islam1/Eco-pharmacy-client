"use client";

export default function ErrorPage({ error, reset }: any) {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="">
        <p className="text-3xl text-center font-semibold text-primary">400</p>

        <h1 className="mt-2 text-xl text-center font-bold tracking-tight text-gray-900 md:text-3xl">
          Something went wrong!
        </h1>

        <div className="flex justify-center mt-3">
          {" "}
          <button
            onClick={() => reset()}
            className="text-white  hover:bg-primary bg-primary/70 duration-300 px-3 py-1"
          >
            Try again
          </button>
        </div>
      </div>
    </div>
  );
}
