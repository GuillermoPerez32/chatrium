import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ColumnDef } from "@tanstack/react-table";
import { Edit3Icon, MessageCircleMoreIcon, UserIcon } from "lucide-react";
import moment from "moment";

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
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
    accessorKey: "role",
    header: "Role",
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
    id: "actions",
    header: "Actions",
    cell: () => {
      return (
        <div className="flex gap-6">
          <Edit3Icon className="size-4 text-gray-500 hover:text-gray-700 cursor-pointer" />
          <MessageCircleMoreIcon className="size-4 text-gray-500 hover:text-gray-700 cursor-pointer" />
          <UserIcon className="size-4 text-red-500 hover:text-gray-700 cursor-pointer" />
        </div>
      );
    },
  },
];

export default columns;
