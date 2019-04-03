import React from "react";
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Animated,
  Easing,
  Dimensions,
  DrawerLayoutAndroid,
  TouchableOpacity
} from "react-native";
import { View, Card, Text } from "react-native-ui-lib";
import { connect } from "react-redux";
import { submitpsdet } from "../../Store/actions/index";
import { Navigation } from "react-native-navigation";
import AnimatedLinearGradient, {
  presetColors
} from "react-native-animated-linear-gradient";
import Image from "react-native-remote-svg";
import back from "../icons/pregnant.svg";
import Icons from "react-native-vector-icons/MaterialIcons";
import FaIcons from "react-native-vector-icons/FontAwesome";
import age from "../icons/age.svg";
import nurse from "../icons/nurse.svg";
import asha from "../icons/asha.svg"
import heart from "../icons/heartbeat.svg";
import delivery from "../icons/delivery.svg";
import examination from "../icons/examination.svg";
import logout from "../icons/logout.svg";
import baby from "../icons/baby.svg";



















class Page extends React.Component {
  constructor(props) {
    super(props);
  }






profilehandler=()=>{
  this.props.navigator.push({
       screen:'project.Update_First',
       navigatorStyle:{
                navBarHidden: true,
              }
    })
}






return(){
  return(


    <View style={{ flex: 1, backgroundColor: "black", opacity: 1 }} >
        <View style={{left:250,marginTop:20}}>
          <FaIcons name="chevron-left" size={28} color={"white"} />
        </View>
        <View>
        <Image
          source={back}
          style={{
            width: 120,
            height: 120,
            alignItems: "center",
            marginTop: 20,
            marginHorizontal: 20
          }}
        />
      </View>


      <View>
      <View style={{ marginTop: 100, marginHorizontal: 30 }}>


        <TouchableOpacity onPress={this.profilehandler}>
        <View style={{ flexDirection: "row",marginBottom: 20}}>
          <View>
            <FaIcons name="user-circle" size={30} color={"white"} />
          </View>
          <View center style={{ marginHorizontal: 20 }}>
            <Text white text60 style={{ fontWeight: "400" }}>
              Profile
            </Text>
          </View>
        </View>
      </TouchableOpacity>


        <View style={{ flexDirection: "row",marginBottom: 20}}>
          <View>
            <Image
              source={heart}
              style={{
                width: 30,
                height: 30,
                alignItems: "center"
              }}
            />
          </View>
          <View center style={{ marginHorizontal: 20 }}>
            <Text white text60 style={{ fontWeight: "400" }}>
              Health Profile
            </Text>
          </View>
        </View>



        <View style={{ flexDirection: "row",marginBottom: 20}}>
          <View>
            <Image
              source={nurse}
              style={{
                width: 30,
                height: 30,
                alignItems: "center"
              }}
            />
          </View>
          <View center style={{ marginHorizontal: 20 }}>
            <Text white text60 style={{ fontWeight: "400" }}>
              ANM Details
            </Text>
          </View>
        </View>





        <View style={{ flexDirection: "row",marginBottom: 20}}>
          <View>
            <Image
              source={delivery}
              style={{
                width: 30,
                height: 30,
                alignItems: "center"
              }}
            />
          </View>
          <View center style={{ marginHorizontal: 20 }}>
            <Text white text60 style={{ fontWeight: "400" }}>
              Delivery Details
            </Text>
          </View>
        </View>




        <View style={{ flexDirection: "row",marginBottom: 20}}>
          <View>
            <Image
              source={examination}
              style={{
                width: 30,
                height: 30,
                alignItems: "center"
              }}
            />
          </View>
          <View center style={{ marginHorizontal: 20 }}>
            <Text white text60 style={{ fontWeight: "400" }}>
              Check Ups
            </Text>
          </View>
        </View>




        <View style={{ flexDirection: "row",marginBottom: 20}}>
          <View>
            <Image
              source={baby}
              style={{
                width: 30,
                height: 30,
                alignItems: "center"
              }}
            />
          </View>
          <View center style={{ marginHorizontal: 20 }}>
            <Text white text60 style={{ fontWeight: "400" }}>
              Baby Details
            </Text>
          </View>
        </View>




        <View style={{ flexDirection: "row",marginBottom: 20}}>
          <View>
            <Image
              source={logout}
              style={{
                width: 30,
                height: 30,
                alignItems: "center"
              }}
            />
          </View>
          <View center style={{ marginHorizontal: 20 }}>
            <Text white text60 style={{ fontWeight: "400" }}>
              Logout
            </Text>
          </View>
        </View>






    </View>
    </View>
    </View>




  )
}

}

export default  Page;
