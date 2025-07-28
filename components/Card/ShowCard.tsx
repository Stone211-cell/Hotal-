
import Link from "next/link";
import {
  CarouselSeaviewroom,
  CarouselStandardroom,
} from "../Animation/CarouselDemo";


const ShowCard = () => {
  return (
    <div className="">
      <div className="grid grid-rows-1 gap-6 justify-center rounded-xl mx-5 p-6">
        <div className="flex justify-center items-center">
          <CarouselStandardroom />
        </div>

        <div className="text-start">
          <h2 className="text-2xl font-semibold mb-2 text-red-800">Standardroom</h2>
          <p className="text-gray-700"> </p>
           <div className="flex justify-end">
         <Link
  href="tel:0972955416"
  className="bg-red-800 text-white rounded-2xl mt-2 p-2 px-3 shadow-md transition-transform duration-200 ease-in-out hover:scale-110"
>
  Book!!
</Link>
    </div>
        </div>
      </div>

      <div className="grid grid-rows-1 gap-6 justify-center rounded-xl mx-5 p-6">
        <div className="flex justify-center items-center">
          <CarouselSeaviewroom />
        </div>

        <div className="text-start">
          <h2 className="text-2xl font-semibold mb-4 text-red-800">Seaviewroom</h2>
          <p className="text-gray-700"> </p>
          <div className="flex justify-end">
         <Link
  href="tel:0972955416"
  className="bg-red-800 text-white rounded-2xl mt-2 p-2 px-3 shadow-md transition-transform duration-200 ease-in-out hover:scale-110"
>
  Book!!
</Link>
    </div>

        </div>
      </div>
    </div>
  );
};
export default ShowCard;
