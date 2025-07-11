import { ParallaxBox } from "@/components/Animation/ParallaxBox";
import FloatingShadowCard from "@/components/Card/FloatingShadowCard";
import TDBox from "@/components/Card/TDBox";

import {
  TwoCardR,
  TwoCardCL,
  TwoCardPriceRoom,
  TwoCardL,
  TwoCardCR,
} from "@/components/Card/TwoCard";

export default function Home() {
  return (
    <div>
      {/* banner แรกที่คนเห็น */}
      <section>
        <ParallaxBox />
      </section>

      <section>เปิดมากี่ปี ความน่าเชื่อถือ</section>

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

      <TwoCardCL />

      <section>
        <TDBox />
      </section>

      {/* ราคาที่พัก */}
      <section>
        <TwoCardPriceRoom
          title="ห้องธรรมดา"
          price="รายสัปดาห์ 10,000 รวมบิล รายวัน 1800 รวมบิล"
        />
      </section>

      <section className="flex justify-center items-center">
        โปรโมชั่น
        <div className="flex justify-center items-center mx-5 gap-4">
          <FloatingShadowCard
            imgSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            title="Beautiful Sunset"
            description="Enjoy the beautiful sunset view with amazing colors."
            buttonText="Explore Now"
          />
          <FloatingShadowCard
            imgSrc="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
            title="Beautiful Sunset"
            description="Enjoy the beautiful sunset view with amazing colors."
            buttonText="Explore Now"
          />
        </div>
      </section>

      {/* zone ข้อดีโรงแรม */}
      <TwoCardL
        title="test"
        des="test"
        img="/image/Central/bkkqp-lobby-0027_Classic-Hor.jpg"
      />
      <TwoCardR
        title="test"
        des="test"
        img="/image/Central/bkkqp-lobby-0027_Classic-Hor.jpg"
      />
      <TwoCardCL />
      <TwoCardR
        title="test"
        des="test"
        img="/image/Central/bkkqp-lobby-0027_Classic-Hor.jpg"
      />
      <TwoCardCR />
    </div>
  );
}
