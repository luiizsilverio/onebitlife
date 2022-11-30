import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function EditHabit(props) {
  const { habit, frequency, habitArea, checkColor } = props;

  function handleEdit() {
  }

  function handleCheck() {
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={handleEdit}
    >
      <View style={styles.habitText}>
        <Text style={styles.title}>{habit}</Text>
        <Text style={styles.frequency}>{frequency}</Text>
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
