import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import ButtonCustom from './Src/Components/ButtonCustom';
import { Colors } from './Src/Components/Colors';

const widthScreen = Dimensions.get('screen').width;
const heightScreen = Dimensions.get('screen').height;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ marginBottom: 50, }}>
        <Image source={require('./Src/Assets/Images/Instagram.png')}
          style={{
            width: 200,
            height: 100,
            resizeMode: 'stretch',
          }} />
      </View>
      <View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('./Src/Assets/Images/Profile.jpg')}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'stretch',
              borderRadius: 50
            }} />
        </View>
        <View style={{ marginVertical: 20, justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Andif20</Text>
        </View>
        <ButtonCustom title='Log in' height={15} width={widthScreen - 70} backgroundColor={Colors.colorBlue} color='white' fontSize={20} />
        <View style={{ paddingTop: 25 }}>
          <ButtonCustom title='Switch Account' width={widthScreen - 70} color='#3797EF' fontSize={15} bold='bold' />
        </View>
      </View>
      <View style={{ justifyContent: 'center', top: heightScreen * 0.20, borderTopWidth: 0.5, width: widthScreen }}>
        <Text style={{ color: Colors.colorGray, textAlign: 'center', marginTop: 20 }}>
          <Text>Don't have an account? </Text>
          <TouchableOpacity><Text style={{ fontWeight: 'bold', top: 2 }}> Sign Up</Text></TouchableOpacity>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
