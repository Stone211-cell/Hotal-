import Image from "next/image";
import React from "react";

interface CardProps {
  imgSrc: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
}

export default function FloatingShadowCard({
  imgSrc,
  title,
  description,
  buttonText,

}: CardProps) {
  return (
    <div className="max-w-sm bg-white rounded-xl overflow-hidden relative
                    shadow-[10px_10px_15px_rgba(0,0,0,0.1)] 
                    hover:shadow-[15px_15px_25px_rgba(0,0,0,0.15)] 
                    transition-shadow duration-300
                    border border-gray-200">
      {/* รูปด้านบน */}
      <Image
        src={imgSrc}
        alt={title}
        className="w-full h-48 object-cover rounded-t-xl"
        loading="lazy"
        fill
      />

      {/* เนื้อหาใน card */}
      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">{title}</h2>
        <p className="text-gray-600 text-sm mb-5">{description}</p>

        {/* ปุ่ม */}
        <button
          className="px-5 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 
                     text-white rounded-full shadow-md 
                     hover:from-indigo-600 hover:to-purple-600 
                     transition-colors duration-300 ease-in-out
                     active:scale-95 focus:outline-none focus:ring-4 focus:ring-indigo-300"
        >
          {buttonText}
        </button>
      </div>

      {/* เงาขอบซ้ายล่าง (เลียนแบบเงา floating) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-2 left-2 w-full h-full
                   rounded-xl
                   shadow-[10px_10px_20px_rgba(0,0,0,0.15)]
                   -z-10"
      />
    </div>
  );
}
