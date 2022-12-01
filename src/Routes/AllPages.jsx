import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Explanation from "../Pages/Explanation";
import HabitPage from "../Pages/HabitPage";
import Home from "../Pages/Home";
import Start from "../Pages/Start";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AllPages() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name="start"
        component={Start}
      />
      <Screen
        name="explanation"
        component={Explanation}
      />
      <Screen
        name="home"
        component={Home}
      />
      <Screen
        name="habitpage"
        component={HabitPage}
      />
    </Navigator>
  )
}
