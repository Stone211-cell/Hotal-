"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "motion/react";
import { useState } from "react";
import { Button } from "./button"; 
import Image from "next/image";


export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[350vh] pt-10 overflow-hidden bg-gray-200  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false); // ใช้ state สำหรับการแสดงผล

  const toggleText = () => {
    setIsExpanded(!isExpanded); // สลับการแสดงข้อความ
  };
  return (
    <div className="max-w-7xl relative mx-auto md:pt-20 px-4 w-full  left-0 top-0">
      <div>
        <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
          The Ultimate <br /> development studio
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
          We build beautiful products with the latest technologies and
          frameworks. We are a team of passionate developers and designers that
          love to build amazing products.
        </p>
      </div>

      <div className="mt-35 flex justify-center justify-self-center item-center ">
        <div className=" flex justify-center item-center text-center flex-col">
          <p className="text-xl text-center font-bold mb-3 text-red-800">
            ยินดีต้อนรับสู่ Sunsea View Residence Kohtao
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-center py-3">
            สัมผัสความสะดวกสบายอันทันสมัยที่โรงแรมของเราในตัวเมืองกรุงเทพ
          </h2>
          <p className="text-sm text-center font-bold mb-5 ">
            หลีกหนีสู่สถานที่ให้ความสุขอันเงียบสงบใจกลางย่านสุราษฎร์ธานีที่ Sunsea View Residence Kohtao
            โรงแรมของเราในใจกลางเมืองสุราษฎร์ธานีเหมาะสำหรับทั้งธุรกิจหรือการพักผ่อน
           
          {isExpanded && (
          <span>
             โดยให้ทั้งความสบายและความสะดวก โรงแรมของเราในย่านสุราษฎร์ธานี
            ตั้งอยู่ใกล้แหล่งท่องเที่ยวในตัวเมืองและสามารถเดินทางไปยังสถานที่ต่างๆได้ง่ายๆ
            ผ่อนคลายที่สระว่ายน้ำและบริการ พักผ่อนหลังจากวันทำงานที่วุ่นวายหรือสำรวจธรรมชาติเมืองสุราษฎร์ธานี
            ลิ้มรสอาหารชั้นเลิศในตัวเมืองสุราษฎร์ธานี ซึ่งมีให้เลือกทั้งอาหารจีน ญี่ปุ่น และไทย
            จัดกิจกรรมองค์กรที่น่าประทับใจที่โรงแรมของเราในตัวเมืองกรุงเทพ
            โดยมีพื้นที่รองรับผู้เข้าร่วมงานได้ถึง 1,500 คน
            พักผ่อนในห้องพักหรือห้องสวีทที่กว้างขวางซึ่งผสมผสานอิทธิพลไทยแบบดั้งเดิมกับกลิ่นอายความทันสมัย
            ที่พักหลายแห่งให้วิวเส้นขอบฟ้าของใจกลางเมืองอันน่าทึ่ง
            สัมผัสประสบการณ์ที่ดีที่สุดของกรุงเทพได้ที่โรงแรมของเราในใจกลางเมืองย่านสุราษฎร์ธานี
          </span>
        )}
      <Button className=" transition-transform duration-200 ease-in-out hover:scale-110  hover:text-shadow-red-500 rounded-sm" onClick={toggleText}>
        {isExpanded ? "ลดน้อยลง" : "...อ่านเพิ่มเติม"}
      </Button>
          </p>    
        </div>
      </div>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0"
    >
      <a href={product.link} className="block group-hover/product:shadow-2xl ">
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </a>
      <div className="absolute inset-0 h-full w-full opacity-40 group-hover/product:opacity-80 bg-black/5 pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
