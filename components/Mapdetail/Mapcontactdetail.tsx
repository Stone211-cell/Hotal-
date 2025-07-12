import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { ContactIcon } from "../Contacted/ContactIcon";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

const Mapcontactdetail = () => {
  return (
    <div>
      <div className="relative bg-black rounded-xl overflow-hidden">
        {/* Neon Red Glow */}
        <div className="absolute inset-0 rounded-xl
          shadow-[0_0_30px_5px_rgba(255,0,0,0.8),0_0_60px_10px_rgba(255,0,0,0.6)]
          pointer-events-none 
        "></div>

        {/* Background Image with Blur */}
        <Image
          src="/image/Central/bkkqp-lobby-0027_Classic-Hor.jpg"
          alt="ซ่อมประปา"
          className="absolute inset-0 w-full h-full object-cover backdrop-blur-md rounded-xl"
          fill
        />

        {/* Content Overlay */}
        <div className="relative  bg-black  z-10 shadow-[0_0_30px_5px_rgba(255,0,0,0.8),0_0_60px_10px_rgba(255,0,0,0.6) p-8 min-h-[500px] flex flex-col justify-center text-white text-center rounded-xl">
          <div className="flex justify-center">
            <h2 className="text-2xl font-bold bg-white text-black px-4 py-1 rounded-md transition-transform duration-200 ease-in-out hover:scale-110">
              <Link href="#map">ติดต่อเรา</Link>
            </h2>
          </div>

          <div className="my-5">
            <h3 className="text-5xl font-bold py-5">โรงแรมของเราในย่านสุราษฎร์ธานี</h3>
            <p className="mt-2 text-sm">
              โรงแรมของเราในย่านสุราษฎร์ธานี...........
            </p>
          </div>

          <div className="flex justify-center">
            <h2 className="text-md font-bold mt-5 bg-red-800 rounded-2xl px-4 py-2 transition-transform duration-200 ease-in-out hover:scale-110">
              <Link
                href="https://maps.app.goo.gl/HHCnyNu87xprH9Dr7?g_st=ic"
                className="text-white"
              >
                เปิดแผนที่นำทาง
              </Link>
            </h2>
          </div>

          <div id="map" className="my-5 text-center flex flex-col items-center justify-center">
            <ContactIcon
              sizeicon="2x"
              coloricon="red"
              msg="ที่ตั้ง"
              LINKBTN="https://maps.app.goo.gl/HHCnyNu87xprH9Dr7?g_st=ic"
              icontype={faLocationDot}
              classtype=""
            />
            <p className="max-w-md mt-2">
              ............... กรุงเทพมหานคร 10220 ประเทศไทย
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl w-full px-4">
              <ContactIcon
                sizeicon="2x"
                coloricon="red"
                msg="โทรศัพท์สอบถาม"
                description="09999999"
                LINKBTN="tel:09999999"
                icontype={faPhone}
                classtype=""
              />
              <ContactIcon
                sizeicon="2x"
                coloricon="red"
                msg="โทรศัพท์สอบถาม"
                description="099999"
                LINKBTN="tel:099999"
                icontype={faPhone}
                classtype=""
              />
              <ContactIcon
                sizeicon="2x"
                coloricon="red"
                msg="LINE ID"
                description="09999"
                LINKBTN="......"
                icontype={faLine}
                classtype=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Google Map iframe */}
      <div className="mt-8 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.8989924901207!2d99.823931!3d10.1073535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3055a1d863e74539%3A0xcb0cb6b937e312c6!2sSunSea%20View%20Resident%20Kohtao!5e0!3m2!1sth!2sth!4v1752313346570!5m2!1sth!2sth"
          width="100%"
          height="500"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map - โรงแรม"
        ></iframe>
      </div>
    </div>
  );
};

export default Mapcontactdetail;
