import { AppRoutes } from "@/constants";
import {
  ChartNoAxesColumnIcon,
  Home,
  LucideProps,
  MessageCircleMore,
  Settings,
  UsersIcon,
  Building2,
  HandCoins,
  Star,
  User,
  Unplug,
  QrCode,
  KeySquare,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

interface Item {
  title: string;
  icon: ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
  items?: SubItem[];
}

interface SubItem extends Omit<Item, "items"> {
  url: string;
}

const items: Item[] = [
  {
    title: "Dashboard",
    icon: Home,
    items: [],
  },
  {
    title: "LeaderBoard",
    icon: ChartNoAxesColumnIcon,
    items: [],
  },
  {
    title: "Inbox",
    icon: MessageCircleMore,
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
        title: "Your Profile",
        icon: User,
        url: AppRoutes.PROFILE,
      },
      {
        title: "Bussines Profile",
        icon: Building2,
        url: AppRoutes.BUSINESS_PROFILE,
      },
      {
        title: "Manage Users",
        icon: UsersIcon,
        url: AppRoutes.MANAGE_USERS,
      },
      {
        title: "Billing",
        icon: HandCoins,
        url: AppRoutes.BILLING,
      },
      {
        title: "Branding",
        icon: Star,
        url: AppRoutes.BRANDING,
      },
      {
        title: "Integration",
        icon: Unplug,
        url: AppRoutes.INTEGRATION,
      },
      {
        title: "Website Toolkit",
        icon: KeySquare,
        url: AppRoutes.WEBSITE_TOOLKIT,
      },
      {
        title: "QR Code",
        icon: QrCode,
        url: AppRoutes.QR_CODE,
      },
    ],
  },
];

export default items;
