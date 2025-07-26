
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
      <section>
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
        <div className="flex justify-center flex-col items-center my-15 gap-6">
          <div>

          <FloatingShadowCard
            imgSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            title="โปรโมชั่น มีจำนวนจำกัด "
            description="จ่าย3 เดือนมีส่วนลด5%  Pay for 3 months with 5% discount"
            buttonText="Explore Now"
            />
            </div>

            <div>

          <FloatingShadowCard
            imgSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            title="โปรโมชั่น มีจำนวนจำกัด"
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
