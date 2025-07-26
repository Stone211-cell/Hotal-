import {
  faHouse,
  faTruckFast,
  faUser,
  faUsersRectangle,
} from "@fortawesome/free-solid-svg-icons";

import { ContactIcon } from "../Contacted/ContactIcon";

// import Image from "next/image";
// import { faLine } from "@fortawesome/free-brands-svg-icons";

const Footerbar = () => {
  return (
    <footer className="bg-gradient-to-b w-full p-8 h-[100%] bg-yellow-700  text-white border-1 border-black">
      <div>
        <div>
          <h2 className="text-3xl font-bold text-white"> โรงแรม</h2>

          <div className="my-5 text-white">
            <h2 className="text-2xl font-bold">
              {" "}
              Sunsea View Residence <br /> Kohtao
            </h2>
            <p className="mt-2 text-sm">
              ซันซีวิวเรสซิเดนซ์ เกาะเต่า พักผ่อนอย่างสบายใจในเมืองสุราษฎร์ธานี
              กับที่พักบรรยากาศดีและเป็นกันเอง ใกล้ร้านอาหาร ร้านกาแฟ ทะเล
              และเดินทางต่อไปเกาะสมุยหรือเขื่อนเชี่ยวหลานได้ง่าย
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 text-md">
        <div>
          <h2 className="mb-3 mx-5 text-white">แผนผังเว็บไซต์</h2>

          <div className="flex flex-col gap-y-3 mx-8">
            <span>
              <ContactIcon
                sizeicon="lg"
                coloricon="white"
                msg="หน้าหลัก"
                LINKBTN="/"
                icontype={faHouse}
                classtype="text-white"
              />
            </span>
            <span>
              <ContactIcon
                sizeicon="lg"
                coloricon="white"
                msg="เกี่ยวกับเรา"
                LINKBTN="#aboutus"
                icontype={faUser}
                classtype="text-white"
              />
            </span>
            <span>
              <ContactIcon
                sizeicon="lg"
                coloricon="white"
                msg="การบริการของเรา"
                LINKBTN="#service"
                icontype={faTruckFast}
                classtype="text-white"
              />
            </span>
            <span>
              <ContactIcon
                sizeicon="lg"
                coloricon="white"
                msg="ติดต่อเรา"
                LINKBTN="#Contacted"
                icontype={faUsersRectangle}
                classtype="text-white"
              />
            </span>
            <div className="hidden md:block">
              <h2 className="text-sm font-bold md:text-xl text-white">
                {" "}
                สัมผัสความสะดวกสบายอันทันสมัยที่โรงแรมของเราในตัวเมืองกรุงเทพ
              </h2>
              <p className="mt-2 text-xs text-white">
                หลีกหนีสู่สถานที่ให้ความสุขอันเงียบสงบใจกลางย่านสุราษฎร์ธานีที่
                Sunsea View Residence Kohtao
                โรงแรมของเราในใจกลางเมืองสุราษฎร์ธานีเหมาะสำหรับทั้งธุรกิจหรือการพักผ่อน
              </p>
            </div>
          </div>
        </div>

        {/* QRcode 
        <div>
          <h2>QRcode</h2>

          <div className="flex flex-col gap-y-3 mt-3">
            <Image
              src="/images/service/QRCODE.jpg"
              alt="hello"
              width={100}
              height={100}
            />
            <ContactIcon
              sizeicon="lg"
              msg="QR CODE LINE"
              LINKBTN="tel:0644088510"
              icontype={faLine}
              classtype=""
            />
          </div>
          
        </div>   */}
      </div>
    </footer>
  );
};
export default Footerbar;
