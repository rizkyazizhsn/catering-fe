import Logo from "@/assets/images/logo.svg";
import FlagID from "@/assets/images/flag-id.svg";
import Image from "next/image";
import Slider from "@/components/Slider";
import Categories from "@/components/Categories";

export default function Home() {
  return (
    <>
      <header className="flex items-center justify-between px-4">
        <span className="flex gap-x-2 items-center">
          <span className="text-color1">
            <Image src={Logo} alt="logo" />
          </span>
          <span className="font-bold text-2xl">Catering</span>
        </span>
        <span className="relative">
          <button className="flex gap-x-2 border border-gray1 rounded-full py-1 px-2">
            <Image src={FlagID} alt="flag-id" />
            <span className="">IDN</span>
          </button>
        </span>
      </header>

      <section className="relative">
        <Slider
          spaceBetween={20}
          swiperClassName="!h-[180px] !px-4"
          swiperSlideClassName="!max-w-xs"
        >
          <div className="h-full rounded-3xl overflow-hidden relative border">
            <figure className="w-full h-full absolute">
              <Image
                className="w-full h-full object-cover object-center"
                src="/images/slide1.png"
                alt="slide1"
                width={100}
                height={100}
              />
            </figure>
            <div className="absolute inset-0 bg-gradient-to-r from-black to-black/0"></div>
            <div className="absolute left-0 bottom-0 top-0 pl-4 w-32 flex flex-col justify-center font-bold">
              <span className="text-white">Sale</span>
              <span className="text-color1 text-4xl">50%</span>
              <span className="text-white">Potongan</span>
            </div>
            {/* <a href="details.html" className="absolute inset-0"></a> */}
          </div>

          <div className="h-full rounded-3xl overflow-hidden relative border">
            <figure className="w-full h-full absolute">
              <Image
                className="w-full h-full object-cover object-center"
                src="/images/slide2.png"
                alt="slide1"
                width={100}
                height={100}
              />
            </figure>
            <div className="absolute inset-0 bg-gradient-to-r from-black to-black/0"></div>
            <div className="absolute left-0 bottom-0 top-0 pl-4 w-32 flex flex-col justify-center font-bold">
              <span className="text-white">Sale</span>
              <span className="text-color1 text-4xl">50%</span>
              <span className="text-white">Potongan</span>
            </div>
            {/* <a href="details.html" className="absolute inset-0"></a> */}
          </div>
        </Slider>
      </section>

      <Categories />
    </>
  );
}
