import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View } from 'react-native';
import Input from './components/Input';
export default function App() {
  return (
    <ScrollView style={{backgroundColor:"#EFDCF9"}}>
    <View style={styles.container}>
      <Input/>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#695E93',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
