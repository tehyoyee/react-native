
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';


import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Text>
            dsfsdfsf

          </Text>
        </View>
      </SafeAreaView>

    </SafeAreaProvider>
  );
}
