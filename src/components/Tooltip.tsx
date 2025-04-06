import { ReactNode } from "react";
import {
  Tooltip as ShadcnTooltip,
  TooltipContent,
  TooltipTrigger,
} from "./ui/tooltip";

type Props = {
  children: ReactNode;
  title: string;
};

const Tooltip = ({ children, title }: Props) => {
  return (
    <ShadcnTooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent>{title}</TooltipContent>
    </ShadcnTooltip>
  );
};

export default Tooltip;
