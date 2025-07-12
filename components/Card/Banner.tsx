import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

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
              ตลอดการเข้าพักที่ MtriO Hotel Korat
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
              icon={faFacebook}
              className="text-white text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-2">บริการระดับพรีเมียม</h2>
          <p className="text-sm text-center text-gray-300">
            รับประกันความประทับใจทุกครั้งที่เข้าพัก
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-black border border-white rounded-xl p-6 w-80 text-white relative shadow-[0_0_20px_rgba(0,255,255,0.6),0_0_50px_rgba(255,0,0,0.8)]">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-white text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-2">บริการระดับพรีเมียม</h2>
          <p className="text-sm text-center text-gray-300">
            รับประกันความประทับใจทุกครั้งที่เข้าพัก
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-black border border-white rounded-xl p-6 w-80 text-white relative shadow-[0_0_20px_rgba(0,255,255,0.6),0_0_50px_rgba(255,0,0,0.8)]">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-white text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-2">บริการระดับพรีเมียม</h2>
          <p className="text-sm text-center text-gray-300">
            รับประกันความประทับใจทุกครั้งที่เข้าพัก
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-black border border-white rounded-xl p-6 w-80 text-white relative shadow-[0_0_30px_rgba(0,255,255,0.6),0_0_50px_rgba(255,0,0,0.8)]">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-white text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-2">บริการระดับพรีเมียม</h2>
          <p className="text-sm text-center text-gray-300">
            รับประกันความประทับใจทุกครั้งที่เข้าพัก
          </p>
        </div>


        {/* Card 5 */}
        <div className="bg-black border border-white rounded-xl p-6 w-80 text-white relative shadow-[0_0_30px_rgba(0,255,255,0.6),0_0_50px_rgba(255,0,0,0.8)]">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-white text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-2">บริการระดับพรีเมียม</h2>
          <p className="text-sm text-center text-gray-300">
            รับประกันความประทับใจทุกครั้งที่เข้าพัก
          </p>
        </div>


        {/* Card 6 */}
        <div className="bg-black border border-white rounded-xl p-6 w-80 text-white relative shadow-[0_0_30px_rgba(0,255,255,0.6),0_0_50px_rgba(255,0,0,0.8)]">
          <div className="flex justify-center mb-4">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-white text-4xl drop-shadow-[0_0_6px_rgba(255,255,255,0.9)]"
            />
          </div>
          <h2 className="text-xl font-bold text-center mb-2">บริการระดับพรีเมียม</h2>
          <p className="text-sm text-center text-gray-300">
            รับประกันความประทับใจทุกครั้งที่เข้าพัก
          </p>
        </div>


      </div>
    </div>
  );
};
