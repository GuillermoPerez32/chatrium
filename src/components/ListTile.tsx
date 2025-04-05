import { ReactNode } from "react";

interface Props {
  /** The title of the dropdown */
  title?: string;
  /** The subtitle of the dropdown */
  subtitle?: string;
  /** The component to render to the end */
  trailing?: ReactNode;
  /** The component to render to the left */
  leading?: ReactNode;
  /** Callback function */
  onClick?: () => void;
}

const ListTile = ({ title, subtitle, trailing, leading, onClick }: Props) => {
  return (
    <>
      <div
        className="flex items-center justify-between cursor-pointer p-3 bg-slate-100 rounded-t-md hover:bg-primary-100"
        onClick={onClick}
      >
        {leading}
        <div className="flex flex-col ml-4">
          <span className="text-sm font-medium">{title}</span>
          <span className="text-xs text-muted-foreground">{subtitle}</span>
        </div>

        <div className="ml-auto">{trailing}</div>
      </div>
    </>
  );
};

export default ListTile;
