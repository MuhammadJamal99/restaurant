import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPizzaSlice,
  faClipboardList,
  faDollarSign,
  faMapSigns,
  faPhoneAlt,
  faHome,
  faAt,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTripadvisor,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const solidIcons = [
  faPizzaSlice,
  faClipboardList,
  faDollarSign,
  faMapSigns,
  faPhoneAlt,
  faHome,
  faAt,
  faExclamationTriangle,
];

const brandIcons = [faFacebookF, faTripadvisor, faGithub];

library.add(...solidIcons, ...brandIcons);
