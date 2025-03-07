import DarkLogo from "../assets/icons/DarkLogo";
import NavLink1 from "../components/NavLink1";
import NavLinkType2 from "../components/NavLinkType2";
import PillButton from "../components/PillButton";
import {
  NavLink1Resources,
  NavLink2Resources,
  NavLink3Resources,
  NavLink4Resources,
} from "../resources/Resources";
import MobileNavMenu from "../components/MobileNavMenu";

const Nav = () => {
  return (
    <div className="relative z-[60] flex h-20 w-[90%] max-w-[1150px] items-center justify-between lg:h-26 xl:w-[80%]">
      <DarkLogo />

      <div className="hidden h-fit w-full max-w-[470px] justify-between text-[15px] text-black lg:flex">
        <NavLink1
          resources={NavLink1Resources}
          title="Why Mono"
          Layout=" flex flex-col"
          minWidth="min-w-[420px]"
        />
        <NavLink1
          resources={NavLink2Resources}
          title="Products"
          Layout="grid grid-cols-2"
          minWidth="min-w-[750px]"
        />
        <NavLinkType2 title="Learn" resources={NavLink3Resources} />
        <NavLinkType2 title="Developers" resources={NavLink4Resources} />
      </div>

      <PillButton
        title="Sign In"
        className="bg-mono-blue hidden text-white lg:block"
      />

      <MobileNavMenu />
    </div>
  );
};

export default Nav;
