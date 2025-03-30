import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const FormMessage = ({ children }: Props) => {
  return <span className="text-sm text-red-500">{children}</span>;
};

export default FormMessage;
