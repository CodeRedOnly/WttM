import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar"
import { useEffect } from 'react';

export default function RootLayout() {
  useEffect(() => {
    document.title = 'WttM';
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
