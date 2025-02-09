import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import QRPage from './pages/QRPage';
import QRScanPage from './pages/QRScanPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: '홈 화면' }}
        />
        <Stack.Screen
          name="QR"
          component={QRPage}
          options={{ title: '큐알' }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: '상세 정보' }}
        />
        <Stack.Screen
          name="QRScan"
          component={QRScanPage}
          options={{ title: '큐알 스캔' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         {/* Home 스크린 등록 */}
//         {/* <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{ title: '홈 화면' }}
//         /> */}
//         {/* Details 스크린 등록 */}
//         {/* <Stack.Screen
//           name="Details"
//           component={Scanner}
//           options={{ title: '상세 정보' }}
//         /> */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
