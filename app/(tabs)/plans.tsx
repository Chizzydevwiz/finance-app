import { Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function PlansScreen() {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <Text style={styles.header}>Plans</Text>

      {/* SAVINGS CARD */}
      <View style={styles.savingsCard}>
        <Text style={styles.savingsLabel}>SAVINGS PLAN</Text>
        <Text style={styles.amount}>USD 0.00</Text>
      </View>

      {/* ACTION CARDS */}
      <View style={styles.row}>
        <TouchableOpacity style={[styles.card, styles.orangeBorder]}>
          <MaterialIcons name="add-box" size={28} color="#F58220" />
          <Text style={styles.cardTitle}>Create Plan</Text>
          <Text style={styles.cardText}>
            Create a new fixed savings plan
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, styles.blueBorder]}>
          
          <Text style={styles.cardTitle}>Interest Calculator</Text>
          <Text style={styles.cardText}>
            Calculate the interest on your savings
          </Text>
        </TouchableOpacity>
      </View>

      {/* ALL SAVINGS */}
      <Text style={styles.sectionTitle}>ALL SAVINGS PLANS</Text>

      <View style={styles.row}>
        <View style={styles.smallCard}>
          <Text style={styles.smallLabel}>FLEXIBLE SAVINGS</Text>
          <Text style={styles.smallAmount}>$0.00</Text>

          <TouchableOpacity style={styles.button}>
            <Ionicons name="add" size={14} color="#4A90E2" />
            <Text style={styles.buttonText}> ADD FUNDS</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.smallCard}>
          <Text style={styles.smallLabel}>FIXED SAVINGS</Text>
          <Text style={styles.smallAmount}>$0.00</Text>

          <TouchableOpacity style={styles.button}>
            <Feather name="menu" size={14} color="#4A90E2" />
            <Text style={styles.buttonText}> VIEW ALL PLANS</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* RATE */}
      <Text style={styles.rateTitle}>TODAY'S RATE</Text>
      <Text style={styles.rateText}>
        This rate is updated daily (Apr 13, 2026 02:43 AM)
      </Text>

      {/* BOTTOM TAB */}
      <View style={styles.tabBar}>
        <TabItem icon="home-outline" label="Home" />
        <TabItem icon="wallet-outline" label="Wallet" />
        <TabItem icon="people" label="Referral" active />
        <TabItem icon="document-text-outline" label="Plans" />
        <TabItem icon="person-outline" label="More" />
      </View>

    </View>
  );
}

/* TAB COMPONENT */
const TabItem = ({ icon, label, active = false }: any) => (
  <View style={styles.tabItem}>
    <View style={active ? styles.activeCircle : null}>
      <Ionicons
        name={icon}
        size={20}
        color={active ? "#fff" : "#aaa"}
      />
    </View>
    <Text style={[styles.tabText, active && { color: "#fff" }]}>
      {label}
    </Text>
  </View>
);const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0F1A",
    padding: 20,
    paddingBottom: 80,
  },

  header: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  savingsCard: {
    backgroundColor: "#4A90E2",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },

  savingsLabel: {
    color: "#DCE6F9",
    fontSize: 12,
  },

  amount: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 5,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  card: {
    flex: 1,
    padding: 15,
    borderRadius: 12,
    marginRight: 10,
  },

  orangeBorder: {
    borderWidth: 1,
    borderColor: "#F58220",
  },

  blueBorder: {
    borderWidth: 1,
    borderColor: "#4A90E2",
  },

  cardTitle: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: 10,
  },

  cardText: {
    color: "#aaa",
    fontSize: 12,
    marginTop: 5,
  },

  sectionTitle: {
    color: "#888",
    fontSize: 12,
    marginBottom: 10,
  },

  smallCard: {
    flex: 1,
    backgroundColor: "#111827",
    borderRadius: 12,
    padding: 15,
    marginRight: 10,
  },

  smallLabel: {
    color: "#888",
    fontSize: 10,
  },

  smallAmount: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },

  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1F2937",
    padding: 8,
    borderRadius: 8,
  },

  buttonText: {
    color: "#4A90E2",
    fontSize: 12,
  },

  rateTitle: {
    color: "#888",
    fontSize: 12,
    marginTop: 10,
  },

  rateText: {
    color: "#aaa",
    fontSize: 11,
  },

  /* TAB BAR */
  tabBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#0B0F1A",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 0.5,
    borderTopColor: "#222",
  },

  tabItem: {
    alignItems: "center",
  },

  tabText: {
    color: "#aaa",
    fontSize: 10,
    marginTop: 3,
  },

  activeCircle: {
    backgroundColor: "#F58220",
    padding: 8,
    borderRadius: 20,
  },
});