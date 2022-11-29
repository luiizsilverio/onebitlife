import { useNavigation } from "@react-navigation/native"
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import LifeStatus from "../../components/Common/LifeStatus";

export default function Home() {
  const navigation = useNavigation();

  function handleExplanation() {
    navigation.navigate("explanation");
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.dailyCheck}>
            ♥ 20 dias - ✔ 80 checks
          </Text>

          <LifeStatus />
        </View>

        <TouchableOpacity onPress={handleExplanation}>
          <Text style={styles.explanationText}>
            Ver explicação novamente
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },
  dailyCheck: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginTop: 40,
  },
  explanationText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 15,
    paddingBottom: 25,
  }
})
