import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const FormLabel = ({ children }: Props) => {
  return <span className="font-semibold text-sm">{children}</span>;
};

export default FormLabel;
