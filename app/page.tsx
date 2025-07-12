import { ParallaxBox } from "@/components/Animation/ParallaxBox";
import Banner from "@/components/Card/Banner";
import FloatingShadowCard from "@/components/Card/FloatingShadowCard";
import TDBox from "@/components/Card/TDBox";

import {
  TwoCardR,
  TwoCardCL,
  TwoCardPriceRoom,
  TwoCardL,
  TwoCardCR,
  TwoCardPriceSeaRoom,
} from "@/components/Card/TwoCard";
import ContactedBox from "@/components/Contacted/ContactedBox";
import Mapcontactdetail from "@/components/Mapdetail/Mapcontactdetail";

export default function Home() {
  return (
    <div>
      {/* banner แรกที่คนเห็น */}
      <section>
        <ParallaxBox />
      </section>

      <section id="service">
        {" "}
        <Banner />
      </section>

      <section>
        <TwoCardR
          title="The Lobby Lounge"
          img="/image/Central/bkkqp-lobby-0027_Classic-Hor.jpg"
          des="พื้นที่กว้างขวางและทันสมัยแห่งนี้มีบริการและกิจกรรมต่างๆ มากมาย
              ตั้งแต่การรับประทานอาหารและเครื่องดื่มแบบสบายๆ
              ไปจนถึงสิ่งอำนวยความสะดวกทางธุรกิจที่ทันสมัยที่สุด
              ช่วยให้สามารถรองรับการประชุมของบริษัทและการสังสรรค์ทางสังคมได้"
        />
      </section>

      <section>
        <TwoCardCL />
        <ContactedBox />
      </section>

      <section>
        <TDBox />

        <ContactedBox />
      </section>

      {/* ราคาที่พัก */}
      <section id="aboutus">
        <TwoCardPriceRoom
          title="Standard room "
          price="รายเดือน 20,000 ฿ รายสัปดาห์ 10,000 ฿ รายวัน 1800 ฿"
        />
        <TwoCardPriceSeaRoom
          title=" Sea view room"
          price="รายเดือน 25,000฿ รายสัปดาห์ 12,000฿ รายวัน 2400 ฿"
        />

        <ContactedBox />
      </section>

      <section>
        โปรโมชั่น
        <div className="flex justify-center items-center mx-5 gap-4">
          <FloatingShadowCard
            imgSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            title="โปรโมชั่น"
            description="Enjoy the beautiful sunset view with amazing colors."
            buttonText="Explore Now"
          />
          <FloatingShadowCard
            imgSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            title="โปรโมชั่น"
            description="Enjoy the beautiful sunset view with amazing colors."
            buttonText="Explore Now"
          />
        </div>
        <ContactedBox />
      </section>

      {/* zone ข้อดีโรงแรม */}
      <section>
        <TwoCardL
          title="ข้อดีโรงแรม"
          des="ข้อดีโรงแรม"
          img="/image/Central/bkkqp-lobby-0027_Classic-Hor.jpg"
        />
        <TwoCardR
          title="ข้อดีโรงแรม"
          des="ข้อดีโรงแรม"
          img="/image/Central/bkkqp-lobby-0027_Classic-Hor.jpg"
        />
        <TwoCardCL />
        <TwoCardR
          title="ข้อดีโรงแรม"
          des="ข้อดีโรงแรม"
          img="/image/Central/bkkqp-lobby-0027_Classic-Hor.jpg"
        />
        <TwoCardCR />

        <ContactedBox />
      </section>

      {/* contact zone  */}

      {/* google map zone */}
      <section className="my-8">
        <Mapcontactdetail />
      </section>
      <ContactedBox />
    </div>
  );
}
