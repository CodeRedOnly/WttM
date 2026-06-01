import { Image, Text, View, StyleSheet } from "react-native";
import { Stack, useRouter } from 'expo-router';
import { useFonts } from "expo-font";
import { JollyLodger_400Regular } from "@expo-google-fonts/jolly-lodger";
import Button from '@/components/Button'

const logo = require('@/assets/icons/android/icon-512.png');

export default function Index() {
  const [loaded, error] = useFonts({
    JollyLodger_400Regular
  });
  const router = useRouter();  

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: ''}}>  
        <Image source={ logo } />
        <Text style={ styles.h1 }>WttM</Text>
        <View style={ styles.buttons }>
        <Button label="Let's Start" icon="moon-o" onPress={() => router.push('./game')}/>
        </View>
        <Text style={ styles.disclaimer }>
          This app has no affiliation with Blue Cocker, Dude Games, Benoit Turpin, Alexis Allard, or Anne Heidsieck.
          All copyrights belong to their original owners.
        </Text>
      </Stack.Screen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c111c",
    alignItems: "center",
    justifyContent: "center",
    
  },
  h1: {
    fontSize: 64,
    color: '#c4dce6',
    fontFamily: 'JollyLodger_400Regular',
  },
  buttons: {},
  disclaimer: {
    position: 'absolute',
    fontSize: 12,
    bottom: 15,
    color: '#c4dce6',
    alignItems: "center",
  }
});
