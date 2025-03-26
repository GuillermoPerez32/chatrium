import DataTable from "@/components/DataTable";
import { columns } from "@/features/auto-assign";

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
  return (
    <div className="p-4">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default AutoAssignPage;
