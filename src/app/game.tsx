import { useState, useEffect, useRef } from "react";
import { useFonts } from "expo-font";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Stack, useRouter } from "expo-router"
import { createDeck, drawCards, shuffleDeck } from '@/game/Deck'
import { CardData } from '@/game/Card';
import About from '@/components/About';
import CardView from '@/components/CardView'
import Button from '@/components/Button'
import { JollyLodger_400Regular } from "@expo-google-fonts/jolly-lodger";

export default function Game () {
  const [loaded, error] = useFonts({
    JollyLodger_400Regular
  });
  const router = useRouter();
  const [showAbout, setShowAbout] = useState<boolean>(false);

  const [history, setHistory] = useState<Array<CardData[]>>([]);
  const [deck, updateDeck] = useState<CardData[]>(shuffleDeck(createDeck()));
  const [hand, updateHand] = useState<CardData[]>([]);
  const drawLock = useRef(false);
  
  function handleDraw () {
    if (drawLock.current) return
    drawLock.current = true;
    if (hand.length > 0) setHistory(prev => [hand, ...prev]);
    const [ drawn, remaining ] = drawCards(deck, 3);
    if (remaining.length === 0) {
      updateDeck(shuffleDeck(createDeck()));
    } else {  
      updateDeck(remaining);
    }
    updateHand(drawn);
    
    Promise.resolve().then(() => {
      drawLock.current = false;
    });
  }

  function reshuffle () {
    updateDeck(shuffleDeck(createDeck()));
    setHistory([]);
  }

  function previous () {
    const currentHand = hand;
    setHistory(prev => {
      if (prev.length === 0) return prev;
  
      const [prevHand, ...rest] = prev;
  
      updateDeck(prevDeck => [...currentHand, ...prevDeck]);
      updateHand(prevHand);
  
      return rest;
    });
  }

  useEffect(() => { handleDraw(); }, []);
      
  return (
    <>
      <View style={styles.container}>
        <Stack.Screen 
          options={{ 
            title: '',
            headerLeft: () => (
              <TouchableOpacity onPress={() => {
                router.replace('/');
              }}>
              <FontAwesome
                  name='arrow-left'
                  color="#c4dce6"
                  style={[{marginLeft:15}, styles.header_button]}
                />                
              </TouchableOpacity>
            ),
        
            headerRight: () => (
              <TouchableOpacity onPress={() => setShowAbout(true)}>
                <FontAwesome
                  name='info-circle'
                  color="#c4dce6"
                  style={[{marginRight: 15}, styles.header_button]}
                />
              </TouchableOpacity>
            ),
         }} />
        <View style={{ width: "100%", flexDirection: 'row', justifyContent: "center"}}>
        {history.length > 0 && 
          <Button label="Previous" 
                  icon="arrow-left" 
                  onPress={previous}
                  containerStyle={{ position: 'absolute', borderWidth: 0, width: 90, height: 50, left: 0}}
                  buttonStyle={styles.shuffle}
                  labelStyle={{ fontSize: 12 }}
                  iconStyle={{ fontSize: 15 }}
            />
          }
          <Text style={styles.h1} selectable={false}>Drawn Cards</Text>
          <Button label="Shuffle" 
                  icon="retweet" 
                  onPress={reshuffle}
                  containerStyle={{ position: 'absolute', borderWidth: 0, width: 90, height: 50, right: 0}}
                  buttonStyle={styles.shuffle}
                  labelStyle={{ fontSize: 12 }}
                  iconStyle={{ fontSize: 15 }}
          />
        </View>
        <View>
          { hand.map( (card, index) => <CardView key={index} cards={ [deck[index], card] }/>) }
        </View>
        <View>
          <Button label="Draw Next" icon="arrow-circle-o-right" onPress={handleDraw}/>
        </View>
      </View>
      <About isVisible={showAbout} onClose={() => setShowAbout(false)}/>
    </>  
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0c111c",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  h1: {
    fontSize: 42,
    color: '#c4dce6',
    fontFamily: 'JollyLodger_400Regular',
    textAlign: 'center',
  },
  shuffle: {

  },
  header_button: {
    fontSize: 22
  }
});