import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaView,SafeAreaProvider} from 'react-native-safe-area-context';
import Calculadora from './src/components/Calculadora';
import Header from './src/components/Header';
export default function App() {
  return (
    <SafeAreaProvider>
 <SafeAreaView style={styles.container}>
  <Header/>
 <Calculadora/>
  </SafeAreaView>
    </SafeAreaProvider>
);

  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
