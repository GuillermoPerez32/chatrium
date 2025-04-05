import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const FormMessage = ({ children }: Props) => {
  return <span className="text-sm text-destructive">{children}</span>;
};

export default FormMessage;
