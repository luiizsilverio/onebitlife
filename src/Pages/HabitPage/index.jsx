import { useState, useEffect, useRef } from "react";
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ArrowBack from "../../assets/icons/arrowBack.png";
import SelectHabit from "../../components/SelectHabit";
import SelectFrequency from "../../components/SelectFrequency";
import Notification from "../../components/Notification";
import DatePicker from "../../components/DatePicker";
import UpdateButton from "../../components/UpdateButton";
import DefaultButton from "../../components/Common/DefaultButton";

export default function HabitPage({ route }) {
  const navigation = useNavigation();
  const { create, habit } = route.params;

  const [habitInput, setHabitInput] = useState();
  const [frequencyInput, setFrequencyInput] = useState();
  const [notificationToggle, setNotificationToggle] = useState();
  const [dayNotification, setDayNotification] = useState();
  const [timeNotification, setTimeNotification] = useState();

  function handleCreateHabit() {
    if (!habitInput || !frequencyInput) {
      Alert.alert("Selecione um hábito e frequência para continuar");
    }
    else if (notificationToggle && frequencyInput === "Diário" && !timeNotification) {
      Alert.alert("Informe o horário da notificação");
    }
    else if (notificationToggle && frequencyInput === "Diário" && !dayNotification) {
      Alert.alert("Informe a frequência e horário");
    }
    else {
      navigation.navigate("home", {
        createdHabit: `Criado em ${habit?.habitArea}`
      })
    }
  }

  function handleUpdateHabit() {
    if (notificationToggle && !dayNotification && !timeNotification) {
      Alert.alert("Informe a frequência e horário");
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <TouchableOpacity
            style={styles.backPageBtn}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={ArrowBack}
              style={styles.arrowBack}
            />
          </TouchableOpacity>

          <View style={styles.mainContent}>
            <Text style={styles.title}>Configurações {"\n"} de hábito</Text>
            <Text style={styles.inputText}>Área</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.area}>{habit?.habitArea}</Text>
            </View>

            <Text style={styles.inputText}>Hábito</Text>
            <SelectHabit habit={habit} habitInput={setHabitInput} />

            <Text style={styles.inputText}>Frequência</Text>
            <SelectFrequency
              habitFrequency={habit?.habitFrequency}
              frequencyInput={setFrequencyInput}
            />

            {
              frequencyInput !== "Mensal" && (
                <Notification
                  notificationToggle={notificationToggle}
                  setNotificationToggle={setNotificationToggle}
                />
              )
            }

            {
              notificationToggle && (
                frequencyInput !== "Mensal" && (
                  <DatePicker
                    frequency={frequencyInput}
                    dayNotification={dayNotification}
                    timeNotification={timeNotification}
                    setDayNotification={setDayNotification}
                    setTimeNotification={setTimeNotification}
                  />
                )
              )
            }

            {
              !create ? (
                <UpdateButton
                  handleUpdate={handleUpdateHabit}
                  habitArea={habitArea}
                  habitInput={habitInput}
                />
              ) : (
                <View style={styles.configButton}>
                  <DefaultButton
                    buttonText="Criar"
                    handlePress={handleCreateHabit}
                    width={250}
                    height={50}
                  />
                </View>
              )
            }
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(21, 21, 21, 0.98)",
  },
  backPageBtn: {
    width: 40,
    height: 40,
    margin: 25,
  },
  arrowBack: {
    width: 40,
    height: 40,
  },
  mainContent: {
    width: 250,
    alignSelf: "center",
  },
  configButton: {
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    fontSize: 30,
  },
  inputText: {
    color: "white",
    fontSize: 16,
    marginTop: 35,
    marginBottom: 10,
    marginLeft: 5,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  area: {
    color: "#BBBBBB",
    fontSize: 15,
  },
})
