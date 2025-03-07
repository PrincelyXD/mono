import gsap from "gsap";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const AnimatedCards = () => {
    const card1 = useRef(null);
    const card2 = useRef(null);
    const card3 = useRef(null);


  useEffect(() => {
    gsap.fromTo(
      [card1.current, card2.current, card3.current],
      { opacity: 0, transform: "none" }, // Start with no transform
      {
        opacity: 1,
        x: -22.7231,
        scaleX: 1.0663,
        scaleY: 0.8816,
        rotate: 20.3045,
        skewX: 20.3045,
        y: (index) => -30 * index,
        duration: 1.2,
        delay: 0.2,
        ease: "power2.out",
      },
    );
  }, []);

  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      {/* First Card */}
      <div
        ref={card1}
        className="relative z-30 -mr-5 h-96 w-48 -translate-x-[22.7231px] scale-x-[1.0663] scale-y-[0.8816] rotate-[20.3045deg] skew-x-[20.3045deg] transform overflow-hidden rounded-xl bg-gradient-to-br from-[rgba(254,254,254,0.5)] to-[rgba(228,228,228,0.5)] p-6 shadow-lg backdrop-blur-md"
      >
        <div className="flex h-full w-full flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.2 }}
            className="flex w-full flex-col items-center"
          >
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[12px] bg-[#FAB613]">
              <svg width="30" height="28" viewBox="0 0 30 28" fill="none">
                <path
                  d="M27.0525 23.4821V21.3294H24.9611V12.1352H28.6708L28.875 8.88213L14.7737 0L0.675351 8.88148L0.876611 12.1348H4.58792V21.3294H2.49621V23.4821H0V27.5862H14.7737H29.5487V23.4821H27.0525ZM7.72534 21.3294V12.1352H9.91818V21.3294H7.72534ZM14.7737 21.3294H13.0543V12.1352H14.7737H16.4941V21.3294H14.7737ZM19.6315 21.3294V12.1352H21.8247V21.3294H19.6315Z"
                  fill="white"
                ></path>
              </svg>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="mt-10 flex w-full flex-col items-center"
            >
              <div className="h-[5px] w-11/12 rounded-xl bg-[#d1d6de]"></div>
              <div className="mt-2 h-[5px] w-6/12 rounded-xl bg-[#d1d6de]"></div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="absolute bottom-0 left-0 flex h-[50px] w-full items-center justify-center bg-[#DDF3D4] opacity-[0.7]"
        >
          <div className="h-[5px] w-8/12 rounded-lg bg-[#60A944]"></div>
        </motion.div>
      </div>
      {/* Second Card */}
      <div
        ref={card2}
        className="relative z-20 -mr-5 flex h-96 w-48 -translate-x-[22.7231px] scale-x-[1.0663] scale-y-[0.8816] rotate-[20.3045deg] skew-x-[20.3045deg] transform flex-col items-center justify-center rounded-xl bg-[rgba(217,217,217,0.75)] p-6 shadow-lg backdrop-blur-sm"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.8, ease: "circOut" }}
          className="flex h-12.5 w-12.5 items-center justify-center rounded-full bg-black opacity-100"
        >
          <svg width="50%" viewBox="0 0 46 26" fill="none">
            <path
              d="M29.5434 25.8385C29.7002 25.9193 29.8569 26 30.092 26C30.5622 26 30.954 25.5963 30.954 25.1118V15.5031L44.5894 25.8385C44.7462 25.9193 44.9029 26 45.138 26C45.6082 26 46 25.5963 46 25.1118V11.5466C46 11.2236 45.8433 10.9814 45.6082 10.8199L31.5026 0.161491C31.4242 0.0807453 31.1891 0 31.0324 0C30.5622 0 30.1704 0.403727 30.1704 0.888199V10.4969L16.4566 0.161491C16.2998 0.0807453 16.1431 0 15.9864 0C15.7513 0 15.5162 0.0807453 15.3595 0.242236C15.2027 0.403727 15.1244 0.645963 15.1244 0.888199V10.4969L1.41056 0.161491C1.25383 0.0807453 1.0971 0 0.86201 0C0.391823 0 0 0.403727 0 0.888199V14.4534C0 14.7764 0.156729 15.0186 0.391823 15.1801L14.4974 25.8385C14.6542 25.9193 14.8109 26 15.046 26C15.5162 26 15.908 25.5963 15.908 25.1118V15.5031L29.5434 25.8385Z"
              fill="white"
            ></path>
          </svg>
        </motion.div>

        <svg
          width="60"
          height="202"
          viewBox="0 0 56 232"
          fill="none"
          className="absolute -top-13 right-13 z-50"
        >
          <motion.path
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1.2, delay: 2.3, ease: "circOut" }}
            d="M1.00002 231.5L1.00003 10.8154C1.00003 4.00682 7.65618 -0.811075 14.124 1.31593L55 .583"
            stroke="black"
            strokeWidth="1"
            strokeDasharray="5,5" // Ensure it remains dashed
          />
        </svg>
        <svg
          width="80 "
          height="202"
          viewBox="0 0 87 232"
          fill="none"
          className="absolute -bottom-17 left-3 z-50"
        >
          <motion.path
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 1.2, delay: 1.5, ease: "circOut" }}
            d="M1 206.547L72.876 230.184C79.3439 232.32 86 227.493 86 220.685V0"
            stroke="#60A944"
            strokeWidth="1"
            strokeDasharray="5,5"
          />
        </svg>
      </div>

      {/* Third Card */}
      <div
        ref={card3}
        className="relative z-10 h-96 w-48 -translate-x-[22.7231px] scale-x-[1.0663] scale-y-[0.8816] rotate-[20.3045deg] skew-x-[20.3045deg] transform flex-col items-center justify-center overflow-hidden rounded-xl p-6 shadow-lg"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 12 }}
          transition={{ duration: 1, delay: 2.8 }}
          className="absolute -top-10 -left-20 rounded-full bg-black p-10"
        ></motion.div>

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 80, ease: "linear" }}
          className="absolute top-0 left-0 flex h-[400px] w-max justify-start"
        >
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
            src="image.png"
            alt=""
          />

          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
            src="image.png"
            alt=""
            className="-ml-4"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
            src="image.png"
            alt=""
            className="-ml-4"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
            src="image.png"
            alt=""
            className="-ml-4"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
            src="image.png"
            alt=""
            className="-ml-4"
          />
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3.5 }}
            src="image.png"
            alt=""
            className="-ml-4"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default AnimatedCards
