import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit3Icon, MessageCircleMoreIcon, UserIcon } from "lucide-react"; // Make sure to import the icons

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
    <>
      <div className="px-4 py-2 mb-4 text-lg font-semibold text-primary">
        Total users: {data.length}
      </div>
      <div className="flex flex-col gap-4 p-4">
        {data.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle>{user.name}</CardTitle>
                <div className="flex gap-6">
                  <Edit3Icon className="size-4 text-muted-foreground hover:text-muted-foreground cursor-pointer" />
                  <MessageCircleMoreIcon className="size-4 text-muted-foreground hover:text-muted-foreground cursor-pointer" />
                  <UserIcon className="size-4 text-destructive hover:text-muted-foreground cursor-pointer" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="text-sm space-y-1">
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Role:</strong> {user.role}
              </p>
              <p>
                <strong>Last Login:</strong> {user.lastLogin}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default AllUsersPage;
