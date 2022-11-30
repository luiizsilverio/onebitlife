import { useNavigation } from "@react-navigation/native"
import { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";
import LifeStatus from "../../components/Common/LifeStatus";
import CreateHabit from "../../components/CreateHabit";
import EditHabit from "../../components/EditHabit";
import StatusBar from "../../components/StatusBar";

export default function Home() {
  const navigation = useNavigation();
  const [mindHabit, setMindHabit] = useState("");
  const [moneyHabit, setMoneyHabit] = useState();
  const [bodyHabit, setBodyHabit] = useState();
  const [funHabit, setFunHabit] = useState();

  function handleExplanation() {
    navigation.navigate("explanation");
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.dailyCheck}>
            ♥ 20 dias - ✔️ 80 checks
          </Text>

          <LifeStatus />
          <StatusBar />

          {
            mindHabit ? (
              <EditHabit
                habit="Hábito 01"
                frequency="Todos os dias, às 10:30"
                habitArea="Mente"
                checkColor="#90b7f3"
              />
            ) : (

              <CreateHabit habitArea="Mente" borderColor="#90b7f3" />
            )
          }

          <CreateHabit habitArea="Financeiro" borderColor="#85bb65" />

          <CreateHabit habitArea="Corpo" borderColor="#ff0044" />

          <CreateHabit habitArea="Humor" borderColor="#fe7f23" />

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
