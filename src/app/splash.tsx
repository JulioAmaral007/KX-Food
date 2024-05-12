import { router } from "expo-router"
import { useEffect } from "react"
import { StyleSheet, View, useWindowDimensions } from "react-native"

import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming
} from "react-native-reanimated"

import { theme } from "@/theme"

export default function Splash() {
  const logoScale = useSharedValue(1)
  const contentDisplay = useSharedValue(0)

  const dimensions = useWindowDimensions()

  const logoAnimatedStyles = useAnimatedStyle(() => ({
    transform: [
      { scale: logoScale.value },
    ],
  }))

  function logoAnimation() {
    logoScale.value = withSequence(
      withTiming(0.7),
      withTiming(1.3),
      withTiming(1, undefined, (finished) => {
        if(finished){
          contentDisplay.value = withTiming(1, {duration: 500})

          runOnJS(onEndSplash)()
        }
      })
    )
  }

  function onEndSplash() {
    setTimeout(() => {
      router.push("/(drawer)")
    }, 2000)
  }

  useEffect(() => {
    logoAnimation()
  }, [])

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("@/assets/logo.png")}
        style={[styles.logo, logoAnimatedStyles]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  logo: {
    width: 64,
    height: 64,
  },
})