import { Link } from "react-router-dom";
import PowerfulApiIcon from "../assets/icons/PowerfulApiIcon";
import ArrowIcon from "../assets/icons/ArrowIcon";
import PlugIcon from "../assets/icons/PlugIcon";
import BeautifulUXIcon from "../assets/icons/BeautifulUXIcon";
import SlackIcon from "../assets/icons/SlackIcon";

const GettingStarted = () => {
  return (
    <div className="flex w-full justify-center bg-[image:url('/getting-started-bg.jpg')] bg-cover bg-center py-38">
      <div className="w-[90%] max-w-[1150px] xl:w-[80%]">
        <h2 className="mb-10 text-2xl font-semibold text-white md:text-4xl lg:mb-20 lg:text-6xl">
          Getting started
        </h2>

        <div className="grid h-fit w-full gap-5 md:grid-cols-3">
          <div className="col-span-3 flex w-full flex-col items-center justify-between gap-x-10 rounded-2xl bg-white px-10 md:px-14 lg:flex-row lg:items-end">
            <div className="flex w-full flex-col items-center py-16 pr-2 text-center lg:max-w-96 lg:items-start lg:py-24 lg:text-start">
              <PowerfulApiIcon />
              <h2 className="my-5 mb-10 text-2xl leading-[1.1] font-bold sm:text-3xl md:text-4xl lg:text-5xl">
                Powerful APIs and easy-to-use resources
              </h2>
              <Link
                to="/docs"
                className="text-mono-blue flex items-center text-sm font-bold sm:text-base"
              >
                Read our API Docs <ArrowIcon />
              </Link>
            </div>

            <div className="flex items-end">
              <img
                className="h-fit w-full max-w-[560px]"
                src="/api-response-frame.png"
                alt="api-response-frame"
              />
            </div>
          </div>

          <div className="col-span-3 flex flex-col items-center rounded-2xl bg-white p-14 py-10 md:col-span-1 md:items-start md:px-14 md:py-16">
            <PlugIcon />

            <h2 className="mt-7 mb-10 text-2xl font-bold lg:text-[30px]">
              Plug-and-play SDKs
            </h2>
            <Link
              to="/"
              className="text-mono-blue flex items-center text-sm font-bold transition-transform duration-300 hover:scale-[1.05] sm:text-base"
            >
              Explore our SDKs <ArrowIcon />
            </Link>
          </div>
          <div className="col-span-3 flex flex-col items-center rounded-2xl bg-white p-14 py-10 md:col-span-1 md:items-start md:px-14 md:py-16">
            <BeautifulUXIcon />

            <h2 className="mt-7 mb-10 text-2xl font-bold lg:text-[30px]">
              Beautiful seamless UX
            </h2>
            <Link
              to="/"
              className="text-mono-blue flex items-center text-sm font-bold transition-transform duration-300 hover:scale-[1.05] sm:text-base"
            >
              See a demo
              <ArrowIcon />
            </Link>
          </div>
          <div className="col-span-3 flex flex-col items-center rounded-2xl bg-white p-14 py-10 md:col-span-1 md:items-start md:px-14 md:py-16">
            <SlackIcon />

            <h2 className="mt-7 mb-10 text-2xl font-bold lg:text-[30px]">
              Always-on support
            </h2>
            <Link
              to="/"
              className="text-mono-blue flex items-center text-sm font-bold transition-transform duration-300 hover:scale-[1.05] sm:text-base"
            >
              {" "}
              Join us on Slack <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
