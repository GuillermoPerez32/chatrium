import DataTable from "@/components/DataTable";
import { columns } from "@/features/auto-assign";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";

const data = [
  {
    id: "1",
    name: "Jhon Doe",
    email: "user1@example.com",
    lastLogin: "2023-10-01",
    autoAssign: false,
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "user2@example.com",
    lastLogin: "2023-10-02",
    autoAssign: true,
  },
  {
    id: "3",
    name: "Alice Johnson",
    email: "user3@example.com",
    lastLogin: "2023-10-03",
    autoAssign: false,
  },
];

const AutoAssignPage = () => {
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <div className="flex items-center gap-4">
        <ArrowLeft onClick={() => navigate(-1)} />
        <h1 className="font-semibold text-xl">Auto Assign</h1>
      </div>

      <div className="mt-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default AutoAssignPage;
