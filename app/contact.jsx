import { Link } from 'expo-router'
import { StyleSheet, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors';
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';

export default function Contact() {
  const scheme = useColorScheme();

  const theme = Colors[scheme] ?? Colors.light;

  return (
    <ThemedView style={styles.container}>
      <ThemedText style={[ styles.title, { color: theme.text } ]}>Contact Page</ThemedText>

      <Link href="/" style={[ styles.link, { borderBottomColor: theme.text } ]}>
        <ThemedText>
          Back Home
        </ThemedText>
      </Link>
    </ThemedView>
  )
}

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