import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const router = useRouter();

<TouchableOpacity
  onPress={() => router.push('/(auth)/email')}
></TouchableOpacity>

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      
      {/* Title */}
      <Text style={styles.title}>
        Welcome to the world of finance
      </Text>

      {/* Subtitle */}
      <Text style={styles.subtitle}>
        Manage your money, track expenses and grow your wealth easily.
      </Text>

      {/* Email Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/email')}
      >
        <Ionicons name="mail-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}>Continue with Email</Text>
      </TouchableOpacity>

      {/* Phone Button */}
      <TouchableOpacity
        style={styles.button}
        
      >
        <Ionicons name="call-outline" size={20} color="#fff" />
        <Text style={styles.buttonText}>
          Continue with Phone Number
        </Text>
      </TouchableOpacity>

      {/* OR */}
      <Text style={styles.or}>OR</Text>

      {/* Google Button */}
      <TouchableOpacity
        style={styles.googleButton}
        
      >
        <FontAwesome name="google" size={20} color="#000" />
        <Text style={styles.googleText}>
          Continue with Google
        </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  or: {
    textAlign: 'center',
    color: '#fff',
    marginVertical: 15,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  googleText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
});