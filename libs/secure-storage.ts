import * as SecureStore from "expo-secure-store";

export async function saveAccessToken(token: string): Promise<boolean> {
  try {
    await SecureStore.setItemAsync("accessToken", token);
    return true;
  } catch (error) {
    console.error("Error saving access token:", error);
    return false;
  }
}

export async function getAccessToken(): Promise<string | null> {
  try {
    const token = await SecureStore.getItemAsync("accessToken");
    return token;
  } catch (error) {
    console.error("Error retrieving access token:", error);
    return null;
  }
}

export async function deleteAccessToken(): Promise<boolean> {
  try {
    await SecureStore.deleteItemAsync("accessToken");
    return true;
  } catch (error) {
    console.error("Error deleting access token:", error);
    return false;
  }
}
