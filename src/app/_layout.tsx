import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar"
import { useEffect } from 'react';
import { Platform } from 'react-native';

export default function RootLayout() {
  useEffect(() => {
    if (Platform.OS === 'web') {
      document.title = 'WttM';
    }
  }, []);

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
