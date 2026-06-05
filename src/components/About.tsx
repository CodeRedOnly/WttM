import { Modal, View, ScrollView, Text, Pressable, StyleSheet, Image } from 'react-native';
import { Dimensions } from 'react-native';

import { PropsWithChildren } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const about = require('@/assets/images/About.png');
const { width, height } = Dimensions.get('window');


type Props = PropsWithChildren<{
  isVisible: boolean;  
  onClose: () => void;
}>

export default function About({ isVisible, onClose }: Props) {
  return (
    <View>
      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>How to Play</Text>
            <Pressable onPress={onClose}>
              <MaterialIcons name="close" color="#fff" size={22} />
            </Pressable>
          </View>
          <ScrollView contentContainerStyle={{ padding: 16, paddingBottom: 40 }}>
            <View style={{ alignItems: 'center', paddingBottom: 20}}>

              <Image source={ about } style={{ width: width * .75, height: height * 0.35, alignSelf: 'center' }} resizeMode='contain'/>
              <View>
                <Text style={styles.body}>
                  This application requires a physical copy of the Welcome to the Moon board game to play.
                </Text>                
                <Text style={styles.body}>
                  On the screen, you will see three <Text style={{fontWeight: 'bold'}}>Values</Text> and three <Text style={{fontWeight: 'bold'}}>Resources</Text>.
                </Text> 
                <Text style={styles.body}>
                  Choose one of the values, and one of the resources.  They do not need to come from the came displayed card.  Write your value on your card, and use
                  the resource's benefit.
                </Text>
                <Text style={styles.body}>
                  Pay attention to the <Text style={{fontWeight: 'bold'}}>Next Resources</Text>.  They will be the next drawn resources, 
                  and can help prepare your strategy for the following draw.
                </Text>
                <Text style={styles.body}>
                  Once all players have marked their card, press the <Text style={{fontWeight: 'bold'}}>Draw Next</Text> button to pull the next three cards.
                </Text>
                <Text style={styles.body}>
                  The deck will be reshuffled automatically as draws continue.  
                  If at any point you want to completely reset the deck, you an press the <Text style={{fontWeight: 'bold'}}>Shuffle</Text> button.
                </Text>
                <Text style={styles.body}>
                  <Text style={{fontWeight: 'bold' }}>Note:</Text> Shuffling returns the discard pile to the deck, which will affect overall card draw statistics if used frequently.
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>  
  );
}

const styles = StyleSheet.create({
  modalContent: {
    height: '75%',
    width: '100%',
    backgroundColor: '#25292e',
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    position: 'absolute',
    bottom: 0,
  },
  titleContainer: {
    height: '10%',
    backgroundColor: '#464C55',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 22,
  },
  body: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10
  }
});