import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function CreateHabit(props) {
  const { habitArea, borderColor } = props;

  function handleCreate() {
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, { borderColor: borderColor }]}
    >
      <Text style={styles.title}>
        Adicionar meta {habitArea === "Mente" ? "da" : "do"} {habitArea}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: 315,
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 2,
    borderStyle: 'dotted',
    borderColor: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})
