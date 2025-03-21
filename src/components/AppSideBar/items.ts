import {
  ChartNoAxesColumnIcon,
  Home,
  LucideChartColumnStacked,
  LucideProps,
  MessageCircleMore,
  Settings,
  TestTubeDiagonalIcon,
  UsersIcon,
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
        icon: UsersIcon,
      },
      {
        title: "Account",
        icon: UsersIcon,
      },
    ],
  },
];

export default items;
