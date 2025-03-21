import {
  ChartNoAxesColumnIcon,
  Home,
  LucideChartColumnStacked,
  LucideProps,
  MessageCircleMore,
  Settings,
  TestTubeDiagonalIcon,
  UsersIcon,
  Building2,
  HandCoins,
  Star,
  User,
  Unplug,
  QrCode,
  PhoneCall,
  ShieldCheck,
  KeySquare,
  UserPen,

} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface Item {
  title: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  items?: Item[];
}

const items: Item[] = [
  {
    title: "Overview",
    icon: Home,
    items: [],
  },
  {
    title: "LeaderBoard",
    icon: ChartNoAxesColumnIcon,
    items: [],
  },
  {
    title: "Captain Labs",
    icon: TestTubeDiagonalIcon,
    items: [],
  },
  {
    title: "Inbox",
    icon: MessageCircleMore,
    items: [],
  },
  {
    title: "Stages",
    icon: LucideChartColumnStacked,
    items: [],
  },
  {
    title: "Contacts",
    icon: UsersIcon,
    items: [],
  },
  {
    title: "Settings",
    icon: Settings,
    items: [
      {
        title: "Profile",
        icon: User,
      },
      {
        title: "Account",
        icon: UserPen,
      },

      {
        title: "Bussines Profile",
        icon: Building2,
      },
      {
        title: "Manage Users",
        icon: UsersIcon,
      },{
        title: "Billing",
        icon: HandCoins,
      },
      {
        title: "Branding",
        icon: Star,
      },
      {
        title: "Integration",
        icon: Unplug,
      },
      {
        title: "Website Toolkit",
        icon: KeySquare,
      },
      {
        title: "QR Code",
        icon: QrCode,
      },
      {
        title: "Calls",
        icon: PhoneCall,
      },
      {
        title: "Trust",
        icon: ShieldCheck,
      },
      
    ],
  },
];

export default items;
