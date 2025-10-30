const getBaseUrl = () => {
  return process.env.EXPO_PUBLIC_API_URL || "http://localhost:3000";
};

export const config = {
  apiUrl: process.env.EXPO_PUBLIC_API_URL || getBaseUrl(),
};
