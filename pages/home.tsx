import Image from "next/image";
import { useRouter } from "next/router";

export default function Home() {
    const router = useRouter()
  return (
    <div>
      <Image
        className="w-screen"
        src={"/images/asset2.png"}
        alt=""
        loading="lazy"
        width="0"
        height="0"
        sizes="100vw"
      />
      <div className="px-6">
        <div className="mt-10 flex flex-col font-bold text-gray-500">
          <span className="text-2xl">Campaign Name</span>
          <span>Orginalzation</span>
        </div>
        <div className="mt-8 mb-5 flex justify-between">
          <div className="flex  space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="20"
              height="20"
              viewBox="0 0 256 256"
              className="mt-1"
            >
              <defs></defs>
              <g
                className="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
                transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
              >
                <path
                  d="M 33.189 42.211 H 9.022 C 4.047 42.211 0 38.164 0 33.189 V 9.022 C 0 4.047 4.047 0 9.022 0 h 24.167 c 4.975 0 9.022 4.047 9.022 9.022 v 24.167 C 42.211 38.164 38.164 42.211 33.189 42.211 z M 9.022 8 C 8.458 8 8 8.458 8 9.022 v 24.167 c 0 0.563 0.458 1.022 1.022 1.022 h 24.167 c 0.563 0 1.022 -0.458 1.022 -1.022 V 9.022 C 34.211 8.458 33.752 8 33.189 8 H 9.022 z"
                  className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
                <path
                  d="M 80.979 42.211 H 56.811 c -4.975 0 -9.021 -4.047 -9.021 -9.022 V 9.022 C 47.789 4.047 51.836 0 56.811 0 h 24.168 C 85.953 0 90 4.047 90 9.022 v 24.167 C 90 38.164 85.953 42.211 80.979 42.211 z M 56.811 8 c -0.563 0 -1.021 0.458 -1.021 1.022 v 24.167 c 0 0.563 0.458 1.022 1.021 1.022 h 24.168 c 0.563 0 1.021 -0.458 1.021 -1.022 V 9.022 C 82 8.458 81.542 8 80.979 8 H 56.811 z"
                  className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
                <path
                  d="M 33.189 90 H 9.022 C 4.047 90 0 85.953 0 80.979 V 56.811 c 0 -4.975 4.047 -9.021 9.022 -9.021 h 24.167 c 4.975 0 9.022 4.047 9.022 9.021 v 24.168 C 42.211 85.953 38.164 90 33.189 90 z M 9.022 55.789 C 8.458 55.789 8 56.247 8 56.811 v 24.168 C 8 81.542 8.458 82 9.022 82 h 24.167 c 0.563 0 1.022 -0.458 1.022 -1.021 V 56.811 c 0 -0.563 -0.458 -1.021 -1.022 -1.021 H 9.022 z"
                  className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
                <path
                  d="M 80.979 90 H 56.811 c -4.975 0 -9.021 -4.047 -9.021 -9.021 V 56.811 c 0 -4.975 4.047 -9.021 9.021 -9.021 h 24.168 c 4.975 0 9.021 4.047 9.021 9.021 v 24.168 C 90 85.953 85.953 90 80.979 90 z M 56.811 55.789 c -0.563 0 -1.021 0.458 -1.021 1.021 v 24.168 c 0 0.563 0.458 1.021 1.021 1.021 h 24.168 C 81.542 82 82 81.542 82 80.979 V 56.811 c 0 -0.563 -0.458 -1.021 -1.021 -1.021 H 56.811 z"
                  className="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
                  transform=" matrix(1 0 0 1 0 0) "
                  stroke-linecap="round"
                />
              </g>
            </svg>
            <div className="flex flex-col font-bold ">
              <span className="text-sm text-gray-400">Categorie</span>
              <span className="text-[#74e9e3]">Nature</span>
            </div>
          </div>
          <div className="flex  space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>

            <div className="flex flex-col font-bold ">
              <span className="text-sm text-gray-400">Days Left</span>
              <span className="text-[#74e9e3]">24</span>
            </div>
          </div>
          <div className="flex  space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 border border-black p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>

            <div className="flex flex-col font-bold ">
              <span className="text-sm text-gray-400">Donations</span>
              <span className="text-[#74e9e3]">62</span>
            </div>
          </div>
        </div>
        <span className="text-sm font-bold text-gray-400 ">Gallery</span>
        <div className="mt-4 mb-5 flex justify-between">
          <Image
            className="w-16"
            src={"/images/asset3.png"}
            alt=""
            loading="lazy"
            width="0"
            height="0"
            sizes="100vw"
          />
          <Image
            className="w-16"
            src={"/images/asset4.png"}
            alt=""
            loading="lazy"
            width="0"
            height="0"
            sizes="100vw"
          />
          <Image
            className="w-16"
            src={"/images/asset3.png"}
            alt=""
            loading="lazy"
            width="0"
            height="0"
            sizes="100vw"
          />
          <Image
            className="w-16"
            src={"/images/asset4.png"}
            alt=""
            loading="lazy"
            width="0"
            height="0"
            sizes="100vw"
          />
        </div>
        <span className="font-bold text-[#b283ed]">Lorem Ipsun</span>
        <p className="mt-2 text-justify text-sm text-gray-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
          necessitatibus quas mollitia optio molestiae eius nemo quaerat fugiat
          nobis facilis, non id, soluta modi voluptates. Unde quibusdam ipsa
          quae magni? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Eum necessitatibus quas mollitia optio molestiae eius nemo quaerat
          fugiat
        </p>
        <div className="flex justify-center mt-5">
          <button onClick={() => router.push("/donate")} className="bg-[#b283ed] w-full rounded-full py-3 text-white font-bold text-xl">DONATE</button>
        </div>
      </div>
    </div>
  );
}
