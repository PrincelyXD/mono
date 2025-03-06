import { AnimatePresence, motion } from "framer-motion";
import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";
import MobileNavLink from "./MobileNavLink";
import { NavLink1Resources, NavLink2Resources, NavLink3Resources, NavLink4Resources } from "../resources/Resources";
import PillButton from "./PillButton";

const MobileNavMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="block lg:hidden">
      <Hamburger size={27} toggle={setOpen} toggled={isOpen} rounded={true} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
          key="hamDropdown"
            initial={{ opacity: 0, height:"0px" }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: "0px" }}
            transition={{ duration: 0.3 }}
            layout
          className="fixed z-40 top-24 left-0 pb-[150px] overflow-scroll flex flex-col gap-y-6   h-full w-full pt-3  bg-white">

            <MobileNavLink header="Why Mono" resources={NavLink1Resources}/>
            <MobileNavLink header="Products" resources={NavLink2Resources}/>
            <MobileNavLink header="Learn" resources={NavLink3Resources}/>
            <MobileNavLink header="Developers" resources={NavLink4Resources}/>

            <div className=" fixed flex justify-center px-4 items-center h-[70px] bg-white w-full bottom-0">
                    <PillButton title="Sign in" className=" w-full max-w-[500px] text-white bg-mono-blue"/>
            </div> 
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileNavMenu;
