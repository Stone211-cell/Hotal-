/* eslint-disable react/no-unescaped-entities */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCar,
  faDiceD6,
  faFire,
  faFireBurner,
  faHotTubPerson,
  faTv,
  faWifi,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <div>
      <div>
        <div className="w-full h-full bg-white ">
          {/* เนื้อหาด้านใน */}
          <div className="text-black flex justify-center items-center flex-col ">
            <h2 className="text-3xl pt-4 my-8 text-center">
              
              Facilities
            </h2>
            <p className="text-md  text-center max-w-xl">
              We are ready to provide full facilities to make your stay
              comfortable throughout your stay at Sunsea View Residence Kohtao
            </p>
          </div>

          <div className="mt-4 mx-5">
            <Iconset />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;

export const Iconset = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-15 my-18 place-items-center items-stretch">
        {/* Card 1 */}
        <div className="bg-gray-100  rounded-xl p-6 w-80 h-full text-black relative border-1 border-black">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon icon={faWifi} className="text-black text-4xl " />
          </div>
          <h2 className="text-xl font-bold text-center mb-2">Free wifi</h2>
          <p className="text-sm text-center text-black">
            {/* เรามีบริการ Free wifi ทุกบริเวณที่พัก รวมถึงสัญญาณสามารถเข้าถึงได้ทุกจุดโดยที่ลูกค้าไม่ต้องกังวลสามารถใช้งาน Free wifi จากเราได้อย่างลื่นไหล */}
            We provide free wifi service in all areas of the accommodation,
            including signals that can be accessed at all points without
            worrying about customers being able to use our free wifi smoothly.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-100 border-1 border-black rounded-xl p-6 w-80 h-full text-black relative ">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faCar}
              className="text-black text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-2">Parking </h2>
          <p className="text-sm text-center text-black">
            {/* ลูกค้าสามารถมาพักกับทางเราได้อย่างสบาย โดยทางเรามีที่จอดรถสามารถรองรับนักท่องเที่ยวได้ทั้งหมด  ที่จอดรถ( Parking )*/}
            Customers can stay with us comfortably. We have parking space that
            can accommodate all tourists.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 border-1 border-black rounded-xl p-6 w-80 h-full text-black relative ">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faWind}
              className="text-black text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-2">
            Air Conditioner{" "}
          </h2>
          <p className="text-sm text-center text-black">
            {/* เรามีบริการ เครื่องปรับอากาศให้ลูกค้าทุกห้อง โดยที่ลูกค้าไม่ต้องกังวลเรื่องความร้อนหรือความเสียงดัง เครื่องปรับอากาศของเราทุกห้องมีคุณภาพทุกห้อง  เครื่องปรับอากาศทุกห้อง( Air Conditioner )*/}
            We provide air conditioning services to every room for our
            customers, so customers don't have to worry about the heat or noise.
            Our air conditioners in every room are of high quality.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-gray-100 border-1 border-black rounded-xl p-6 w-80 h-full text-black relative ">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faFireBurner}
              className="text-black text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-2">Kitchen </h2>
          <p className="text-sm text-center text-black">
            {/* ทำอาหารเองได้ ประหยัดและตอบโจทย์สายปาร์ตี้หรือมาเป็นครอบครัว มีห้องครัวทุกห้อง( Kitchen )*/}
            You can cook your own food, it's economical and perfect for parties
            or families.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-gray-100 border-1 border-black rounded-xl p-6 w-80 h-full text-black relative ">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faHotTubPerson}
              className="text-black text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-2">Hot water</h2>
          <p className="text-sm text-center text-black">
            {/* อาบน้ำอุ่นได้ตลอดเวลา ช่วยให้ผ่อนคลายหลังเดินทางหรือท่องเที่ยวมาทั้งวัน มีเครื่องทำน้ำอุ่นทุกห้อง ( Hot water  )*/}
            Taking a warm shower at any time can help you relax after a day of
            traveling or sightseeing.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-gray-100 border-1 border-black rounded-xl p-6 w-80 h-full text-black relative ">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faTv}
              className="text-black text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-2">Smart TV </h2>
          <p className="text-sm text-center text-black">
            {/* เพลินไปกับหนัง หรือ รายการต่างๆพร้อมกับครอบครัวได้ง่ายๆ ไม่พลาดความบันเทิงที่ลูกค้าชื่นชอบ สมาร์ททีวี ( Smart TV ) */}
            Enjoy movies or shows with your family easily. Don't miss out on the
            entertainment that customers love. Smart TV.
          </p>
        </div>

        {/* Card 7 */}
        <div className="bg-gray-100 border-1 border-black rounded-xl p-6 w-80 h-full text-black relative ">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faDiceD6}
              className="text-black text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-2">Refrigerator </h2>
          <p className="text-sm text-center text-black">
            {/* ลูกค้าสบายใจ ในเรื่องการเก็บอาหารสดหรือต้องการเครื่องดื่มเย็นๆตลอดวัน เหมาะสำหรับพักหลายคืน หรือ มาเป็นครอบครัว  ตู้เย็น ( Refrigerator ) */}
            Customers can rest assured that their food will be kept fresh or
            that they will have cool drinks throughout the day. Suitable for
            multiple night stays or families.
          </p>
        </div>

        {/* Card 8 */}
        <div className="bg-gray-100 border-1 border-black rounded-xl p-6 w-80 h-full text-black relative ">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faFire}
              className="text-black text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-2">Mircowave</h2>
          <p className="text-sm text-center text-black">
            {/* เติมเต็มความสะดวกสบายในทุกการเข้าพัก ด้วย  ไมโคเวฟ ( Mircowave ) ส่วนตัว   ไมโคเวฟ ( Mircowave ) */}
            Complete your stay with a personal microwave (Mircowave).
          </p>
        </div>
      </div>
    </div>
  );
};
