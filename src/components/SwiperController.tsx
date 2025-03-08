import { useSwiper } from "swiper/react";

export interface SwiperControllerInterface {
    isBeginnig: boolean;
    isEnd: boolean;
    
  }
const SwiperController = ({ isBeginnig, isEnd }: SwiperControllerInterface) => {
  const swiper = useSwiper();

  return (
    <div className="absolute bottom-0 right-0 h-fit w-fit  justify-center   flex gap-x-3">
      <button
        onClick={() => swiper.slidePrev()}
        className={`rounded-[10px] p-3 px-3 ${isBeginnig ? "cursor-not-allowed bg-[#f6f6f6]" : "bg-mono-blue"} transition-colors rounded-full duration-300`}
      >
      <svg width="24" height="24" className={`${isBeginnig? "text-black":"text-white"}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M15 18l-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </button>
      <button
        onClick={() => swiper.slideNext()}
        className={`rounded-[10px] p-3 px-3 ${isEnd ? "cursor-not-allowed bg-[#f6f6f6]" : "bg-mono-blue"} transition-colors rounded-full duration-300`}
      >
       <svg width="24" height="24" className={`${isEnd? "text-black":"text-white"}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9 18l6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      </button>
    </div>
  );
};

export default SwiperController;