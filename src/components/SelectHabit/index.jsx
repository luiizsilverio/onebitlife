import { useEffect, useState } from "react"
import { Image, StyleSheet } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list';
import { dataMind, dataMoney, dataBody, dataFun } from "../../Database/habitData.js";
import ArrowDropDownIcon from "../../assets/icons/arrowDropdown.png";

export default function SelectHabit ({ habit, habitInput }) {
  const [selected, setSelected] = useState(habit?.habitName  || '-');
  const [data, setData] = useState();

  useEffect(() => {
    if (habit?.habitArea === "Mente") setData(dataMind);
    if (habit?.habitArea === "Financeiro") setData(dataMoney);
    if (habit?.habitArea === "Corpo") setData(dataBody);
    if (habit?.habitArea === "Humor") setData(dataFun);
    habitInput(habit?.habitName || undefined);
  }, [])

  return (
    <>
      <SelectList
        setSelected={setSelected}
        data={data}
        search={false}
        onSelect={() => habitInput(selected)}
        placeholder={selected}
        boxStyles={styles.boxStyles}
        inputStyles={styles.inputStyle}
        dropdownStyles={styles.dropdownStyle}
        dropdownItemStyles={styles.dropdownItemStyle}
        dropdownTextStyles={styles.dropdownTextStyles}
        arrowicon={
          <Image
            source={ArrowDropDownIcon}
            style={styles.arrowicon}
          />
        }
      />
    </>
  )
}

const styles = StyleSheet.create({
  boxStyle: {
    borderWidth: 1,
    borderColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  inputStyle: {
    color: "white",
  },
  dropdownStyle: {
    borderWidth: 0,
  },
  dropdownItemStyle: {
    borderWidth: 1,
    borderColor: "#BBBB",
    borderRadius: 10,
    marginBottom: 15,
  },
  dropdownTextStyle: {
    color: "#BBBBBB",
  },
  arrow: {
    width: 20,
    height: 20,
  },
});
