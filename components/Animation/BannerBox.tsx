"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export function BannerBox() {
  return (
    <div>
      <div className="relative bg-black overflow-hidden h-[40rem]">
        {/* Neon Red Glow */}
        <div
          className="absolute inset-0 rounded-xl 
          shadow-[0_0_30px_5px_rgba(255,0,0,0.8),0_0_60px_10px_rgba(255,0,0,0.6)] 
          pointer-events-none"
        ></div>

        {/* Background Image with Blur */}
        <Image
          src="/image/Roomprice/Standard/L301/S__19497163_0.jpg"
          alt="ซ่อมประปา"
          className="absolute inset-0 w-full h-full object-cover "
          fill
        />

        {/* Content Overlay */}
        <div className="relative z-10 bg-black/60 p-8 h-[40rem] flex flex-col justify-center text-white text-center  shadow-[0_0_30px_5px_rgba(255,0,0,0.8),0_0_60px_10px_rgba(255,0,0,0.6)]">
          <div className="flex justify-center">
            <Link href="#map">
              <h2 className="text-2xl font-bold bg-white text-black px-4 py-1 rounded-md transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer">
                our hotel
              </h2>
            </Link>
          </div>

          <div className="my-5">
            <h3 className="text-5xl font-bold py-5">
              โรงแรมย่านสุราษฎร์ธานี Sunsea View Residence Kohtao
            </h3>
            <p className="mt-2 text-sm">
              โรงแรมของเราในย่านสุราษฎร์ธานี
              เราพร้อมให้บริการสิ่งอำนวยความสะดวกครบครัน
              เพื่อให้คุณพักผ่อนได้อย่างสะดวกสบายตลอดการเข้าพักที่
              Sunsea View Residence Kohtao
            </p>
          </div>

          <div className="flex justify-center">
            <Link
              href="https://maps.app.goo.gl/HHCnyNu87xprH9Dr7?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <h2 className="text-md font-bold mt-5 bg-red-800 rounded-2xl px-4 py-2 transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer hover:bg-red-700">
                เปิดแผนที่นำทาง
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
