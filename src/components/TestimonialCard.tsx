import { QuoteSvg } from "../assets/icons/Icons";

interface TestimonialCardProps {
    name: string;
    position: string;
    image: string;
    companyLogo: string;
    review: string;
}
const TestimonialCard = ({name, position, companyLogo, image, review}:TestimonialCardProps) => {
  return (
    <div className="w-full  max-w-max h-full  rounded-2xl p-7 md:p-10 lg:p-14 flex flex-col gap-y-10 justify-between bg-[#f6f6f6]">
        <div>
            <QuoteSvg/>
     <h3 className=" text-xl sm:text-2xl md:text-4xl lg:text-[45px] lg:leading-[1.2]  font-semibold">{review}</h3> 
        </div>
    

     <div className=" flex  gap-x-5 items-center">
        <span
        style={{backgroundImage: `url(${image})`}}
        className={` w-10 h-10 transition-all duration-300 md:w-16 md:h-16 bg-center bg-cover relative -ml-3 shadow-2xl  block rounded-full `}>

            <span
                style={{backgroundImage: `url(${companyLogo})`}}
                className="w-4 h-4 bg-center p-2.5 block bg-cover bottom-2  bg-white rounded-full -right-2 absolute">
            </span>
        </span>

        <span>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm font-light text-[#606060]">{position}</p>
        </span>
     </div>

    </div>
  )
}

export default TestimonialCard
