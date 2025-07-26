import Image from "next/image";
import { CarouselSeaviewroom, CarouselStandardroom } from "../Animation/CarouselDemo";

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
    <div className="flex justify-center items-center w-full px-3 md:px-20 py-10 bg-gray-50">
      {/* สำหรับ Desktop */}
      <div className="hidden md:flex flex-row items-center space-x-10 max-w-7xl w-full">
       

        <div
          className="flex-1 bg-white rounded-xl p-6
                     shadow-[ -8px_8px_20px_rgba(0,0,0,0.15), -15px_15px_30px_rgba(0,0,0,0.1)]
                     border border-gray-300 max-w-md"
        >
          <h2 className="text-2xl font-bold mb-3 text-center text-gray-800">จุดเด่น</h2>
          <span className="block mb-4 text-gray-500 text-center">
            ที่ Sunsea View Residence Kohtao ที่เดียว
          </span>
          <ul className="text-gray-700 space-y-1 pl-4 list-disc">
            <li className="text-red-700 font-semibold">บริการให้ทุกห้อง!!</li>
            <li>Free wifi</li>
            <li>Parking ที่จอดรถ</li>
            <li>Air Conditioner เครื่องปรับอากาศ</li>
            <li>Kitchen มีห้องครัว</li>
            <li>Hot water เครื่องทำน้ำอุ่น</li>
            <li>Smart TV สมาร์ททีวี</li>
            <li>Refrigerator ตู้เย็น</li>
            <li>Microwave ไมโครเวฟ</li>
          </ul>
        </div>

         <div className="flex-1">
          <CarouselStandardroom />
        </div>
      </div>

      {/* สำหรับมือถือ */}
      <div className="md:hidden w-full space-y-6 px-4">
        <CarouselStandardroom />

        <div
          className="bg-white rounded-xl p-6
                     shadow-[ -8px_8px_20px_rgba(0,0,0,0.15), -15px_15px_30px_rgba(0,0,0,0.1)]
                     border border-gray-300"
        >
          <h2 className="text-2xl font-bold mb-3 text-center text-gray-800">จุดเด่น</h2>
          <span className="block mb-4 text-gray-500 text-center">
            ที่ Sunsea View Residence Kohtao ที่เดียว
          </span>
          <ul className="text-gray-700 space-y-1 pl-4 list-disc">
            <li className="text-red-700 font-semibold">บริการให้ทุกห้อง!!</li>
            <li>Free wifi</li>
            <li>Parking ที่จอดรถ</li>
            <li>Air Conditioner เครื่องปรับอากาศ</li>
            <li>Kitchen มีห้องครัว</li>
            <li>Hot water เครื่องทำน้ำอุ่น</li>
            <li>Smart TV สมาร์ททีวี</li>
            <li>Refrigerator ตู้เย็น</li>
            <li>Microwave ไมโครเวฟ</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const TwoCardCR = () => {
  return (
    <div className="flex justify-center items-center w-full px-3 md:px-20 py-10 bg-gray-50">
      {/* สำหรับ Desktop */}
      <div className="hidden md:flex flex-row items-center space-x-10 max-w-7xl w-full">
        <div className="flex-1">
          <CarouselSeaviewroom />
        </div>

        <div
          className="flex-1 bg-white rounded-xl p-6
                     shadow-[ -8px_8px_20px_rgba(0,0,0,0.15), -15px_15px_30px_rgba(0,0,0,0.1)]
                     border border-gray-300 max-w-md"
        >
          <h2 className="text-2xl font-bold mb-3 text-center text-gray-800">จุดเด่น</h2>
          <span className="block mb-4 text-gray-500 text-center">
            ที่ Sunsea View Residence Kohtao ที่เดียว
          </span>
          <ul className="text-gray-700 space-y-1 pl-4 list-disc">
            <li className="text-red-700 font-semibold">บริการให้ทุกห้อง!!</li>
            <li>Free wifi</li>
            <li>Parking ที่จอดรถ</li>
            <li>Air Conditioner เครื่องปรับอากาศ</li>
            <li>Kitchen มีห้องครัว</li>
            <li>Hot water เครื่องทำน้ำอุ่น</li>
            <li>Smart TV สมาร์ททีวี</li>
            <li>Refrigerator ตู้เย็น</li>
            <li>Microwave ไมโครเวฟ</li>
          </ul>
        </div>
      </div>

      {/* สำหรับมือถือ */}
      <div className="md:hidden w-full space-y-6 px-4">
        <CarouselSeaviewroom />

        <div
          className="bg-white rounded-xl p-6
                     shadow-[ -8px_8px_20px_rgba(0,0,0,0.15), -15px_15px_30px_rgba(0,0,0,0.1)]
                     border border-gray-300"
        >
          <h2 className="text-2xl font-bold mb-3 text-center text-gray-800">จุดเด่น</h2>
          <span className="block mb-4 text-gray-500 text-center">
            ที่ Sunsea View Residence Kohtao ที่เดียว
          </span>
          <ul className="text-gray-700 space-y-1 pl-4 list-disc">
            <li className="text-red-700 font-semibold">บริการให้ทุกห้อง!!</li>
            <li>Free wifi</li>
            <li>Parking ที่จอดรถ</li>
            <li>Air Conditioner เครื่องปรับอากาศ</li>
            <li>Kitchen มีห้องครัว</li>
            <li>Hot water เครื่องทำน้ำอุ่น</li>
            <li>Smart TV สมาร์ททีวี</li>
            <li>Refrigerator ตู้เย็น</li>
            <li>Microwave ไมโครเวฟ</li>
          </ul>
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
          <CarouselStandardroom />
        </div >
          {/* Text Content */}
          <div className="flex flex-col justify-start items-start mr-25  w-full bg-white rounded-xl p-6
                     shadow-[ -8px_8px_20px_rgba(0,0,0,0.15), -15px_15px_30px_rgba(0,0,0,0.1)]
                     border border-gray-300 max-w-md" >
            <h2 className="text-xl font-semibold mb-3 text-start">
               {title}
            </h2>
            <span className="block mb-4  text-right text-gray-400">
               {price}  <br />
               Monthly 20,000฿ Weekly 10,000 ฿ Daily  1800 ฿

            </span>
            <p className="text-lg  text-red-900">ทางเรามีบริการ ให้ทุกห้อง!!</p>


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
              <CarouselStandardroom />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-start items-start mx-4 w-full bg-white rounded-xl p-6
                     shadow-[ -8px_8px_20px_rgba(0,0,0,0.15), -15px_15px_30px_rgba(0,0,0,0.1)]
                     border border-gray-300 max-w-md">
            <h2 className="text-xl font-semibold mb-3 text-start">
               {title}
            </h2>
            <span className="block mb-4  text-right text-gray-400">
              {price} <br />
               Monthly 20,000฿ Weekly 10,000 ฿ Daily  1800 ฿
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

export const TwoCardPriceSeaRoom = ({title,price}:priceroomlist) => {
  return (
    <div className="flex justify-center items-center h-full w-full px-3 md:mx-20">
      <div className="hidden md:block ">

        <div className=" flex flex-row items-center space-x-15 w-full">
                  <div>
          <CarouselSeaviewroom />
        </div>
          {/* Text Content */}
          <div className="flex flex-col justify-start items-start mr-25  w-full bg-white rounded-xl p-6
                     shadow-[ -8px_8px_20px_rgba(0,0,0,0.15), -15px_15px_30px_rgba(0,0,0,0.1)]
                     border border-gray-300 max-w-md">
            <h2 className="text-xl font-semibold mb-3 text-start">
               {title}
            </h2>
            <span className="block mb-4  text-right text-gray-400">
               {price}  <br />
                Monthly 25,000฿ Weekly 12,000฿ Daily  2400 ฿
            </span>
            <p className="text-lg  text-red-900">ทางเรามีบริการ ให้ทุกห้อง!!</p>

           
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
              <CarouselSeaviewroom />
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col justify-start items-start mx-4 w-full bg-white rounded-xl p-6
                     shadow-[ -8px_8px_20px_rgba(0,0,0,0.15), -15px_15px_30px_rgba(0,0,0,0.1)]
                     border border-gray-300 max-w-md">
            <h2 className="text-xl font-semibold mb-3 text-start">
               {title}
            </h2>
            <span className="block mb-4  text-right text-gray-400">
              {price}  <br />
                Monthly 25,000฿ Weekly 12,000฿ Daily  2400 ฿
            </span>
            <p className="text-lg  text-red-600">ทางเรามีบริการ ให้ทุกห้อง!!</p>

        <p>น้ํา 200฿ ต่อหน่วย</p>
            <p>ไฟฟ้า 10฿ ต่อหน่วย</p>
          </div>
        </div>
      </div>
    </div>
  );
};
