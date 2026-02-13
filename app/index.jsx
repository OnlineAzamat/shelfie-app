import { StyleSheet, useColorScheme } from 'react-native'
import { Link } from 'expo-router'

import ThemedView from '../components/ThemedView'
import ThemedLogo from '../components/ThemedLogo'
import Spacer from '../components/Spacer'
import ThemedText from '../components/ThemedText'
import { Colors } from '../constants/Colors'

const Home = () => {
  const scheme = useColorScheme();
  const theme = Colors[scheme] ?? Colors.light;

  return (
    <ThemedView style={styles.container}>
      <ThemedLogo />
      <Spacer height={20} />

      <ThemedText style={styles.title} title>
        The Number 1
      </ThemedText>
      <Spacer height={20} />

      <ThemedText>Reading List App</ThemedText>
      <Spacer />

      <Link href="/about" style={[ styles.link, { borderBottomColor: theme.text } ]}><ThemedText>About Page</ThemedText></Link>
      <Link href="/contact" style={[ styles.link, { borderBottomColor: theme.text } ]}><ThemedText>Contact Page</ThemedText></Link>
    </ThemedView>
  )
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 18
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
});