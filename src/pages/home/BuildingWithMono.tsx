import { useState } from "react";
import { Link } from "react-router-dom";
import Arrow2 from "../../assets/icons/Arrow2";
import {
  CarbonSvg,
  InflowSvg,
  LemonadeAppSvg,
  RenmoneySvg,
} from "../../assets/icons/Icons";

const BuildingWithMono = () => {
  const [focused, setFocused] = useState("button1");
  return (
    <div className="flex w-full flex-col items-center pt-20">
      <div className="w-[90%] max-w-[10150px] xl:w-[80%]">
        <div className="w-full py-10 lg:max-w-[500px]">
          <h2 className="my-5 pr-5 text-3xl leading-[1.1] font-bold sm:mt-12 sm:text-5xl md:pr-0 md:leading-[1.3] lg:text-[56px]">
            Businesses building with Mono
          </h2>
          <p className="mb-9 text-base sm:mb-12 md:max-w-[450px] md:text-xl lg:max-w-[550px] lg:text-2xl">
            Here are some of the interesting features and experiences powered by
            Mono.
          </p>
        </div>

        <section className="h-fit w-full overflow-hidden  rounded-xl bg-[#f6f6f6] p-7 pb-0 lg:pb-4.5 md:p-10 lg:p-15">
          {/* state controll buttons */}
          <div className="flex h-[90px] sm:h-[90px] w-full mb-0 sm:mb-10 items-start gap-x-5 overflow-scroll">
            <button
              onClick={() => setFocused("button1")}
              className={`min-w-fit cursor-pointer rounded-full px-5 py-3 text-sm transition-all duration-300 sm:text-[18px] ${
                focused === "button1"
                  ? "bg-black text-white hover:bg-black"
                  : "bg-transparent text-black hover:bg-slate-200"
              } `}
            >
              Lending
            </button>
            <button
              onClick={() => setFocused("button2")}
              className={`min-w-fit cursor-pointer rounded-full px-5 py-3 text-base transition-all duration-300 sm:text-[18px] ${
                focused === "button2"
                  ? "bg-black text-white hover:bg-black"
                  : "bg-transparent text-black hover:bg-slate-200"
              } `}
            >
              Financial Management
            </button>
            <button
              onClick={() => setFocused("button3")}
              className={`min-w-fit cursor-pointer rounded-full px-5 py-3 text-base transition-all duration-300 sm:text-[18px] ${
                focused === "button3"
                  ? "bg-black text-white hover:bg-black"
                  : "bg-transparent text-black hover:bg-slate-200"
              } `}
            >
              Account Verification
            </button>
            <button
              onClick={() => setFocused("button4")}
              className={`min-w-fit cursor-pointer rounded-full px-5 py-3 text-base transition-all duration-300 sm:text-[18px] ${
                focused === "button4"
                  ? "bg-black text-white hover:bg-black"
                  : "bg-transparent text-black hover:bg-slate-200"
              } `}
            >
              Payments
            </button>
          </div>

          {/* state controll content */}

          <div className="flex flex-col lg:flex-row h-full w-full  justify-between gap-0 xs:gap-20  lg:gap-5 ">
            <section>
              <h3 className="mt-5 mb-6 max-w-[400px] text-2xl font-semibold md:text-3xl lg:text-4xl">
                {focused === "button1" && "Carbon's personalized loan offers"}
                {focused === "button2" && "Inflow's Personal Finance Manager"}
                {focused === "button3" && "Renmoney's secure onboarding"}
                {focused === "button4" &&
                  "Lemonade Finance's cross-border transfers"}
              </h3>
              <p className="flex w-full max-w-[450px] flex-col gap-y-4 text-sm font-light text-[#606060] lg:text-[17px]">
                <span>
                  {focused === "button1" &&
                    "Carbon wanted to make their risk assessment and borrower qualification better with high-quality data."}
                  {focused === "button2" &&
                    "Inflow Finance, using Mono Connect, allows thousands of users to understand and manage their finances across multiple accounts all in one place."}
                  {focused === "button3" &&
                    "Renmoney needed to streamline the verification of new users during onboarding."}
                  {focused === "button4" &&
                    "Lemonade finance makes it easy to send and receive money from Nigeria, Kenya, Ghana, Canada, and the UK. Using DirectPay, Lemonade enables its users to make secure direct cash deposits to be transferred to the country of their choice."}
                </span>
                <span>
                  {focused === "button1" &&
                    "Using Mono's Statement Pages, Carbon can receive its users' bank statements in minutes. They get cash flow on the accounts for up to 12 months, all seamlessly without writing a single line of code."}
                  {focused === "button2" &&
                    "Just by linking their financial accounts to the Inflow app using Mono, Inflow's users can now get a better view of their financial health by monitoring real-time balances and transactions across accounts, create budgets, and get personal insights on their spending habits."}
                  {focused === "button3" &&
                    "Using Mono Connect, Renmoney is able to verify users' account information in seconds by having them link their financial accounts."}
                  {focused === "button4" && ""}
                </span>
              </p>
              <Link
                to="/"
                className="group text-mono-blue 4 mt-5 flex h-fit w-fit items-center bg-[#ffffff2c] text-sm font-semibold transition-all duration-300 md:text-base"
              >
                {focused === "button1" && "Read more about Statement Pages"}
                {focused === "button2" && "Read more about Connect"}
                {focused === "button3" && "Learn more about Connect"}
                {focused === "button4" && "Read more about DirectPay"}

                <span className="group-hover:translate-x-[0.5]">
                  <Arrow2 />
                </span>
              </Link>
            </section>

            <section className="relative scale-[0.8] xs:scale-[1] w-fit self-center translate-y-13 xs:translate-y-4 lg:translate-y-4">

              <span className="absolute -top-8 md:-top-15 -right-2  md:-right-5 rounded-full bg-white p-5 shadow-lg">
                <img
                  className=" h-10 md:h-20"
                  src={
                    focused === "button1"
                      ? "/carbon-useCase.png"
                      : focused === "button2"
                        ? "inflow-useCase.png"
                        : focused === "button3"
                          ? "renmoney-useCase.png"
                          : "lemonade-useCase.png"
                  }
                  alt=""
                />
              </span>
              {focused === "button1" && <CarbonSvg />}
              {focused === "button2" && <InflowSvg />}
              {focused === "button3" && <RenmoneySvg />}
              {focused === "button4" && <LemonadeAppSvg />}
            </section>

          </div>

        </section>
      </div>
    </div>
  );
};

export default BuildingWithMono;
