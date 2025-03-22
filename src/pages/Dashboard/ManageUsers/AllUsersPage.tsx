import DataTable from "@/components/DataTable";
import { columns } from "@/features/all-users";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

const data = [
  {
    id: "1",
    name: "Jhon Doe",
    email: "user1@example.com",
    role: "Admin",
    lastLogin: "2023-10-01",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "user2@example.com",
    role: "User",
    lastLogin: "2023-10-02",
  },
  {
    id: "3",
    name: "Alice Johnson",
    email: "user3@example.com",
    role: "Moderator",
    lastLogin: "2023-10-03",
  },
];

const AllUsersPage = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <div className="flex items-center gap-4">
        <ArrowLeft onClick={() => navigate(-1)} />
        <h1 className="font-semibold text-xl">All Users</h1>
      </div>

      <div className="mt-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default AllUsersPage;
