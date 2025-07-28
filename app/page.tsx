
import { BannerBox } from "@/components/Animation/BannerBox";
import Banner from "@/components/Card/Banner";
import FloatingShadowCard from "@/components/Card/FloatingShadowCard";
import ShowCard from "@/components/Card/ShowCard";

import ContactedBox from "@/components/Contacted/ContactedBox";
import Mapcontactdetail from "@/components/Mapdetail/Mapcontactdetail";

export default function Home() {
  return (
    <div>
      {/* banner แรกที่คนเห็น */}
      <section id="home">
        <BannerBox />
      </section>

      <section id="service">
        {" "}
        <Banner />
      </section>

     

      {/* ราคาที่พัก */}

      <section id="aboutus">
        <ShowCard/>

      </section>

        <div className="my-15">
        <ContactedBox />
        </div>
      


{/* โปรโฒชั่น */}
      <section className="my-5" id="promotion">
        <div className="flex justify-center flex-col items-center my-15 gap-6 lg:flex-row">
          <div>

          <FloatingShadowCard
            imgSrc="/image/Roomprice/Standard/L301/S__19497161_0.jpg"
            title="Promotion Now!"
            description="Pay for 3 months with 5% discount"
            buttonText="Explore Now"
            />
            </div>

            <div>

          <FloatingShadowCard
            imgSrc="/image/Roomprice/Seaview/L101/S__19497167_0.jpg"
            title="Promotion Now!"
            description="Pay for 6 months and get 10% discount."
            buttonText="Explore Now"
            />
            </div>
        </div>
      </section>

     
      {/* contact zone  */}

      {/* google map zone */}
      <section className="my-8" id="Contacted">
        <Mapcontactdetail />
      </section>
    </div>
  );
}
