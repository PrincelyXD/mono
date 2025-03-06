import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type NavLinkObject = {
    icon: ReactNode;
    header: string;
    href: string;
  };

type MobileNavLinkProps = {
    header: string;
    resources: NavLinkObject[];
}

const MobileNavLink = ({resources, header}:MobileNavLinkProps) => {
  return (
    <div className="border-b-3 py-5  px-2 border-b-gray-200">

         <div className="w-full max-w-[500px]  relative mx-auto  ">
         <h6 className=" absolute text-sm left-4  top-[-25px] font-light text-mono-light-grey">{header}</h6>
         <ul className="grid grid-cols-2 w-full">
            {resources.map((resource, index)=> {
            return ( 
                <motion.li
                initial={{ transform: "translateY(30px)", opacity: 0 }}
                animate={{ transform: "translateY(0px)", opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: 0.1 + index / 50,
                }}
                key={index}>
                     <Link to={resource.href} className="flex w-fit h-fit  items-center">
                    <span className=" scale-[0.5]">{resource.icon}</span>
                    <p className="text-black text-[15px] font-bold">{resource.header}</p>
                </Link>
            
                </motion.li>
               
        )
        })}
         </ul>
        
    </div>
    </div>
   
  )
}

export default MobileNavLink
