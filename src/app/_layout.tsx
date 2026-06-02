import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar"
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { JollyLodger_400Regular } from "@expo-google-fonts/jolly-lodger";

SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  useEffect(() => {
    if (Platform.OS === 'web') {
      document.title = 'WttM';
    }
  }, []);

  const [loaded] = useFonts({ JollyLodger_400Regular });  
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);


  return (
    <>  
      <Stack screenOptions={{
        headerStyle: {
          backgroundColor: "#0c111c",
        },
        headerTintColor: "#c4dce6",
        headerShadowVisible: false,
      }}/>
      <StatusBar style="light" />      
    </>
  );
}
