import { View, Text, StyleSheet } from "react-native";
import Button from "@/shared/components/button";
import { useRouter } from "expo-router";

export default function NotFound() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>404 - Halaman tidak ditemukan</Text>
      <Button title="Kembali ke Home" onPress={() => router.push("/")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 18,
    marginBottom: 10
  }
});