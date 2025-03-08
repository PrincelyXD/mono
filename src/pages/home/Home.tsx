import BuildingWithMono from "./BuildingWithMono"
import DigitalFinance from "./DigitalFinance"
import HeroSection from "./HeroSection"
import TestimonialSection from "./TestimonialSection"


const Home = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <HeroSection/>
      <DigitalFinance/>
      <BuildingWithMono/>
      <TestimonialSection/>
    </div>
  )
}

export default Home

