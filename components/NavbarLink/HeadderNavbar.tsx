
import Dropdown from "./Dropdown";


import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import {

  faLine,
} from "@fortawesome/free-brands-svg-icons";
import { ContactIcon } from "../Contacted/ContactIcon";

const HeadderNavbar = () => {
  return (
    <div className="flex justify-between items-center p-4 w-full overflow-x-hidden border-b-1 ">
      <div></div>

      <div className="flex  gap-4 items-center max-w-full ">

          <span>

                     <ContactIcon pops="hidden"
                       sizeicon="2x"
                       coloricon="red"
                       msg=" เปิดแผนที่นำทาง"
                       LINKBTN="https://maps.app.goo.gl/HHCnyNu87xprH9Dr7?g_st=ic"
                       icontype={faLocationDot}
                       classtype=""
                       />

                       </span>
        
          <span >
            <ContactIcon
           pops="hidden"
              sizeicon="2x"
              coloricon="red"
              msg="โทรสอบถาม"
              description="097-295-5416"
              LINKBTN="tel:0972955416"
              icontype={faPhone}
       
            />
          </span>
          <span >
            <ContactIcon
           pops="hidden"
              sizeicon="2x"
              coloricon="red"
              msg="โทรสอบถาม"
              description="093-578-9499"
              LINKBTN="tel:093-578-9499"
              icontype={faPhone}
             
            />
          </span>
          <span>
            <ContactIcon
          pops="hidden"
              sizeicon="2x"
              coloricon="green"
              msg="LINE ID"
              description="097-295-5416"
              LINKBTN="tel:0972955416"
              icontype={faLine}
        
            />
          </span>
        <div>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};
export default HeadderNavbar;
