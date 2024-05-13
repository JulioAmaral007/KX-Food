import { theme } from '@/theme';
import { FontAwesome6 } from '@expo/vector-icons';
import { Image, StyleSheet, View } from 'react-native';

export function Header() {

  return (
    <View style={styles.header}>
      <Image style={styles.image} source={require("@/assets/logo.png")} />
      <FontAwesome6 name="bars" size={24} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    color: theme.colors.white,
    paddingHorizontal: 30,
    paddingTop: 24,
  },
  image: {
    width: 40,
    height: 40,
  }
});
