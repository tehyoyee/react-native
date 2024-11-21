import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { StyleSheet, Text, View } from 'react-native';
import Header from '@/components/Header';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Profile from '@/components/Profile';
import { friendProfiles, myProfile } from '@/data/data';
import Margin from '@/components/Margin';
import Division from '@/components/Division';
import FriendSection from '@/components/FriendSection';
import FriendList from '@/components/FriendList';
import TabBar from '@/components/TabBar';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
  }


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider >
      <SafeAreaView style={ styles.container } >
        <View style={{ flex: 1, paddingHorizontal: 15 }}>
          <Header />

          <Margin height={10} />

          <Profile 
            uri={myProfile.uri}
            name={myProfile.name}
            introduction={myProfile.introduction}
            isMe={true}
          />

          <Margin height={15} />

          <Division />

          <Margin height={12} />

          <FriendSection 
            friendProfileLen={friendProfiles.length}
            onPressArrow={onPressArrow}
            isOpened={isOpened}
          />
          <FriendList 
            data={friendProfiles}
            isOpened={isOpened}
          />
        </View>
        <TabBar selectedTabIdx={selectedTabIdx} setSelectedTabIdx={setSelectedTabIdx} />
        
      </SafeAreaView>
    </SafeAreaProvider>
    // <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    //   <Stack>
    //     <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    //     <Stack.Screen name="+not-found" />
    //   </Stack>
    // </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "white",
    paddingHorizontal: 15,
  }
})
