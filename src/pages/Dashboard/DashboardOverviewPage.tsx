import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation(); // Hook for translations
  const loggedInUser = { name: "John Doe", email: "john.doe@example.com" }; // Mock logged-in user data

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-bold text-foreground mb-6">
          {t("welcome", { name: loggedInUser.name })}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Example widgets */}
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-foreground">
              {t("recentMessages")}
            </h3>
            <p className="text-muted-foreground mt-2">
              {t("recentMessagesDescription")}
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-foreground">
              {t("notifications")}
            </h3>
            <p className="text-muted-foreground mt-2">
              {t("notificationsDescription")}
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-foreground">
              {t("quickStats")}
            </h3>
            <p className="text-muted-foreground mt-2">
              {t("quickStatsDescription")}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
