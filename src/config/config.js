const config = {
  appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
  projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  zegocloudID: import.meta.env.VITE_ZEGOCLOUD_APP_ID,
  zegocloudSecret: String(import.meta.env.VITE_ZEGOCLOUD_SERVER_SECRET),
};

export default config;
