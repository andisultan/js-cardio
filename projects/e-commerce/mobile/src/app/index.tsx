import { Redirect } from "expo-router";

export default function Index() {
  const isLoggedIn = false; // ganti dengan state kamu

  if (!isLoggedIn) {
    return <Redirect href="/onboarding" />;
  }

  return <Redirect href="/(main)" />;
}