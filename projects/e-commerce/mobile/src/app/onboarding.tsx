import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Components
import Button from "@/shared/components/button";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Onboarding() {
  const router = useRouter();
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titleHighlight}>Welcome!</Text>
        <Text style={styles.title}>to Our E-Commerce App!</Text>
        <Text style={styles.subtitle}>Discover amazing products and deals.</Text>
      </View>
      <Button title="Get Started" onPress={() => router.push("/login")} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  titleHighlight: {
    fontWeight: "bold",
    color: "blue",
    fontSize: 40,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 24,
    textAlign: "center",
  },
});