import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar, faDiceD6, faFire, faFireBurner, faHotTubPerson, faTv, faWifi, faWind } from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
  return (
    <div>
      <div>
        <div className="w-full h-full bg-black ">
          {/* เนื้อหาด้านใน */}
          <div className="text-white flex justify-center items-center flex-col ">
            <h2 className="text-3xl pt-4 my-8">สิ่งอำนวยความสะดวก (Facilities)</h2>
            <p className="text-md  text-center max-w-xl">
              เราพร้อมให้บริการสิ่งอำนวยความสะดวกครบครัน เพื่อให้คุณพักผ่อนได้อย่างสะดวกสบาย
              ตลอดการเข้าพักที่ Sunsea View Residence Kohtao
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-15 my-18 place-items-center">
        {/* Card 1 */}
        <div className="bg-black border border-white rounded-xl p-6 w-80 text-white relative shadow-[0_0_20px_rgba(0,255,255,0.6),0_0_50px_rgba(255,0,0,0.8)]">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faWifi}
              className="text-white text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-2">Free wifi</h2>
          <p className="text-sm text-center text-gray-300">
            เรามีบริการ Free wifi ทุกบริเวณที่พัก รวมถึงสัญญาณสามารถเข้าถึงได้ทุกจุดโดยที่ลูกค้าไม่ต้องกังวลสามารถใช้งาน Free wifi จากเราได้อย่างลื่นไหล
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-black border border-white rounded-xl p-6 w-80 text-white relative shadow-[0_0_20px_rgba(0,255,255,0.6),0_0_50px_rgba(255,0,0,0.8)]">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faCar}
              className="text-white text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-2">ที่จอดรถ( Parking )</h2>
          <p className="text-sm text-center text-gray-300">
            ลูกค้าสามารถมาพักกับทางเราได้อย่างสบาย โดยทางเรามีที่จอดรถสามารถรองรับนักท่องเที่ยวได้ทั้งหมด
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-black border border-white rounded-xl p-6 w-80 text-white relative shadow-[0_0_20px_rgba(0,255,255,0.6),0_0_50px_rgba(255,0,0,0.8)]">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faWind}
              className="text-white text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-2">เครื่องปรับอากาศทุกห้อง( Air Conditioner )</h2>
          <p className="text-sm text-center text-gray-300">
            เรามีบริการ เครื่องปรับอากาศให้ลูกค้าทุกห้อง โดยที่ลูกค้าไม่ต้องกังวลเรื่องความร้อนหรือความเสียงดัง เครื่องปรับอากาศของเราทุกห้องมีคุณภาพทุกห้อง
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-black border border-white rounded-xl p-6 w-80 text-white relative shadow-[0_0_30px_rgba(0,255,255,0.6),0_0_50px_rgba(255,0,0,0.8)]">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faFireBurner}
              className="text-white text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-2">มีห้องครัวทุกห้อง( Kitchen )</h2>
          <p className="text-sm text-center text-gray-300">
            ทำอาหารเองได้ ประหยัดและตอบโจทย์สายปาร์ตี้หรือมาเป็นครอบครัว
          </p>
        </div>


        {/* Card 5 */}
        <div className="bg-black border border-white rounded-xl p-6 w-80 text-white relative shadow-[0_0_30px_rgba(0,255,255,0.6),0_0_50px_rgba(255,0,0,0.8)]">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faHotTubPerson}
              className="text-white text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-2">มีเครื่องทำน้ำอุ่นทุกห้อง ( Hot water  )
</h2>
          <p className="text-sm text-center text-gray-300">
            อาบน้ำอุ่นได้ตลอดเวลา ช่วยให้ผ่อนคลายหลังเดินทางหรือท่องเที่ยวมาทั้งวัน
          </p>
        </div>


        {/* Card 6 */}
        <div className="bg-black border border-white rounded-xl p-6 w-80 text-white relative shadow-[0_0_30px_rgba(0,255,255,0.6),0_0_50px_rgba(255,0,0,0.8)]">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faTv}
              className="text-white text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-2">สมาร์ททีวี ( Smart TV )</h2>
          <p className="text-sm text-center text-gray-300">
            เพลินไปกับหนัง หรือ รายการต่างๆพร้อมกับครอบครัวได้ง่ายๆ ไม่พลาดความบันเทิงที่ลูกค้าชื่นชอบ
          </p>
        </div>

        {/* Card 7 */}
        <div className="bg-black border border-white rounded-xl p-6 w-80 text-white relative shadow-[0_0_30px_rgba(0,255,255,0.6),0_0_50px_rgba(255,0,0,0.8)]">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faDiceD6}
              className="text-white text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-2"> ตู้เย็น ( Refrigerator )</h2>
          <p className="text-sm text-center text-gray-300">
            ลูกค้าสบายใจ ในเรื่องการเก็บอาหารสดหรือต้องการเครื่องดื่มเย็นๆตลอดวัน เหมาะสำหรับพักหลายคืน หรือ มาเป็นครอบครัว
          </p>
        </div>

        {/* Card 8 */}
        <div className="bg-black border border-white rounded-xl p-6 w-80 text-white relative shadow-[0_0_30px_rgba(0,255,255,0.6),0_0_50px_rgba(255,0,0,0.8)]">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faFire}
              className="text-white text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-2">  ไมโคเวฟ ( Mircowave )</h2>
          <p className="text-sm text-center text-gray-300">
            เติมเต็มความสะดวกสบายในทุกการเข้าพัก ด้วย  ไมโคเวฟ ( Mircowave ) ส่วนตัว
          </p>
        </div>


      </div>
    </div>
  );
};
