import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { Image, StatusBar, StyleSheet, View } from 'react-native';

export function Header(props: NativeStackHeaderProps) {
  const canGoBack = props.navigation.canGoBack()

  function handleBack() {
    props.navigation.goBack()
  }
  return (
    <View style={styles.container}>
      {canGoBack ? (
        <MaterialIcons name="arrow-back-ios" size={24} color="black" onPress={handleBack} />
      ) : null}
      <Image style={styles.image} source={require("@/assets/logo.png")} />
      <FontAwesome6 name="bars" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    marginTop: StatusBar.currentHeight,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 30,
    backgroundColor: "red",
  },
  image: {
    width: 40,
    height: 40,
  }
});
