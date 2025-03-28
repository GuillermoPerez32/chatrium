import { ReactNode } from "react";
import { Tooltip as ShadcnTooltip } from "./ui/tooltip";
import { TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";

type Props = {
  children: ReactNode;
  title: string;
};

const Tooltip = ({ children, title }: Props) => {
  return (
    <ShadcnTooltip>
      <TooltipTrigger>{children}</TooltipTrigger>
      <TooltipContent>
        <p>{title}</p>
      </TooltipContent>
    </ShadcnTooltip>
  );
};

export default Tooltip;
