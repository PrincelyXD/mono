import { Link } from "react-router-dom";
import ChevRonDwn from "../assets/icons/ChevRonDwn";
import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type NavLinkObject = {
  icon: ReactNode;
  header: string;
  href: string;
};

type NavLinkProps = {
  title: string;
  resources: NavLinkObject[];
};

const NavLinkType2 = ({ resources, title }: NavLinkProps) => {
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
            className={`absolute top-full left-1/2 h-fit w-full max-w-5xl min-w-[300px] -translate-x-1/2 rounded-xl border border-gray-200 bg-white p-6 px-8 shadow-md shadow-gray-300`}
          >
            <div className="absolute top-[-15px] left-1/2 h-4 w-4 translate-x-1/2 translate-y-1/2 rotate-45 rounded-xs bg-white"></div>
            <section className={`flex flex-col gap-y-4`}>
              {resources.map((resource, index) => {
                return (
                  <Link
                    key={index}
                    to={resource.href}
                    className="flex items-center gap-x-5"
                  >
                    <span className="scale-[0.5]">{resource.icon}</span>
                    <span className="w-full max-w-[280px]">
                      <h3 className="font-bold">{resource.header}</h3>
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

export default NavLinkType2;
