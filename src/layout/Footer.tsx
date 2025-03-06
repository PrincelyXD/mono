import { Link } from "react-router-dom";
import Arrow2 from "../assets/icons/Arrow2";
import FooterLogo from "../assets/icons/FooterLogo";
import XIcon from "../assets/icons/XIcon";
import LinkedinIcon from "../assets/icons/LinkedinIcon";

const Footer = () => {
  return (
    <footer className="flex h-fit w-full flex-col items-center bg-black py-12 md:py-16">
      <div className="w-[90%] max-w-[1150px] py-20 text-center text-white lg:py-32 xl:w-[80%]">
        <h2 className="mb-4 text-2xl leading-[1.1] font-bold sm:text-3xl md:text-5xl lg:text-6xl">
          Start building with Mono
        </h2>
        <p className="mx-auto mb-13 max-w-[500px] text-base md:max-w-[700px] md:text-xl lg:text-2xl">
          Access high-quality financial data and start processing payments
          directly from bank accounts in minutes.
        </p>

        <div className="flex justify-center gap-x-3">
          <Link
            to="/"
            className="bg-mono-blue flex w-fit items-center rounded-xl px-5 py-4 text-sm"
          >
            Start now for free <Arrow2 />
          </Link>
          <Link
            to="/"
            className="flex w-fit items-center rounded-xl bg-[#ffffff2c] px-5 py-4 text-sm"
          >
            Talk to sales <Arrow2 />{" "}
          </Link>
        </div>
      </div>

      <div className="grid w-[90%] max-w-[1150px] grid-cols-3 gap-5 gap-y-12 border-y border-[#ffffff2c] py-14 text-white md:grid-cols-4 md:py-20 xl:w-[80%]">
        <div>
          <h3 className="mb-5 text-base text-[#ffffff5c]">Products</h3>
          <ul className="flex flex-col gap-y-4 text-[14px]">
            <li className="text-sm">
              {" "}
              <Link to="/">Connect</Link>{" "}
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/">Statement Pages</Link>{" "}
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/">DirectPay</Link>{" "}
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/">DirectPay Pages</Link>{" "}
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/">Portal</Link>{" "}
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/">Transactions</Link>{" "}
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/">Income</Link>{" "}
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/">Information</Link>{" "}
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/">Data Sync</Link>{" "}
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-5 text-base text-[#ffffff5c]">Resources</h3>
          <ul className="flex flex-col gap-y-4 text-[14px]">
            <li className="text-sm">
              {" "}
              <Link to="/"></Link>Developers{" "}
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/"></Link> Documentation
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/"></Link>API Reference
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/"> </Link>SDKs{" "}
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/"></Link> Demo
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/"></Link>Join Slack{" "}
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/"></Link>Consumers{" "}
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-5 text-base text-[#ffffff5c]"> Company</h3>
          <ul className="flex flex-col gap-y-4 text-[14px]">
            <li className="text-sm">
              {" "}
              <Link to="/"></Link>About us{" "}
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/"></Link> Partner stories
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/"></Link>Blog{" "}
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/"> </Link>Coverage{" "}
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/"></Link> Careers
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/"></Link>Contact{" "}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 text-base text-[#ffffff5c]"> Legal</h3>
          <ul className="flex flex-col gap-y-4 text-[14px]">
            <li className="text-sm">
              {" "}
              <Link to="/"></Link>End-User Policy{" "}
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/"></Link>Privacy Policy{" "}
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/"></Link>Developer Policy{" "}
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/"> </Link>Terms of Use{" "}
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/"></Link>Cookies{" "}
            </li>
            <li className="text-sm">
              {" "}
              <Link to="/"></Link>Security{" "}
            </li>
          </ul>
        </div>
      </div>

      <div className="flex  w-[90%] max-w-[1150px] text-white md:flex-row flex-col items-center justify-center md:justify-between  py-10">
        
       <span className="flex flex-col md:flex-row gap-y-7 gap-x-10 items-center text-sm"><FooterLogo/> <p>© Mono Technologies Nigeria Limited</p></span> 



       <span className="flex gap-x-5 text-sm mt-7 md:mt-0 text-[#B5B5B5]  items-center justify-between">
      <Link to="/" className="flex gap-x-2 hover:text-white transition-colors duration-300"> <XIcon/>X</Link>
      • 
      <Link to="/" className="flex gap-x-2 hover:text-white transition-colors duration-300 "><LinkedinIcon/>Linkedin</Link>
        
        </span>
      </div>
    </footer>
  );
};

export default Footer;
