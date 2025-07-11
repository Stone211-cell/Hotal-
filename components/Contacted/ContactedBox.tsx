import { ContactIcon } from "./ContactIcon";

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookMessenger,
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
          <ContactIcon
            pops={pops}
            sizeicon="2x"
            coloricon="blue"
            msg="Messenger"
            description="ช่างมิล วิศกรการประปา"
            LINKBTN="https://www.facebook.com/share/1SAASdGE8Y/?mibextid=wwXIfr"
            icontype={faFacebookMessenger}
            classtype={classtype}
          />

          <ContactIcon
            pops={pops}
            sizeicon="2x"
            coloricon="blue"
            msg="Facebook"
            description="ช่างมิล วิศกรการประปา"
            LINKBTN="https://www.facebook.com/share/1SAASdGE8Y/?mibextid=wwXIfr"
            icontype={faFacebook}
            classtype={classtype}
          />

          <span className="pr-10 ">
            <ContactIcon
              pops={pops}
              sizeicon="2x"
              coloricon="red"
              msg="โทรสอบถาม"
              description="064-408-8510"
              LINKBTN="tel:0644088510"
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
              description="096-979-2757"
              LINKBTN="tel:0969792757"
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
              description="064-408-8510"
              LINKBTN="tel:0644088510"
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
