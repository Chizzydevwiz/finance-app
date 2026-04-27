import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <Text style={styles.header}>Welcome Back 👋</Text>

      {/* BALANCE CARD */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>TOTAL BALANCE</Text>
        <Text style={styles.balanceAmount}>$0.00</Text>
      </View>

      {/* QUICK ACTIONS */}
      <View style={styles.actionsRow}>
        <ActionButton
          icon="add"
          label="Add Money"
          onPress={() => router.push}
        />
        <ActionButton
          icon="send"
          label="Send"
          onPress={() => router.push}
        />
        <ActionButton
          icon="arrow-down"
          label="Receive"
          onPress={() => router.push}
        />
      </View>

      {/* NAVIGATION CARDS */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/plans")}
      >
        <Text style={styles.cardTitle}>Savings Plans</Text>
        <Text style={styles.cardText}>
          Manage and grow your savings
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/wallet")}
      >
        <Text style={styles.cardTitle}>Wallet</Text>
        <Text style={styles.cardText}>
          View your transactions and balance
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/referral")}
      >
        <Text style={styles.cardTitle}>Referral</Text>
        <Text style={styles.cardText}>
          Invite friends and earn rewards
        </Text>
      </TouchableOpacity>

    </View>
  );
}

/* ACTION BUTTON COMPONENT */
const ActionButton = ({ icon, label, onPress }: any) => (
  <TouchableOpacity style={styles.actionButton} onPress={onPress}>
    <Ionicons name={icon} size={20} color="#fff" />
    <Text style={styles.actionText}>{label}</Text>
  </TouchableOpacity>
);const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0F1A",
    padding: 20,
  },

  header: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  balanceCard: {
    backgroundColor: "#4A90E2",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },

  balanceLabel: {
    color: "#DCE6F9",
    fontSize: 12,
  },

  balanceAmount: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },

  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  actionButton: {
    backgroundColor: "#1F2937",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    width: "30%",
  },

  actionText: {
    color: "#fff",
    fontSize: 12,
    marginTop: 5,
  },

  card: {
    backgroundColor: "#111827",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
  },

  cardTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  cardText: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 5,
  },
});