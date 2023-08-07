import {
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import ContainerImage from "../../Components/ContainerImage";
import Stories from "../../Components/Stories";
import Posts from "../../Components/Posts";

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={"white"}
        barStyle={"dark-content"}
        animated={true}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10,
          paddingHorizontal: 10,
        }}
      >
        <View>
          <TouchableOpacity>
            <ContainerImage
              source={require("../../../assets/Icons/Camera_Icon.png")}
              width={27}
              height={27}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../../assets/Icons/Instagram_Logo.png")}
            style={{
              width: 120,
              height: 35,
              left: 25,
              resizeMode: "stretch",
            }}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              marginRight: 15,
            }}
          >
            <ContainerImage
              source={require("../../../assets/Icons/IGTV.png")}
              width={27}
              height={27}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <ContainerImage
              source={require("../../../assets/Icons/Messanger.png")}
              width={27}
              height={27}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <Stories />
        <Posts />
      </ScrollView>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
});
