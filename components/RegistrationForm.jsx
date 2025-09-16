import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  Alert,
  Platform,
} from "react-native";

export default function RegistrationForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  // Validation
  const validate = () => {
    let valid = true;
    let newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!email.includes("@")) {
      newErrors.email = "Enter a valid email";
      valid = false;
    }
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validate()) {
      Alert.alert("✅ Success", "Registration Successful!");
    }
  };

  const handleClear = () => {
    setName("");
    setEmail("");
    setPassword("");
    setErrors({});
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* Logo */}
          <Image
            source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
            style={styles.logo}
          />

          <Text style={styles.title}>Registration Form</Text>

          {/* Full Name */}
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={name}
            onChangeText={setName}
          />
          {errors.name && <Text style={styles.error}>{errors.name}</Text>}

          {/* Email */}
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          {errors.email && <Text style={styles.error}>{errors.email}</Text>}

          {/* Password */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          {errors.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}

          {/* Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.clearButton]}
              onPress={handleClear}
            >
              <Text style={styles.buttonText}>Clear</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#e0eafc", // soft gradient-like color
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#6a11cb",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 25,
    color: "#333",
    textAlign: "center",
    letterSpacing: 1,
  },
  input: {
    width: "100%",
    padding: 14,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: "#fff",
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  error: {
    width: "100%",
    color: "#f44336",
    marginBottom: 8,
    fontSize: 13,
    fontWeight: "600",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 25,
  },
  button: {
    flex: 1,
    backgroundColor: "#6a11cb",
    padding: 14,
    marginHorizontal: 6,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 4,
  },
  clearButton: {
    backgroundColor: "#f44336",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
});
