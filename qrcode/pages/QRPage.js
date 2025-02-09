import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import QRComponent from '../components/QRComponent';
export default function QRPage() {

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

    return (
      <View style={styles.container}>
        <QRComponent/>
        <StatusBar style="auto" />
      </View>
    )
}