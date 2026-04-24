import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

// Components
import Button from "@/shared/components/button";
import Input from "@/shared/components/input";

// API
import { authLogin } from "@/modules/auth/api";

type FormField = "email" | "password";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const onInputChange = (field: FormField, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await authLogin({
        email: formData.email,
        password: formData.password
      });

      console.log("Login successful:", response);
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Ornament  */}
      <View style={styles.circleLeft} />
      <View style={styles.circleRight} />

      <View style={styles.image} />

      <View style={styles.form}>
        <Input
          label="Email"
          placeholder="Enter your email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={value => onInputChange("email", value)}
        />

        <Input
          label="Password"
          placeholder="Enter your password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={value => onInputChange("password", value)}
        />

        <Button
          title={loading ? "Loading..." : "Login"}
          onPress={handleSubmit}
          disabled={loading}
        />

        <Text style={styles.accountText}>
          Don&apos;t have an account? 
          <Link href="/register" style={styles.link}> Register</Link>
        </Text>
      </View>

      <View style={styles.footer}>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eafe7c",
    flex: 1,
  },
  accountText: {
    marginTop: 16,
    textAlign: "center"
  },
  link: {
    color: "blue"
  },
  circleLeft: {
    position: "absolute",
    top: -10,
    left: -10,
    width: 150,
    height: 150,
    borderRadius: '50%',
    backgroundColor: "#c2d940"
  },
  circleRight: {
    position: "absolute",
    top: 50,
    right: -50,
    width: 200,
    height: 200,
    borderRadius: 200,
    backgroundColor: "#c2d940"
  },
  image: {
    width: 120,
    height: 120,
    backgroundColor: "#c2d940",
    borderRadius: 8,
    alignSelf: "center",
    marginBottom: 32,
  },
  form: {
    paddingHorizontal: 16,
  },
  footer: {
    backgroundColor: "#c2d940",
    padding: 16,
    borderTopEndRadius: 16,
    borderTopStartRadius: 16,
    flex: 1,
    marginTop: 32,
  }
});