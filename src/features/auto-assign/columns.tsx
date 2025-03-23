import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { ColumnDef } from "@tanstack/react-table";
import moment from "moment";

export type User = {
  id: string;
  name: string;
  email: string;
  autoAssign: boolean;
  lastLogin: string;
};

const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "User",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold">{user.name}</span>
            <span className="text-gray-500">{user.email}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "lastLogin",
    header: "Last Login",
    cell: ({ row }) => {
      const date = moment(row.original.lastLogin).format("LLL");
      return <span>{date}</span>;
    },
  },
  {
    accessorKey: "autoAssign",
    header: "Auto Asign",
    cell: ({ row }) => {
      return <Switch defaultChecked={row.original.autoAssign} />;
    },
  },
];

export default columns;
