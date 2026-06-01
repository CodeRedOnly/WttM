import { Image } from "expo-image";
import { View, StyleSheet, Text } from "react-native";
import { CardData } from "@/game/Card";

type Props = {
  cards: CardData[]  
};

const images = {
  'astronaut': require('@/assets/images/cards/astronaut.png'),
  'energy': require('@/assets/images/cards/energy.png'),
  'plant': require('@/assets/images/cards/plant.png'),
  'robot': require('@/assets/images/cards/robot.png'),
  'schedule': require('@/assets/images/cards/schedule.png'),
  'water': require('@/assets/images/cards/water.png'),
};

export default function CardView({ cards }: Props) {
  const [{suit: nextSuit, value}, {suit, }] = cards;
  return (
    <>
      <View style={styles.card}>
        <View style={styles.top}>
          <Image source={images[nextSuit]} style={styles.previewImage} />          
          <Text style={styles.value}>{value}</Text>
        </View>
        <Image source={images[suit]} style={styles.image} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    display: "flex",
    backgroundColor: "#c4dce633",
    borderColor: "#c4dce6",
    borderRadius: 9,
    borderStyle: "solid",
    borderWidth: 2,
    width: 100,
    height: 165,
    paddingTop: 10,
    marginBottom: 10,
    alignItems: "center"
  },
  top: {
    display: "flex",
    alignItems: "center",
    borderBottomColor: "#c4dce6",
    borderBottomWidth: 1,
    borderStyle: "dashed",
    width: "100%",
    marginBottom: 5
  },
  image: {
    marginTop: 10,
    width: 50,
    height: 50,
    borderRadius: 9,
  },
  value: {
    color: '#fff',
    fontSize: 36,
  },
  previewImage: {
    width: 16,
    height: 22,
    borderRadius: 18,
    opacity: 0.5,
  }
})
