import Banner from "@/components/homepage/Banner";
import Stats from "@/components/homepage/Stats";
import TopDestinationsContainer from "@/components/homepage/TopDestinationsContainer";
import WhyChooseUs from "@/components/homepage/WhyChooseUS";



export default function Home() {
  return (
    <div >
      
      <Banner /> 
      <Stats/>
      <TopDestinationsContainer />
      <WhyChooseUs/>
      
    </div>
  );
}
