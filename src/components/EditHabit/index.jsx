import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import CheckService from "../../services/CheckService";
import MindIcon from "../../assets/icons/Mind.png";
import BodyIcon from "../../assets/icons/Body.png";
import MoneyIcon from "../../assets/icons/Money.png";
import FunIcon from "../../assets/icons/Fun.png";

export default function EditHabit(props) {
  const { habit, frequency, habitArea, checkColor } = props;
  const navigation = useNavigation();
  const [habitCheck, setHabitCheck] = useState();
  const [checkImage, setCheckImage] = useState(MindIcon);

  const checkData = new Date();
  const formatDate = `${checkData.getFullYear()}-${checkData.getMonth()}-${checkData.getDate()}`;

  function handleEdit() {
    navigation.navigate("habitpage", {
      create: false,
      habit,
    })
  }

  function handleCheck() {
    if (!habitCheck) {
      CheckService.checkHabit({
        lastCheck: formatDate,
        habitIsChecked: 1,
        habitChecks: habit?.habitChecks + 1,
        habitArea: habit?.habitArea,
      });
      setHabitCheck(1);
    } else {
      setHabitCheck(0);
    }
  }

  useEffect(() => {
    setHabitCheck(habit?.habitIsChecked);
    if (habit?.habitArea === "Financeiro") {
      setCheckImage(MoneyIcon);
    }
    if (habit?.habitArea === "Corpo") {
      setCheckImage(BodyIcon);
    }
    if (habit?.habitArea === "Humor") {
      setCheckImage(FunIcon);
    }
  }, [])

  const textNotification =
    habit?.habitNotificationTime === null
      ? `Sem notificação - ${habit?.habitFrequency}`
      : `${habit?.habitNotificationTime} - ${habit?.habitFrequency}`;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={handleEdit}
    >
      <View style={styles.habitText}>
        <Text style={styles.title}>{habit?.habitName}</Text>
        <Text style={styles.frequency}>{textNotification}</Text>
      </View>

      {
        !habitCheck ? (
          <TouchableOpacity
            style={[styles.check, { borderColor: checkColor }]}
            onPress={handleCheck}
          />
        ) : (
          <TouchableOpacity onPress={handleCheck}>
            <Image source={checkImage} style={styles.checked} />
          </TouchableOpacity>
        )
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#151515',
    borderRadius: 5,
    width: 320,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: 'white',
    fontWeight: 'bold'
  },
  frequency: {
    color: 'white'
  },
  check: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
  checked: {
    width: 25,
    height: 25,
  },
})
