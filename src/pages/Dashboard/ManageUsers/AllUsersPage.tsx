import DataTable from "@/components/DataTable";
import { columns } from "@/features/all-users";

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
  return (
    <div className="p-4">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default AllUsersPage;
