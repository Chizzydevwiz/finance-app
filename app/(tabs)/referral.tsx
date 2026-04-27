import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AccountScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      {/* HEADER */}
      <Text style={styles.title}>Account</Text>

      {/* PROFILE */}
      <View style={styles.profileCard}>
        <Ionicons name="person-circle-outline" size={50} color="#38BDF8" />
        <Text style={styles.username}>@Chizzy_IkeMbah</Text>
      </View>

      {/* REFERRAL */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Referral</Text>

        <MenuItem
          icon={<FontAwesome5 name="trophy" size={18} color="#FACC15" />}
          title="Refer friends and earn points"
        />
      </View>

      {/* ACCOUNT SETTINGS */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account Settings</Text>

        <MenuItem
          icon={<Ionicons name="create-outline" size={20} color="#38BDF8" />}
          title="Edit your profile"
        />

        <MenuItem
          icon={<Ionicons name="call-outline" size={20} color="#38BDF8" />}
          title="Verify Phone Number"
          subtitle="Enable OTP notifications"
        />

        <MenuItem
          icon={<MaterialIcons name="verified-user" size={20} color="#38BDF8" />}
          title="KYC Verification"
          subtitle="Complete your KYC"
        />

        <MenuItem
          icon={<Ionicons name="help-circle-outline" size={20} color="#38BDF8" />}
          title="Support"
          subtitle="Chat with our support agents"
        />

        <MenuItem
          icon={<Ionicons name="finger-print-outline" size={20} color="#38BDF8" />}
          title="Biometrics"
          subtitle="Enable Secure Login"
        />

        <MenuItem
          icon={<Ionicons name="shield-checkmark-outline" size={20} color="#38BDF8" />}
          title="Security"
          subtile="Add an extra layer of security to your account"
        />
      </View>

    </ScrollView>
  );
}

/* ---------- Reusable Item ---------- */
function MenuItem({ icon, title, subtitle }: any) {
  return (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.iconBox}>{icon}</View>

      <View style={{ flex: 1 }}>
        <Text style={styles.menuText}>{title}</Text>
        {subtitle && <Text style={styles.subText}>{subtitle}</Text>}
      </View>

      <Ionicons name="chevron-forward" size={18} color="#64748B" />
    </TouchableOpacity>
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
    marginBottom: 20,
  },

  profileCard: {
    backgroundColor: "#1E293B",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    marginBottom: 20,
  },
  username: {
    color: "#fff",
    fontSize: 16,
    marginTop: 10,
    fontWeight: "600",
  },

  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    color: "#94A3B8",
    marginBottom: 10,
    fontSize: 13,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1E293B",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },

  iconBox: {
    marginRight: 12,
  },

  menuText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },

  subText: {
    color: "#94A3B8",
    fontSize: 12,
    marginTop: 2,
  },
});