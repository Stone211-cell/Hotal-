import { ContactIcon } from "./ContactIcon";

import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import {

  faLine,
} from "@fortawesome/free-brands-svg-icons";


type classtype = {
  classtype?: string;
  pops?: string;
};
const ContactedBox = ({ classtype, pops }: classtype) => {
  return (
    <div>
      {" "}
      <div className="  justify-items-center ">
        <div className="grid grid-cols-1 px-5 gap-5  md:grid-cols-2 justify-items-center  ">
          <span className="pr-10">

                     <ContactIcon
                       sizeicon="2x"
                       coloricon="red"
                       msg=" เปิดแผนที่นำทาง"
                       LINKBTN="https://maps.app.goo.gl/HHCnyNu87xprH9Dr7?g_st=ic"
                       icontype={faLocationDot}
                       classtype=""
                       />

                       </span>
        
          <span className="pr-10 ">
            <ContactIcon
              pops={pops}
              sizeicon="2x"
              coloricon="red"
              msg="โทรสอบถาม"
              description="097-295-5416"
              LINKBTN="tel:0972955416"
              icontype={faPhone}
              classtype={classtype}
            />
          </span>
          <span className="pr-10 ">
            <ContactIcon
              pops={pops}
              sizeicon="2x"
              coloricon="red"
              msg="โทรสอบถาม"
              description="093-578-9499"
              LINKBTN="tel:093-578-9499"
              icontype={faPhone}
              classtype={classtype}
            />
          </span>
          <span className="pr-10">
            <ContactIcon
              pops={pops}
              sizeicon="2x"
              coloricon="green"
              msg="LINE ID"
              description="097-295-5416"
              LINKBTN="tel:0972955416"
              icontype={faLine}
              classtype={classtype}
            />
          </span>
        </div>
      </div>
    </div>
  );
};
export default ContactedBox;
