import { ChevronDown } from "lucide-react";
import { ReactNode, useState } from "react";

interface Props {
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

const DropDown = ({ title, subtitle, icon, children }: Props) => {
  const [open, setIsOpen] = useState(false);

  return (
    <div className="p-3 border bg-card rounded-md hover:bg-card/90">
      <div
        className="flex items-center justify-between cursor-pointer "
        onClick={() => setIsOpen(!open)}
      >
        {icon}
        <div className="flex flex-col">
          <span className="text-sm font-medium">{title}</span>
          <span className="text-xs text-muted-foreground">{subtitle}</span>
        </div>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>
      {open && <div className="mt-6 border-t pt-6">{children}</div>}
    </div>
  );
};

export default DropDown;
