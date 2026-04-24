import { View, Text, StyleSheet } from "react-native";
import Button from "@/shared/components/button";
import { useRouter } from "expo-router";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text>Tabs Index</Text>
      <Button title="Login" onPress={() => router.push("/login")} />
    </View>
  )
}