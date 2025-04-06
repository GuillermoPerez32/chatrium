import Tooltip from "@/components/Tooltip";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

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
    <>
      <div className="px-4 py-2 mb-4 text-lg font-semibold text-primary">
        Total users: {data.length}
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm space-y-1">
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Last Login:</strong> {user.lastLogin}
              </p>
              <div className="flex items-center gap-2">
                <strong>Auto Assign:</strong>{" "}
                <Tooltip title="Checked status">
                  <Switch defaultChecked={user.autoAssign} />
                </Tooltip>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default AutoAssignPage;
