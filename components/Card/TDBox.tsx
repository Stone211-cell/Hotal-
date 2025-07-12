import { ThreeDCard } from "./ThreeDCard"

const TDBox = () => {
  return (
    <div className="grid grid-rows-1 gap-2 md:grid-cols-3 ">
         <ThreeDCard title="Sunsea View ResidenceStandard room" img="/image/Roomprice/Standard/L301/LINE_ALBUM_L302. เดือนละ20,000_250712_1.jpg" des="รายเดือน 20,000 ฿ รายสัปดาห์ 10,000 ฿ รายวัน 1800 ฿" />
         <ThreeDCard title="Sunsea View Residence Standard room" img="/image/Roomprice/Standard/L304/LINE_ALBUM_L304. 20,000_250712_5.jpg" des="รายเดือน 20,000 ฿ รายสัปดาห์ 10,000 ฿ รายวัน 1800 ฿" />
         <ThreeDCard title="Sunsea View Residence Standard room" img="/image/Roomprice/Standard/L304/LINE_ALBUM_L304. 20,000_250712_3.jpg" des="รายเดือน 20,000 ฿ รายสัปดาห์ 10,000 ฿ รายวัน 1800 ฿" />
    </div>
  )
}
export default TDBox