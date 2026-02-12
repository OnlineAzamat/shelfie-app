import { Stack } from 'expo-router';
import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Colors } from '../constants/Colors';
import { StatusBar } from 'expo-status-bar';

const RootLayout = () => {
  const scheme = useColorScheme();

  const theme = Colors[scheme] ?? Colors.light;
  
  return (
    <>
      <StatusBar value="auto" />
      <Stack screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: "#333"
      }}>
        <Stack.Screen name='index' options={{ title: "Home" }} />
        <Stack.Screen name='about' options={{ title: "About", headerShown: false }} />
        <Stack.Screen name='contact' options={{ title: "Contact" }} />
      </Stack>
    </>
  )
}

export default RootLayout;

const styles = StyleSheet.create({})