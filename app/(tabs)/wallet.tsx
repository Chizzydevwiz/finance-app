import { Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function WalletScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      {/* Header */}
      <Text style={styles.title}> Wallets</Text>
      <Text style={styles.subtitle}>Track your assets in real time</Text>

      {/* Balance */}
      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>My Asset Portfolio</Text>
        <Text style={styles.balanceAmount}>$12,480.22</Text>
      </View>

      {/* ACTION BUTTONS */}
      <View style={styles.actionsRow}>

        <ActionButton icon="add-circle" label="Add Fund" />
        <ActionButton icon="arrow-down-circle" label="Withdraw" />
        <ActionButton icon="swap-horizontal" label="Swap" />
        <ActionButton icon="document-text" label="Statement" />

      </View>

      {/* Assets */}
      <AssetCard name="CNGN" type="Naira Stablecoin" value="0.00" />
      <AssetCard name="USDT" type="Tether Stablecoin" value="0.00" />
      AssetCard name="USDC" type="USD Coin" value="0.00" /

      {/* Sections */}
      <Section title="Stablecoins" items={["DAI", "BUSD"]} />
      <Section title="Utility " items={["BNB", "ETH Gas"]} />
      <Section title="Memes" items={["DOGE", "SHIB", "PEPE"]} />

    </ScrollView>
  );
}

/* ---------- Components ---------- */

function ActionButton({ icon, label }: any) {
  return (
    <TouchableOpacity style={styles.actionBtn}>
      <Ionicons name={icon} size={22} color="#38BDF8" />
      <Text style={styles.actionText}>{label}</Text>
    </TouchableOpacity>
  );
}

function AssetCard({ name, type, value }: any) {
  return (
    <View style={styles.assetCard}>
      <View>
        <Text style={styles.assetName}>{name}</Text>
        <Text style={styles.assetType}>{type}</Text>
      </View>
      <Text style={styles.assetValue}>{value}</Text>
    </View>
  );
}

function Section({ title, items }: any) {
  return (
    <View style={{ marginTop: 20 }}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {items.map((item: string, i: number) => (
        <View key={i} style={styles.miniCard}>
          <Text style={styles.miniText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F172A",
  },
  content: {
    padding: 20,
    paddingBottom: 50,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
    marginTop: 40,
  },
  subtitle: {
    color: "#94A3B8",
    marginTop: 5,
    marginBottom: 15,
  },

  balanceCard: {
    backgroundColor: "#1E293B",
    padding: 18,
    borderRadius: 15,
    marginBottom: 15,
  },
  balanceLabel: {
    color: "#94A3B8",
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: "700",
    color: "#38BDF8",
    marginTop: 8,
  },

  /* ACTIONS */
  actionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  actionBtn: {
    alignItems: "center",
    backgroundColor: "#1E293B",
    padding: 10,
    borderRadius: 12,
    width: "23%",
  },
  actionText: {
    color: "#CBD5E1",
    fontSize: 10,
    marginTop: 5,
  },

  /* ASSETS */
  assetCard: {
    backgroundColor: "#1E293B",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  assetName: {
    color: "#fff",
    fontWeight: "600",
  },
  assetType: {
    color: "#94A3B8",
    fontSize: 12,
  },
  assetValue: {
    color: "#38BDF8",
    fontWeight: "600",
  },

  /* SECTIONS */
  sectionTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },
  miniCard: {
    backgroundColor: "#0B1220",
    padding: 10,
    borderRadius: 10,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: "#1E293B",
  },
  miniText: {
    color: "#CBD5E1",
  },
});