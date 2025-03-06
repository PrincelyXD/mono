import { Link } from "react-router-dom";
import ChevRonDwn from "../assets/icons/ChevRonDwn";
import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type NavLinkObject = {
  icon: ReactNode;
  header: string;
  href: string;
  description: string;
};

type NavLinkProps = {
  title: string;
  minWidth: string;
  Layout?: string;
  resources: NavLinkObject[];
};

const NavLink1 = ({ resources, title, minWidth, Layout }: NavLinkProps) => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowLinks(true)}
      onMouseLeave={() => setShowLinks(false)}
      className="relative flex cursor-pointer p-2 py-4"
    >
      {title}
      <ChevRonDwn />

      <AnimatePresence>
        {showLinks && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: "easeIn", duration: 0.4 }}
            className={`absolute top-full left-1/2 h-fit w-full max-w-5xl -translate-x-1/2 ${minWidth} rounded-xl border border-gray-200 bg-white p-8 shadow-md shadow-gray-300`}
          >
            <div className="absolute top-[-15px] left-1/2 h-4 w-4 translate-x-1/2 translate-y-1/2 rotate-45 rounded-xs bg-white"></div>
            <section className={` ${Layout} gap-y-7`}>
              {resources.map((resource, index) => {
                return (
                  <Link key={index} to={resource.href} className="flex gap-x-5">
                    {resource.icon}
                    <span className="w-full max-w-[280px]">
                      <h3 className="font-semibold">{resource.header}</h3>
                      <span className="text-sm text-gray-600">
                        {resource.description}
                      </span>
                    </span>
                  </Link>
                );
              })}
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavLink1;
