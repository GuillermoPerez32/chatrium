import ListTile from "@/components/ListTile";
import { AppRoutes } from "@/constants";
import { ChevronRight, UserIcon, UserPlusIcon, UsersIcon } from "lucide-react";
import { Link } from "react-router";

const ManageUsersPage = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <Link to={AppRoutes.MANAGE_USERS__ALL_USERS}>
        <ListTile
          title="All Users"
          subtitle="Add, manage, invite, or archive user profiles."
          leading={<UserIcon />}
          trailing={<ChevronRight />}
        />
      </Link>

      <Link to={AppRoutes.MANAGE_USERS__TEAMS}>
        <ListTile
          title="Teams"
          subtitle="Create a team to efficiently respond to messages in Webchat or Inbox."
          leading={<UsersIcon />}
          trailing={<ChevronRight />}
        />
      </Link>

      <Link to={AppRoutes.MANAGE_USERS__AUTO_ASSIGN}>
        <ListTile
          title="Auto Assign"
          subtitle="Select a group of users to auto assign conversations to them."
          leading={<UserPlusIcon />}
          trailing={<ChevronRight />}
        />
      </Link>
    </div>
  );
};

export default ManageUsersPage;
