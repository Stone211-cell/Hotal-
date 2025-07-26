import { ThreeDCardStandardroom,ThreeDCardSeaviewroom } from "./ThreeDCard"

const TDBox = () => {
  return (
    <div className="grid grid-rows-1 gap-2 lg:grid-cols-3 ">
         <ThreeDCardStandardroom title="Sunsea View Residence Standard room"  des=" " />
         <ThreeDCardSeaviewroom title="Sunsea View Residence Seaview room"  des=" " />
      
    </div>
  )
}
export default TDBox
