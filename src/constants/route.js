import {
  DashboardIcon,
  AnalyticsIcon,
  HomeIcon,
  ChatIcon,
  DebitIcon,
  SettingIcon,
} from "../assets";
import { FiLink } from "react-icons/fi";
import { BiSolidNotepad } from "react-icons/bi";
import { IoTicketSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa6";

const routes = [
  {
    name: "Home",
    route: "/profile",
    icon: HomeIcon,
  },
  {
    name: "Therapists",
    route: "/therapist",
    icon: DashboardIcon,
  },
  {
    name: "My Schedule",
    route: "/profile/schedule",
    icon: AnalyticsIcon,
  },
  {
    name: "Support",
    route: "/contact",
    icon: ChatIcon,
  },
  {
    name: "Settings",
    route: "/profile/settings",
    icon: SettingIcon,
  },
  {
    name: "Know More",
    route: "/profile/tnc",
    icon: DebitIcon,
    childNavs: [
      {
        name: "FAQs",
        route: "/faq",
        icon: BiSolidNotepad,
      },
      {
        name: "Terms and Conditions",
        route: "/terms-and-conditions",
        icon: BiSolidNotepad,
      },

      {
        name: "Privacy Policy",
        route: "/privacy-policy",
        icon: BiSolidNotepad,
      },
    ],
  },
];
export default routes;
