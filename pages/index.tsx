import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [user, setUser] = useState<string>();
  const [password, setPassword] = useState<string>();
  const router = useRouter();
  return (
    <div>
      <div>
        <Image
          className="absolute inset-x-0 top-0 -z-10 w-screen"
          src={"/images/asset1.png"}
          alt=""
          loading="lazy"
          width="0"
          height="0"
          sizes="100vw"
        />
        <div className="flex justify-center">
          <div className="mt-28 flex h-36 w-36 flex-col items-center justify-center rounded-full bg-white text-4xl font-bold text-[#74e9e3]">
            <span>LO</span>
            <span>GO</span>
          </div>
        </div>
      </div>
      <div className="mt-60 flex flex-col justify-center space-y-6 px-6">
        <input
          className="rounded-full border border-[#b283ed] px-16 py-3 text-center"
          placeholder="Username / Email"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          className="rounded-full border border-[#b283ed] px-16 py-3 text-center"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="mt-3 flex justify-center space-x-3 text-sm font-bold">
        <span className="text-[#74e9e3]">Dont Have an Account?</span>
        <Link className="text-[#b283ed]" href={"#"}>
          Sign Up
        </Link>
      </div>
      <div className="mt-20 flex justify-center px-6">
        <button
          onClick={() => router.push("/home")}
          className="w-full rounded-full border border-[#b283ed] bg-white py-3 text-xl font-bold text-[#b283ed]"
        >
          Log In
        </button>
      </div>
    </div>
  );
}
