import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

// Components
import Button from "@/shared/components/button";
import Input from "@/shared/components/input";

// API
import { authRegister } from "@/modules/auth/api";

type FormField = "email" | "password" | "name";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  });

  const handleInputChange = (field: FormField, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      console.log("Attempting registration with:", formData);

      const response = await authRegister({
        email: formData.email,
        password: formData.password,
        name: formData.name
      });

      console.log("Registration successful:", response);
    } catch (error) {
      console.error("Error during registration:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Register</Text>

      <Input
        placeholder="Name"
        autoCapitalize="words"
        onChangeText={value => handleInputChange("name", value)}
      />

      <Input
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={value => handleInputChange("email", value)}
      />

      <Input
        placeholder="Password"
        secureTextEntry={true}
        autoCapitalize="none"
        onChangeText={value => handleInputChange("password", value)}
      />

      <Button
        title={loading ? "Loading..." : "Register"}
        onPress={handleSubmit}
        disabled={loading}
      />

      <Text style={styles.footerText}>
        Have an account?
        <Link href="/login" style={styles.link}> Login</Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    paddingHorizontal: 16
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "600"
  },
   footerText: {
    marginTop: 16,
    textAlign: "center"
  },
  link: {
    color: "blue"
  }
});