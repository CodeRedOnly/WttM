import { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Stack } from "expo-router"
import { createDeck, drawCards, shuffleDeck } from '@/game/Deck'
import { CardData } from '@/game/Card';
import CardView from '@/components/CardView'
import Button from '@/components/Button'

export default function Game () {
  const [deck, updateDeck] = useState<CardData[]>(shuffleDeck(createDeck()));
  const [hand, updateHand] = useState<CardData[]>([]);
  
  function handleDraw () {
    const [ drawn, remaining ] = drawCards(deck, 3);
    if (remaining.length === 0) {
      updateDeck(shuffleDeck(createDeck()));  
    } else {  
      updateDeck(remaining);
    }
    updateHand(drawn);
  }

  useEffect(handleDraw, []);
      
  return (
    <>
      <View style={styles.container}>
        <Stack.Screen options={{ title: ''}}>
          <View>
            { hand.map( (card, index) => <CardView key={index} cards={ [deck[index], card] }/>) }
          </View>
          <View>
            <Button label="Draw Next" icon="arrow-circle-o-right" onPress={handleDraw}/>
          </View>
        </Stack.Screen>
      </View>
    </>  
  );
}
const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#0c111c",
  alignItems: "center",
  justifyContent: "center",
  
},});