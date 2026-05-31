import { Image } from "expo-image";
import { View, StyleSheet, Text } from "react-native";
import { CardData } from "@/game/Card";

type Props = {
  cards: CardData[]  
};

export default function CardView({ cards }: Props) {
  const [{suit: nextSuit, value}, {suit, }] = cards;
  return (
    <>
      <View>
        <Text style={styles.value}>{value}</Text>
        <Image source={nextSuit} style={styles.previewImage} />
      </View>
      <Image source={suit} style={styles.image} />
      
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  value: {
    color: '#fff',
    fontSize: 36,
  },
  previewImage: {
    width: 320,
    height: 440,
    borderRadius: 18,
    top: -60,
    opacity: 0.5,
  }
})
