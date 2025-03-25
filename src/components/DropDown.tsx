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
    <div className="p-3 bg-white rounded-t-md hover:bg-slate-50">
      <div
        className="flex items-center justify-between cursor-pointer "
        onClick={() => setIsOpen(!open)}
      >
        {icon}
        <div className="flex flex-col">
          <span className="text-sm font-medium">{title}</span>
          <span className="text-xs text-gray-500">{subtitle}</span>
        </div>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>
      {open && <div className="rounded-b-md border border-t-0">{children}</div>}
    </div>
  );
};

export default DropDown;
