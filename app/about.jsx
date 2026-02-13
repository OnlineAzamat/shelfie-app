import { Link } from 'expo-router'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors';
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';

const About = () => {
  const scheme = useColorScheme();
  const theme = Colors[scheme] ?? Colors.light;

  return (
    <ThemedView style={ [ styles.container, { backgroundColor: theme.background }] }>
      <ThemedText style={[ styles.title, { color: theme.text } ]}>About Page</ThemedText>

      <Link href="/" style={[ styles.link, { borderBottomColor: theme.text } ]}>
        <ThemedText>
          Back Home
        </ThemedText>
      </Link>
    </ThemedView>
  )
}

export default About

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
})