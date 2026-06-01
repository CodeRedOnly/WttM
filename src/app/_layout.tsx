import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar"

export default function RootLayout() {
  return (
    <>  
      <Stack screenOptions={{
        headerStyle: {
          backgroundColor: "#0c111c",
        },
        headerTintColor: "#c4dce6",
        headerShadowVisible: false
      }}/>
      <StatusBar style="light" />      
    </>
  );
}
