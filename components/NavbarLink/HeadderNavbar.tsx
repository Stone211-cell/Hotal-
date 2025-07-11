
import Dropdown from "./Dropdown";


// import { faPhone } from "@fortawesome/free-solid-svg-icons";
// import {
//   faFacebook,
//   faFacebookMessenger,
//   faLine,
// } from "@fortawesome/free-brands-svg-icons";
// import { ContactIcon } from "../Contacted/ContactIcon";

const HeadderNavbar = () => {
  return (
    <div className="flex justify-between items-center p-4 w-full overflow-x-hidden border-b-1 ">
      <div></div>

      <div className="flex  gap-4 items-center max-w-full ">
        {/* <span>
          <ContactIcon
            pops="hidden"
            sizeicon="2x"
            coloricon="blue"
            msg="Messenger"
            description="ช่างมิล วิศกรการประปา"
            LINKBTN="https://www.facebook.com/share/1SAASdGE8Y/?mibextid=wwXIfr"
            icontype={faFacebookMessenger}
          />
        </span>
        <span>
          <ContactIcon
            pops="hidden"
            sizeicon="2x"
            coloricon="blue"
            msg="Facebook"
            description="ช่างมิล วิศกรการประปา"
            LINKBTN="https://www.facebook.com/share/1SAASdGE8Y/?mibextid=wwXIfr"
            icontype={faFacebook}
          />
        </span>
        <span>
          <ContactIcon
            pops="hidden"
            sizeicon="2x"
            coloricon="red"
            msg="Contact Us"
            description="064-408-8510"
            LINKBTN="tel:0644088510"
            icontype={faPhone}
          />
        </span>
        <span>
          <ContactIcon
            pops="hidden"
            sizeicon="2x"
            coloricon="green"
            msg="Contact Us"
            description="064-408-8510"
            LINKBTN="tel:0644088510"
            icontype={faLine}
          />
        </span> */}

        <div>
          <Dropdown />
        </div>
      </div>
    </div>
  );
};
export default HeadderNavbar;
