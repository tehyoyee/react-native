// HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>홈 스크린린</Text>
      
      <Button
        title="상세 정보 보기"
        onPress={() => navigation.navigate('Details', { itemId: 42, otherParam: 'anything you want here' })}
      />
      <Button
        title="큐알"
        onPress={() => navigation.navigate('QR', { })}
      />
      <Button
        title="큐알 스캔"
        onPress={() => navigation.navigate('QRScan', { })}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});
