enum AppRoutes {
  HOME = "/",

  LOGIN = "/login",
  RECOVER_PASSWORD = "/passrecover",
  TRIAL_REQUEST = "/trial-request",
  OTP_VERIFICATION = "/otp-verification",

  DASHBOARD = "/dashboard/home",

  //Settings
  PROFILE = "/dashboard/profile",
  BUSINESS_PROFILE = "/dashboard/business-profile",
  MANAGE_USERS = "/dashboard/manage-users",
  MANAGE_USERS__ALL_USERS = "/dashboard/manage-users/all-users",
  MANAGE_USERS__AUTO_ASSIGN = "/dashboard/manage-users/auto-assing",
  MANAGE_USERS__TEAMS = "/dashboard/manage-users/teams",
  BILLING = "/dashboard/billing",
  BRANDING = "/dashboard/branding",
  INTEGRATION = "/dashboard/integration",
  WEBSITE_TOOLKIT = "/dashboard/website-toolkit",
  QR_CODE = "/dashboard/qr-code",
  CALLS = "/dashboard/calls",
}

export default AppRoutes;
