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
      <Stack.Screen options={{ title: ''}} />  
      <Image source={ logo } style={{ height: '50%', aspectRatio: 1 }}/>
      <Text style={ styles.h1 }>WttM</Text>
      <View style={ styles.footer }>
        <Button label="Let's Start" icon="moon-o" onPress={() => router.push('./game')}/>
        <Text style={ styles.disclaimer }>
          This app has no affiliation with Blue Cocker, Dude Games, Benoit Turpin, Alexis Allard, or Anne Heidsieck.
          All copyrights belong to their original owners.
        </Text>  
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c111c",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  h1: {
    fontSize: 64,
    color: '#c4dce6',
    fontFamily: 'JollyLodger_400Regular',
    textAlign: 'center',
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    gap: 12, // or marginTop if needed
  },

  disclaimer: {
    fontSize: 12,
    color: '#c4dce6',
    alignItems: "center",
    paddingHorizontal: 20,
  }
});
