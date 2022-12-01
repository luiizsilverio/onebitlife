import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Explanation from "../Pages/Explanation";
import HabitPage from "../Pages/HabitPage";
import Home from "../Pages/Home";

const { Navigator, Screen } = createNativeStackNavigator();

export default function HomePage() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="habitpage"
        component={HabitPage}
      />
      <Screen
        name="explanation"
        component={Explanation}
      />
    </Navigator>
  )
}
