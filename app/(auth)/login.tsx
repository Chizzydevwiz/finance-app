import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
const router = useRouter();

const handleContinue = () => {
  router.replace('/(tabs)');
};

export default function LoginScreen() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    if (!password) {
      alert("Enter password");
      return;
    }

    // Navigate after login
    router.push("/wallet"); // make sure wallet.tsx exists
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>XEND Finance</Text>

      <View style={styles.profile}>
        <View style={styles.avatar} />
        <Text style={styles.welcome}>Welcome, Chizzy_IkeMbah</Text>
      </View>

      <Text style={styles.label}>Enter your password</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your Password"
          placeholderTextColor="#888"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons
            name={showPassword ? "eye-off" : "eye"}
            size={20}
            color="#aaa"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.switch}>
        Not you? <Text style={{ color: "#4da6ff" }}>Switch account</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d0d",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    marginBottom: 20,
  },
  profile: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#333",
    marginBottom: 10,
  },
  welcome: {
    color: "#fff",
    fontSize: 16,
  },
  label: {
    color: "#fff",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a1a1a",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    color: "#fff",
    paddingVertical: 12,
  },
  forgot: {
    color: "#aaa",
    fontSize: 12,
    textAlign: "right",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2f6df6",
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  switch: {
    color: "#aaa",
    textAlign: "center",
    marginTop: 20,
  },
});