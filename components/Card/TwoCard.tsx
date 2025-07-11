import Image from "next/image";
import { CarouselDemo } from "../Animation/CarouselDemo";

type cardlist = {
  title: string;
  des: string;
  img: string;
};

export const TwoCardR = ({ title, des, img }: cardlist) => {
  return (
    <div className="flex mt-15 justify-center items-center h-full w-full px-3 md:mx-20 ">
      <div className="hidden md:block ">
        <div className=" flex flex-row items-center space-x-10 w-full">
          <div>
            <Image
              className="rounded-xl"
              src={img || "/image/Central/bkkqp-lobby-0027_Classic-Hor.jpg"}
              alt="Lobby Lounge"
              width={600}
              height={260}
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-start items-start px-5 p-2 w-1/2">
            <h2 className="text-xl font-semibold mb-3 text-start">{title}</h2>
            <span className="block mb-4">
              {" "}
              {/* หากต้องการเพิ่มข้อมูลในช่องนี้ สามารถใช้ได้ */}{" "}
            </span>
            <p className="text-base text-justify">{des}</p>
          </div>
        </div>
      </div>

      <div className="block md:hidden w-full">
        <div className="flex flex-col items-center  w-full">
          {/* รูปภาพ */}
          <div className="w-full">
            <Image
              className="rounded-xl mb-6"
              src="/image/Central/bkkqp-lobby-0027_Classic-Hor.jpg"
              alt="Lobby Lounge"
              width={600}
              height={260}
              layout="responsive"
            />
          </div>

          {/* เนื้อหา */}
          <div className="flex flex-col justify-start items-start w-full">
            <h2 className="text-xl font-semibold mb-2 text-start">{title}</h2>
            {/* <span className="block mb-4"></span> */}
            <p className="text-base">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TwoCardL = ({ title, des, img }: cardlist) => {
  return (
    <div className="flex mt-15 justify-center items-center h-full w-full px-3 md:mx-20 ">
      <div className="hidden md:block ">
        <div className=" flex flex-row items-center space-x-10 w-full">
          {/* Text Content */}
          <div className="flex flex-col justify-start items-start px-5 p-2 w-1/2">
            <h2 className="text-xl font-semibold mb-3 text-start">{title}</h2>
            <span className="block mb-4">
              {" "}
              {/* หากต้องการเพิ่มข้อมูลในช่องนี้ สามารถใช้ได้ */}{" "}
            </span>
            <p className="text-base text-justify">{des}</p>
          </div>
          <div>
            <Image
              className="rounded-xl"
              src={img || "/image/Central/bkkqp-lobby-0027_Classic-Hor.jpg"}
              alt="Lobby Lounge"
              width={600}
              height={260}
            />
          </div>
        </div>
      </div>

      <div className="block md:hidden w-full">
        <div className="flex flex-col items-center  w-full">
          {/* รูปภาพ */}
          <div className="w-full">
            <Image
              className="rounded-xl mb-6"
              src="/image/Central/bkkqp-lobby-0027_Classic-Hor.jpg"
              alt="Lobby Lounge"
              width={600}
              height={260}
              layout="responsive"
            />
          </div>

          {/* เนื้อหา */}
          <div className="flex flex-col justify-start items-start w-full">
            <h2 className="text-xl font-semibold mb-2 text-start">{title}</h2>
            {/* <span className="block mb-4"></span> */}
            <p className="text-base">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TwoCardCL = () => {
  return (
    <div className="flex justify-center items-center h-full w-full px-3 md:mx-20">
      <div className="hidden md:block ">
        <div className=" flex flex-row items-center space-x-15 w-full">
          {/* Text Content */}
          <div className="flex flex-col justify-start items-start mr-25 p-2 w-full">
            <h2 className="text-xl font-semibold mb-3 text-start">
              สิ่งอำนวยความสะดวก
            </h2>
            <span className="block mb-4  text-right text-gray-400">
              ที่ Sunsea View Residence Kohtao ที่เดียว
            </span>
            <p className="text-lg  text-red-900">ทางเรามีบริการ ให้ทุกห้อง!!</p>
            <p>Free wifi</p>
            <p>Parking ที่จอดรถ</p>
            <p>Air Conditioner เครื่องปรับอากาศทุกห้อง</p>
            <p>Kitchen มีห้องครัวทุกห้อง</p>
            <p>Hot water มีเครื่องทำน้ำอุ่นทุกห้อง</p>
            <p>Smart TV สมาร์ททีวี</p>
            <p>Refrigerator ตู้เย็น</p>
            <p>Microwave ไมโครเวฟ</p>
          </div>

          <div>
            <CarouselDemo />
          </div>
        </div>
      </div>

      <div className="block md:hidden w-full">
        <div className="flex flex-col items-center  w-full">
          {/* รูปภาพ */}
          <div className="w-full">
            <div>
              <CarouselDemo />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-start items-start px-5 p-2 w-1/2">
            <h2 className="text-xl font-semibold mb-3 text-start">
              สิ่งอำนวยความสะดวก
            </h2>
            <span className="block mb-4  text-right text-gray-400">
              ที่ Sunsea View Residence Kohtao ที่เดียว
            </span>
            <p className="text-lg  text-red-600">ทางเรามีบริการ ให้ทุกห้อง!!</p>
            <p>Free wifi</p>
            <p>Parking ที่จอดรถ</p>
            <p>Air Conditioner เครื่องปรับอากาศทุกห้อง</p>
            <p>Kitchen มีห้องครัวทุกห้อง</p>
            <p>Hot water มีเครื่องทำน้ำอุ่นทุกห้อง</p>
            <p>Smart TV สมาร์ททีวี</p>
            <p>Refrigerator ตู้เย็น</p>
            <p>Microwave ไมโครเวฟ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TwoCardCR = () => {
  return (
    <div className="flex justify-center items-center h-full w-full px-3 md:mx-20">
      <div className="hidden md:block ">
        <div className=" flex flex-row items-center space-x-15 w-full">
        <div>
          <CarouselDemo />
        </div>
          {/* Text Content */}
          <div className="flex flex-col justify-start items-start mr-25 p-2 w-full">
            <h2 className="text-xl font-semibold mb-3 text-start">
              สิ่งอำนวยความสะดวก
            </h2>
            <span className="block mb-4  text-right text-gray-400">
              ที่ Sunsea View Residence Kohtao ที่เดียว
            </span>
            <p className="text-lg  text-red-900">ทางเรามีบริการ ให้ทุกห้อง!!</p>
            <p>Free wifi</p>
            <p>Parking ที่จอดรถ</p>
            <p>Air Conditioner เครื่องปรับอากาศทุกห้อง</p>
            <p>Kitchen มีห้องครัวทุกห้อง</p>
            <p>Hot water มีเครื่องทำน้ำอุ่นทุกห้อง</p>
            <p>Smart TV สมาร์ททีวี</p>
            <p>Refrigerator ตู้เย็น</p>
            <p>Microwave ไมโครเวฟ</p>
          </div>
        </div>
      </div>

      <div className="block md:hidden w-full">
        <div className="flex flex-col items-center  w-full">
          {/* รูปภาพ */}
          <div className="w-full">
            <div>
              <CarouselDemo />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-start items-start px-5 p-2 w-1/2">
            <h2 className="text-xl font-semibold mb-3 text-start">
              สิ่งอำนวยความสะดวก
            </h2>
            <span className="block mb-4  text-right text-gray-400">
              ที่ Sunsea View Residence Kohtao ที่เดียว
            </span>
            <p className="text-lg  text-red-600">ทางเรามีบริการ ให้ทุกห้อง!!</p>
            <p>Free wifi</p>
            <p>Parking ที่จอดรถ</p>
            <p>Air Conditioner เครื่องปรับอากาศทุกห้อง</p>
            <p>Kitchen มีห้องครัวทุกห้อง</p>
            <p>Hot water มีเครื่องทำน้ำอุ่นทุกห้อง</p>
            <p>Smart TV สมาร์ททีวี</p>
            <p>Refrigerator ตู้เย็น</p>
            <p>Microwave ไมโครเวฟ</p>
          </div>
        </div>
      </div>
    </div>
  );
};

type priceroomlist = {
  title: string;
  price: string;
};

export const TwoCardPriceRoom = ({title,price}:priceroomlist) => {
  return (
    <div className="flex justify-center items-center h-full w-full px-3 md:mx-20">
      <div className="hidden md:block ">

        <div className=" flex flex-row items-center space-x-15 w-full">
                  <div>
          <CarouselDemo />
        </div>
          {/* Text Content */}
          <div className="flex flex-col justify-start items-start mr-25 p-2 w-full">
            <h2 className="text-xl font-semibold mb-3 text-start">
               {title}
            </h2>
            <span className="block mb-4  text-right text-gray-400">
               {price}
            </span>
            <p className="text-lg  text-red-900">ทางเรามีบริการ ให้ทุกห้อง!!</p>

            <p>Microwave ไมโครเวฟ</p>
            <p>น้ํา 200฿ ต่อหน่วย</p>
            <p>ไฟฟ้า 10฿ ต่อหน่วย</p>
          </div>
        </div>
      </div>

      <div className="block md:hidden w-full">
        <div className="flex flex-col items-center  w-full">
          {/* รูปภาพ */}
          <div className="w-full">
            <div>
              <CarouselDemo />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-start items-start px-5 p-2 w-1/2">
            <h2 className="text-xl font-semibold mb-3 text-start">
               {title}
            </h2>
            <span className="block mb-4  text-right text-gray-400">
              {price}
            </span>
            <p className="text-lg  text-red-600">ทางเรามีบริการ ให้ทุกห้อง!!</p>
            <p>Free wifi</p>
            <p>Parking ที่จอดรถ</p>
            <p>Air Conditioner เครื่องปรับอากาศทุกห้อง</p>
            <p>Kitchen มีห้องครัวทุกห้อง</p>
            <p>Hot water มีเครื่องทำน้ำอุ่นทุกห้อง</p>
            <p>Smart TV สมาร์ททีวี</p>
        <p>น้ํา 200฿ ต่อหน่วย</p>
            <p>ไฟฟ้า 10฿ ต่อหน่วย</p>
          </div>
        </div>
      </div>
    </div>
  );
};
