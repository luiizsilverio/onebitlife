import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";
import Education_100 from "../../../assets/education/education-100.json";
import Money_100 from "../../../assets/money/money-100.json";
import Robot_100 from "../../../assets/robot/robot-100-100.json";
import AnimationService from "../../../services/AnimationService";

/*
  Status:
    100 - Máximo
    50 - Médio
    25 - Baixo
    00 - Curto (acabou o game)
    No robô, nós temos primeiro Felicidade e depois a Saúde xx-xx
*/

export default function LifeStatus(props) {
  const { mindHabit, moneyHabit, bodyHabit, funHabit } = props;
  const [mind, setMind] = useState();
  const [money, setMoney] = useState();
  const [robot, setRobot] = useState();

  useEffect(() => {
    AnimationService.animationStatus(
      mindHabit?.progressBar,
      moneyHabit?.progressBar,
      bodyHabit?.progressBar,
      funHabit?.progressBar,
      setMind,
      setMoney,
      setRobot
    );
  }, [mindHabit, moneyHabit, bodyHabit, funHabit]);


  return (
    <View style={styles.container}>
      <LottieView
        source={mind}
        autoPlay
        loop
        style={styles.animaEdu}
      />
      <LottieView
        source={money}
        autoPlay
        loop
        style={styles.anima$}
      />
      <LottieView
        source={robot}
        autoPlay
        loop
        style={styles.animaRobo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 270,
  },
  animaRobo: {
    width: 190,
    marginTop: 30,
    marginLeft:25,
  },
  animaEdu: {
    width: 100,
    position: "absolute",
    left: 5,
    top: 50
  },
  anima$: {
    width: 100,
    position: "absolute",
    right: 5,
    top: 50
  }
})
