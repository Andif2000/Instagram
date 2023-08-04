import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Colors } from "../../Components/Colors";
import ButtonCustom from "../../Components/ButtonCustom";

const widthScreen = Dimensions.get("screen").width;
const heightScreen = Dimensions.get("screen").height;

const Account = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View
        style={{
          marginBottom: 50,
        }}
      >
        <Image
          source={require("../../Assets/Images/Instagram.png")}
          style={{
            width: 200,
            height: 100,
            resizeMode: "stretch",
          }}
        />
      </View>
      <View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../Assets/Images/Profile.jpg")}
            style={{
              width: 100,
              height: 100,
              resizeMode: "stretch",
              borderRadius: 50,
            }}
          />
        </View>
        <View
          style={{
            marginVertical: 20,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Andif20
          </Text>
        </View>
        <ButtonCustom
          title="Log in"
          height={13}
          width={widthScreen - 50}
          backgroundColor={Colors.colorBlue}
          color="white"
          fontSize={18}
        />
        <View
          style={{
            paddingTop: 25,
          }}
        >
          <ButtonCustom
            title="Switch Account"
            width={widthScreen - 50}
            color="#3797EF"
            fontSize={15}
            bold="bold"
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          borderTopWidth: 0.5,
          borderTopColor: Colors.colorGray,
          width: widthScreen,
          position: "absolute",
          bottom: 0,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            color: Colors.colorGray,
            textAlign: "center",
            fontSize: 13,
            marginTop: 20,
          }}
        >
          <Text>Don't have an account? </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: "bold",
                color: Colors.colorBlue,
                fontSize: 13,
                top: 2,
              }}
            >
              {" "}
              Sign Up
            </Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
