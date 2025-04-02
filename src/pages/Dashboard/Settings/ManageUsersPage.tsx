import ListTile from "@/components/ListTile";
import { AppRoutes } from "@/constants";
import { ChevronRight, UserIcon, UserPlusIcon, UsersIcon } from "lucide-react";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

const ManageUsersPage = () => {
  const { t } = useTranslation(); // Hook para traducciones

  return (
    <div className="flex flex-col gap-4 p-4">
      <Link to={AppRoutes.MANAGE_USERS__ALL_USERS}>
        <ListTile
          title={t("allUsers")}
          subtitle={t("allUsersSubtitle")}
          leading={<UserIcon />}
          trailing={<ChevronRight />}
        />
      </Link>

      <Link to={AppRoutes.MANAGE_USERS__TEAMS}>
        <ListTile
          title={t("teams")}
          subtitle={t("teamsSubtitle")}
          leading={<UsersIcon />}
          trailing={<ChevronRight />}
        />
      </Link>

      <Link to={AppRoutes.MANAGE_USERS__AUTO_ASSIGN}>
        <ListTile
          title={t("autoAssign")}
          subtitle={t("autoAssignSubtitle")}
          leading={<UserPlusIcon />}
          trailing={<ChevronRight />}
        />
      </Link>
    </div>
  );
};

export default ManageUsersPage;
