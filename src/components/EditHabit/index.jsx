import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function EditHabit(props) {
  const { habit, frequency, habitArea, checkColor } = props;
  const navigation = useNavigation();

  function handleEdit() {
    navigation.navigate("habitpage", {
      create: false,
      habit,
    })
  }

  function handleCheck() {
    console.log(`Clicando no check do ${habit?.habitArea}`);
  }

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

      <TouchableOpacity
        style={[styles.check, { borderColor: checkColor }]}
        onPress={handleCheck}
      />
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
})
