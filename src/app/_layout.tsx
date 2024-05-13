import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Header } from "./_components/header"

SplashScreen.preventAutoHideAsync()

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  })

  if (fontsLoaded) {
    SplashScreen.hideAsync()
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" translucent />
      {fontsLoaded && 
        <Stack
        screenOptions={{
  
        }}>
          <Stack.Screen name="index" options={{
            header: Header,
          }} />
        </Stack>
        }
    </GestureHandlerRootView>
  )
}