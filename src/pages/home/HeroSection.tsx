import { Link } from "react-router-dom";
import Arrow2 from "../../assets/icons/Arrow2";
import AnimatedCards from "./AnimatedCards";

const HeroSection = () => {
  return (
    <div className="relative flex w-[90%] max-w-[10150px] justify-between gap-x-10 py-20 sm:py-28 xl:w-[80%]">
      <div className="w-full max-w-[530px]">
        <Link
          to=""
          className="group flex w-fit items-center gap-x-2 rounded-full bg-[#f5f5f5] px-3 py-2 text-xs"
        >
          {" "}
          <span className="bg-mono-blue rounded-full px-3 py-1 font-medium text-white">
            NEW
          </span>{" "}
          The Mono Widget 2.0 is Live!{" "}
          <span className="group-hover:translate-x-[0.5]">
            <Arrow2 />
          </span>
        </Link>

        <h1 className="my-7 mr-5 pr-5 text-4xl leading-[1.1] font-semibold sm:mt-12 sm:text-5xl md:pr-0 md:text-6xl md:leading-[1.3] lg:text-7xl">
          Reliably access bank accounts
        </h1>
        <p className="mb-9 max-w-[350px] text-base sm:mb-12 md:max-w-[450px] md:text-xl lg:max-w-[550px] lg:text-2xl">
          Mono helps businesses to access high-quality financial data and direct
          bank payments.
        </p>
        <div className="flex flex-col md:flex-row gapy gap-3">
          <Link
            to="/"
            className="bg-mono-blue group flex h-fit w-fit items-center rounded-xl px-3 py-3 text-sm text-white transition-all duration-300 sm:px-5 sm:py-4"
          >
            Get started for free{" "}
            <span className="group-hover:translate-x-[0.5]">
              <Arrow2 />
            </span>
          </Link>
          <Link
            to="/"
            className="group flex w-fit items-center rounded-xl bg-[#f5f5f5] px-3 py-3 text-sm transition-all duration-300 sm:px-5 sm:py-4"
          >
            Contact sales{" "}
            <span className="group-hover:translate-x-[0.5]">
              <Arrow2 />
            </span>
          </Link>
        </div>
      </div>

      <div className="absolute top-8 -right-32 hidden lg:block">
        <AnimatedCards />
      </div>
    </div>
  );
};

export default HeroSection;
