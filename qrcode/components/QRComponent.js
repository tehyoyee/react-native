// QRComponent.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';


// const QRComponent = ({ value, size = 200, bgColor = 'white', fgColor = 'black' }) => {
  const QRComponent = ({ value, size = 200, bgColor = 'white', fgColor = 'black' }) => {
    const styles = StyleSheet.create({
      container: {
        alignItems: 'center',
        justifyContent: 'center',
        // 필요에 따라 스타일을 추가할 수 있습니다.
      },
    });
  return (
    <View style={styles.container}>
      <QRCode
        value={value || 'http://localhost:8081'} // QR 코드에 인코딩할 데이터
        size={size}                         // QR 코드의 크기 (픽셀 단위)
        backgroundColor={bgColor}           // QR 코드의 배경색
        color={fgColor}                     // QR 코드의 전경색 (코드의 색상)
      />
    </View>
  );
};

export default QRComponent;
