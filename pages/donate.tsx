import Image from "next/image";

export default function Donate() {
  return (
    <div>
      <Image
        className="w-screen"
        src={"/images/asset5.png"}
        alt=""
        loading="lazy"
        width="0"
        height="0"
        sizes="100vw"
      />
      <div className="mt-10 px-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col space-y-2 text-2xl font-bold text-gray-500 ">
            <span>Select Amount</span>
            <span className="text-sm text-gray-400">
              Make sure to check targeted amount
            </span>
          </div>
          <span className="mb-5 rounded-full bg-[#74e9e3] px-3 py-1 text-sm font-bold text-white">
            Other
          </span>
        </div>
        <div className="my-6 flex justify-between">
          <div className="rounded-full bg-[#b283ed] bg-opacity-60 p-2">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#b283ed] p-6 text-xl font-bold text-white">
              $10
            </span>
          </div>
          <div className="rounded-full bg-[#b283ed] bg-opacity-60 p-2">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#b283ed] p-6 text-xl font-bold text-white">
              $20
            </span>
          </div>
          <div className="rounded-full bg-[#b283ed] bg-opacity-60 p-2">
            <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#b283ed] p-6 text-xl font-bold text-white">
              $30
            </span>
          </div>
        </div>
        <span className="text-xl font-bold text-gray-600">
          Select Payment Metod
        </span>
        <div className="mt-5 flex justify-between">
          <div className="flex items-center justify-between  space-x-3 rounded-3xl border border-green-400 py-4 px-5">
            <div className="h-7 w-9 rounded-md bg-slate-800" />
            <div className="flex flex-col text-3xl  text-gray-500">
              <span>PAY1</span>
              <span className="text-sm font-normal text-gray-400">
                max $5000
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between  space-x-3 rounded-3xl border border-green-400 py-4 px-5">
            <div className="h-7 w-9 rounded-md bg-slate-800" />
            <div className="flex flex-col text-3xl  text-gray-500">
              <span>Card</span>
              <span className="text-sm font-normal text-gray-400">
                dradit/debit
              </span>
            </div>
          </div>
        </div>
        <div className="mt-20 flex justify-center">
          <button className="w-full rounded-full bg-[#b283ed] py-4 text-xl font-bold text-white">
            SEND DONATION
          </button>
        </div>
      </div>
    </div>
  );
}
