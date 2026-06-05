import { Image } from "expo-image";
import { View, StyleSheet, Text } from "react-native";
import { CardData } from "@/game/Card";
import { useWindowDimensions } from "react-native";


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
  const { width } = useWindowDimensions();  
  const [{suit: nextSuit, value}, {suit, }] = cards;

  
  let cardWidth;
  
  if (width > 800) {
    cardWidth = 100; // ✅ fixed size for desktop
  } else {
    cardWidth = width * 0.28; // ✅ mobile scaling
  }
  
  const cardHeight = cardWidth * 1.6;


  return (
    <>
      <View style={[styles.card, {width: cardWidth, height: cardHeight}]}>
        <View style={styles.top}>
          <View style={{ alignItems: "flex-end", width: "100%", paddingRight: 10 }}>
            <Image source={images[nextSuit]} style={styles.previewImage}/>          
          </View>
          <Text style={[styles.value, { fontSize: cardWidth * 0.35 }]} selectable={false}>{value}</Text>
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
    width: '50%',
    aspectRatio: 1,
    borderRadius: 9,
    userSelect: 'none',
  },
  value: {
    color: '#fff',
    fontSize: 36,
    top: -15
  },
  previewImage: {
    width: '25%',
    aspectRatio: 1,
    borderRadius: 18,
    opacity: 0.66,
    userSelect: 'none'
  }
})
