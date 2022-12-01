import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import AllPages from "./AllPages";
import HomePage from "./HomePage";

export default function Routes() {
  const [showHome, setShowHome] = useState(false);

  return (
    <NavigationContainer>
      {
        showHome ? <HomePage /> : <AllPages />
      }
    </NavigationContainer>
  )
}
