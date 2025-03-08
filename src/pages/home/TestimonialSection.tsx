import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperController from "../../components/SwiperController";
import TestimonialCard from "../../components/TestimonialCard";
import { TestimonialCardResources } from "../../resources/Resources";


const TestimonialSection = () => {
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);




  return (
    <div className="flex w-full flex-col items-center pt-20">
       <div className="w-[90%] max-w-[10150px] xl:w-[80%]">

       <section className="w-full py-10  lg:max-w-[550px]">
          <h2 className="my-5 pr-5 text-3xl leading-[1.1] font-semibold md:font-bold sm:mt-12 sm:text-5xl md:pr-0 md:leading-[1.3] lg:text-[56px]">
          Why market leaders are choosing Mono
          </h2>
          <p className="mb-9 text-base sm:mb-12 md:max-w-[450px] md:text-xl lg:max-w-[550px] lg:text-2xl">
          Here's what some of them are saying.
          </p>
        </section>

        <section className="relative w-full flex  pb-15">
        <Swiper
          style={{  paddingBottom: "80px" }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onReachBeginning={() => setIsBeginning(true)}
          onReachEnd={() => setIsEnd(true)}
          onFromEdge={() => {
            setIsBeginning(false);
            setIsEnd(false);
          }}
          slidesPerView={1} 
  slidesPerGroup={1} 
  spaceBetween={20}
  speed={800}
  breakpoints={{
    100:{
      slidesPerView: 1, 
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 1, 
      slidesPerGroup: 1, 
    },
    640: {
      slidesPerView: 2,
      slidesPerGroup: 3, 
    },
  }}
        >

           
               {TestimonialCardResources.map((card, index)=> {
                     return (
                            <SwiperSlide key={index}>
                                <TestimonialCard key={index} name={card.name} position={card.position} image={card.image} companyLogo={card.companyLogo} review={card.review} />
                            </SwiperSlide>
                     )
               })}
     
            <SwiperController isBeginnig={isBeginning} isEnd={isEnd} />
        </Swiper>
        </section>
      </div>
    </div>
  )
}

export default TestimonialSection
