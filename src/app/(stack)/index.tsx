import { theme } from '@/theme';
import { StyleSheet, View } from 'react-native';
import { Header } from '../_components/header';

export default function Home() {

  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: theme.colors.white,
  },
});
