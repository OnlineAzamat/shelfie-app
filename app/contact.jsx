import { Link } from 'expo-router'
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors';

export default function Contact() {
  const scheme = useColorScheme();

  const theme = Colors[scheme] ?? Colors.light;

  return (
    <View style={styles.container}>
      <Text style={[ styles.title, { color: theme.text } ]}>Contact Page</Text>

      <Link href="/" style={styles.link}>Back Home</Link>
    </View>
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