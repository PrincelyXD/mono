import { motion } from "framer-motion";
import NavIcon4 from "../../assets/icons/NavIcon4";
import { Link } from "react-router-dom";
import Arrow2 from "../../assets/icons/Arrow2";
import NavIcon6 from "../../assets/icons/NavIcon6";
import NavIcon9 from "../../assets/icons/NavIcon9";
import { TimerIcon } from "../../assets/icons/Icons";
const DigitalFinance = () => {
  return (
    <div className="flex w-full flex-col overflow-hidden  items-center">
      <div className="w-[90%] max-w-[10150px] py-8 text-stone-600 xl:w-[80%]">
        <span>Trusted by</span>
        <span className="mt-8 flex flex-wrap justify-between gap-5 md:mt-10">
          <motion.img
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src="/carbon-logo.png"
            alt=""
            className="h-8 md:h-10"
          />
          <motion.img
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            src="/renmoney-logo.png"
            alt=""
            className="h-9 md:h-11"
          />
          <motion.img
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            src="/flutter-wave-logo.png"
            alt=""
            className="h-8 md:h-10"
          />
          <motion.img
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            src="/evolve-credit-logo.png"
            alt=""
            className="h-8 md:h-10"
          />
        </span>
      </div>

      <div className="w-[90%] max-w-[10150px] xl:w-[80%]">
        <div className="w-full py-10 lg:max-w-[500px]">
          <h2 className="my-5 pr-5 text-3xl leading-[1.1] font-semibold sm:mt-12 sm:text-5xl md:pr-0 md:leading-[1.3] lg:text-[56px]">
            Build for the future of digital finance.
          </h2>
          <p className="mb-9 text-base sm:mb-12 md:max-w-[450px] md:text-xl lg:max-w-[550px] lg:text-2xl">
            Bring tomorrow's solutions to life, with our customer-focused
            solutions, today.
          </p>
        </div>

        <div className=" w-full grid grid-cols-2 gap-5 ">

          <section className="h-[450px] sm:h-[600px] md:h-[450px] col-span-2 w-full rounded-xl bg-[image:url('/connect.jpg')] bg-cover bg-center p-7 md:p-10 lg:p-15 text-white">
            <NavIcon4 />
            <h3 className="mb-5 text-2xl md:text-3xl lg:text-4xl font-semibold">Connect</h3>
            <p className="w-full text-sm lg:text-[17px]  md:max-w-[300px] font-light">
              Securely access financial accounts for statements, transactions,
              and identity   
            </p>
            <Link
            to="/"
            className="text-mono-blue group flex h-fit w-fit items-center mt-8 rounded-xl px-3 py-3 text-sm bg-white transition-all duration-300 sm:px-5 sm:py-4"
          >
           Start with Connect
            <span className="group-hover:translate-x-[0.5]">
              <Arrow2 />
            </span>
          </Link>
          </section>

          <section className="h-[450px] sm:h-[600px] md:h-[700px] col-span-2 md:col-span-1 w-full rounded-xl bg-[image:url('/directpay.jpg')] bg-cover bg-center p-7 md:p-10 lg:p-15">
           <span className="block scale-[1.1] ml-4"><NavIcon6/></span> 
           
           <h3 className="mb-5 text-2xl md:text-3xl lg:text-4xl mt-5 font-semibold ">DirectPay</h3>
            <p className="w-full text-sm lg:text-[17px]  sm:max-w-[300px] font-light">
            Collect bank payments in your web or mobile app. No cards. No chargebacks
            </p>
            <Link
            to="/"
            className="bg-mono-blue group flex h-fit w-fit items-center mt-8 rounded-xl px-3 py-3 text-sm text-white transition-all duration-300 sm:px-5 sm:py-4"
          >
            Start with DirectPay
            <span className="group-hover:translate-x-[0.5]">
              <Arrow2 />
            </span>
            </Link>

            <span className="flex text-xs gap-x-4 items-center mt-4 rounded-full bg-[#f5f5f576] px-3 py-2">In Partnership with  <img src="/flutter-wave-logo.png" alt="" className="h-6" /></span>
          </section>

          <section className="h-[450px] sm:h-[600px] md:h-[700px] col-span-2 md:col-span-1 text-white w-full rounded-xl bg-[image:url('/percept.png')] bg-cover bg-center p-7 md:p-10 lg:p-15">
           <span className="block scale-[1.1] ml-4"><NavIcon9/></span> 
           
           <h3 className="mb-5 text-2xl md:text-3xl lg:text-4xl mt-5 font-semibold ">Percept</h3>
            <p className="w-full text-sm lg:text-[17px] max-w-[350px] font-light">
            Money operations and reconciliation for all your corporate accounts, in one dashboard 
            </p>
            <Link
            to="/"
            className="bg-[#ffffff2c] group flex h-fit w-fit items-center mt-8 rounded-xl px-3 py-3 text-sm text-white transition-all duration-300 sm:px-5 sm:py-4"
          >
           Request access
            <span className="group-hover:translate-x-[0.5]">
             <TimerIcon/>
            </span>
            </Link>

          </section>
        </div>
      </div>
    </div>
  );
};

export default DigitalFinance;
