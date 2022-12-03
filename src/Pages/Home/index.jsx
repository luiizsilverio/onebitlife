import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from "react-native";

import LifeStatus from "../../components/Common/LifeStatus";
import CreateHabit from "../../components/CreateHabit";
import EditHabit from "../../components/EditHabit";
import StatusBar from "../../components/StatusBar";
import ChangeNavigationService from "../../services/ChangeNavigationService";
import HabitService from "../../services/HabitService";
import CheckService from "../../services/CheckService";

export default function Home({ route }) {
  const [mindHabit, setMindHabit] = useState();
  const [moneyHabit, setMoneyHabit] = useState();
  const [bodyHabit, setBodyHabit] = useState();
  const [funHabit, setFunHabit] = useState();
  const [robotDaysLife, setRobotDaysLife] = useState();

  const navigation = useNavigation();
  const today = new Date();
  const excludeArea = route.params?.excludeArea;


  function handleExplanation() {
    navigation.navigate("explanation");
  }


  useEffect(() => {
    HabitService.findByArea("Mente").then((mind) => {
      setMindHabit(mind[0]);
    });
    HabitService.findByArea("Financeiro").then((money) => {
      setMoneyHabit(money[0]);
    });
    HabitService.findByArea("Corpo").then((body) => {
      setBodyHabit(body[0]);
    });
    HabitService.findByArea("Humor").then((fun) => {
      setFunHabit(fun[0]);
    });

    if (excludeArea) {
      if (excludeArea == "Mente") {
        setMindHabit(null);
      }
      if (excludeArea == "Financeiro") {
        setMoneyHabit(null);
      }
      if (excludeArea == "Corpo") {
        setBodyHabit(null);
      }
      if (excludeArea == "Humor") {
        setFunHabit(null);
      }
    }

    ChangeNavigationService.checkShowHome(1)
    .then((showHome) => {
      const formDate = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
      const checkDays = new Date(formDate) - new Date(showHome.appStartData) + 1;
      setRobotDaysLife(checkDays.toString().padStart(2, '0'));
    })
    .catch((err) => console.log(err));
  }, [route.params]);


  useEffect(() => {
    CheckService.removeCheck(mindHabit, moneyHabit, bodyHabit, funHabit);
    CheckService.checkStatus(mindHabit, moneyHabit, bodyHabit, funHabit);
  }, [mindHabit, moneyHabit, bodyHabit, funHabit]);


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.dailyCheck}>
            ♥ 20 {robotDaysLife} {robotDaysLife === "01" ? "dia" : "dias"} - ✔️ 80 checks
          </Text>

          <LifeStatus
            mindHabit={mindHabit}
            moneyHabit={moneyHabit}
            bodyHabit={bodyHabit}
            funHabit={funHabit}
          />

          <StatusBar
            mindHabit={mindHabit?.progressBar}
            moneyHabit={moneyHabit?.progressBar}
            bodyHabit={bodyHabit?.progressBar}
            funHabit={funHabit?.progressBar}
          />

          {
            mindHabit ? (
              <EditHabit habit={mindHabit} checkColor="#90b7f3" />
            ) : (

              <CreateHabit habitArea="Mente" borderColor="#90b7f3" />
            )
          }

          {
            moneyHabit ? (
              <EditHabit habit={moneyHabit} checkColor="#85bb65" />
            ) : (
              <CreateHabit habitArea="Financeiro" borderColor="#85bb65" />
            )
          }

          {
            bodyHabit ? (
              <EditHabit habit={bodyHabit} checkColor="#ff0044" />
            ) : (
              <CreateHabit habitArea="Corpo" borderColor="#ff0044" />
            )
          }

          {
            funHabit ? (
              <EditHabit habit={funHabit} checkColor="#fe7f23" />
            ) : (
              <CreateHabit habitArea="Humor" borderColor="#fe7f23" />
            )
          }
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
