import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';

import { Colors } from '../../Components/Colors'
import ButtonCustom from '../../Components/ButtonCustom'


const widthScreen = Dimensions.get('screen').width;
const heightScreen = Dimensions.get('screen').height;

const Account = () => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={{ marginBottom: 50, }}>
                <Image source={require('../../Assets/Images/Instagram.png')}
                    style={{
                        width: 200,
                        height: 100,
                        resizeMode: 'stretch',
                    }} />
            </View>
            <View>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../../Assets/Images/Profile.jpg')}
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
    )
}

export default Account

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  