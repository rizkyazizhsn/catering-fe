import Logo from "@/assets/images/logo.svg"
import FlagID from "@/assets/images/flag-id.svg"
import Image from "next/image"

export default function Home() {
  return <>
    <header className="flex items-center justify-between px-4">
        <span className="flex gap-x-2 items-center">
          <span className="text-color1">
            <Image src={Logo} alt="logo" />
          </span>
          <span className="font-bold text-2xl">Katerina</span>
        </span>
        <span className="relative">
          <button
            className="flex gap-x-2 border border-gray1 rounded-full py-1 px-2"
          >
            <Image src={FlagID} alt="flag-id" />
            <span className="">IDN</span>
          </button>
        </span>
      </header>
  </>
}
