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
import calendartime from "../icons/calendartime.svg";
import calendar from "../icons/calendar.svg";
import blood from "../icons/blood.svg";
import bloodp from "../icons/bloodp.svg";
import aids from "../icons/aids.svg";
import hbsag from "../icons/hbsag.svg";
import pheight from "../icons/height.svg";
import prisk from "../icons/prisk.svg";
import lungs from "../icons/lungs.svg";
import vdrl from "../icons/vdrl.svg";
import nurse from "../icons/nurse.svg";
import asha from "../icons/asha.svg"
import heart from "../icons/heartbeat.svg";
import delivery from "../icons/delivery.svg";
import examination from "../icons/examination.svg";
import logout from "../icons/logout.svg";
import baby from "../icons/baby.svg";
import man from "../icons/man.svg";
import aadhar from "../icons/aadhar.svg";
import address from "../icons/address.svg";





var { height, width } = Dimensions.get("window");


HEADER_MAX_HEIGHT=height/3;
HEADER_MIN_HEIGHT=90;
PROFILE_MAX_HEIGHT=160;
PROFILE_MIN_HEIGHT=40;


class UpdateHealth extends React.Component {
  constructor(props) {
    super(props);
    this.state={
         scrollY: new Animated.Value(0)
    }

  }


drawerhandler=()=>{

      this.hamburger.openDrawer()
}

  profilehandler=()=>{
      this.hamburger.closeDrawer();
      this.props.navigator.push({
           screen:'project.Update_Profile',
           passProps:{anmid:this.props.anmid,motherID:this.props.motherID},
           navigatorStyle:{
                    navBarHidden: true,
                  }
        })
  }
  healthhandler=()=>{
      this.hamburger.closeDrawer();

  }
  anmhandler=()=>{
      this.hamburger.closeDrawer();
      this.props.navigator.push({
           screen:'project.Update_ANM',
           passProps:{anmid:this.props.anmid,motherID:this.props.motherID},
           navigatorStyle:{
                    navBarHidden: true,
                  }
        })
  }
  deliveryhandler=()=>{
    this.hamburger.closeDrawer();
    this.props.navigator.push({
         screen:'project.Update_Delivery',
         passProps:{anmid:this.props.anmid,motherID:this.props.motherID},
         navigatorStyle:{
                  navBarHidden: true,
                }
      })

  }

  checkuphandler=()=>{
    this.hamburger.closeDrawer();
    this.props.navigator.push({
         screen:'project.Update_Checkup_List',
         passProps:{anmid:this.props.anmid,motherID:this.props.motherID},
         navigatorStyle:{
                  navBarHidden: true,
                }
      })

  }

  render() {


    var navigationView = (
      <View style={{ flex: 1, backgroundColor: "black", opacity: 1 }} >
          <View style={{left:250,marginTop:30}}>
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

     <TouchableOpacity onPress={this.healthhandler}>
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
        </TouchableOpacity>


        <TouchableOpacity onPress={this.anmhandler}>
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
        </TouchableOpacity>




      <TouchableOpacity onPress={this.deliveryhandler}>
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
       </TouchableOpacity>



       <TouchableOpacity onPress={this.checkuphandler}>
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
      </TouchableOpacity>




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
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        ref={(ref)=>this.hamburger=ref}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
      >




       <View flex background-black>
         <AnimatedLinearGradient
           customColors={presetColors.instagram}
           speed={4000}
         />



          <View  >
            <View
              style={{
                alignItems: "center",
                width: width,
                height: HEADER_MAX_HEIGHT,
                backgroundColor:'black',
                position: 'absolute'
              }}
            />

            <TouchableOpacity onPress={this.drawerhandler}>
              <View style={{ left: 20, marginTop: 30 }}>
                <FaIcons name="bars" size={28} color={"white"} />
              </View>
            </TouchableOpacity>
          </View>




             <ScrollView
               scrollEventThrottle={256}
               showsVerticalScrollIndicator={false}
               overScrollMode='auto'
               onScroll={Animated.event(
                  [{ nativeEvent:{contentOffset:{y:this.state.scrollY} } } ]
               )}
               style={{flex:1,marginTop: HEADER_MAX_HEIGHT-58}}>

               <View style={{flex:1,height:750}}>
                 <View
                   style={{
                     marginHorizontal: 25,
                     position: "absolute",
                     marginTop: PROFILE_MAX_HEIGHT/2
                   }}
                 >
                   <View style={{position: 'absolute'}}>
                   <Card
                     style={{ width: width - 50, height: 600 , opacity: 0.1 }}
                   />
                 </View>
                   <View  style={{ marginTop:50, marginHorizontal: 15,position: 'absolute'}}>

                     <View style={{ flexDirection: "row",marginBottom: 20}}>
                       <View>
                         <Image
                           source={calendar}
                           style={{
                             width: 28,
                             height: 30,
                             alignItems: "center",
                             marginHorizontal: 3
                           }}
                         />
                       </View>
                       <View center style={{ marginHorizontal: 20 }}>
                         <Text black text50 style={{ fontWeight: "400" }}>
                           LMP
                         </Text>
                       </View>
                       <View center style={{ marginHorizontal: 20 }}>
                         <Text black text50 style={{ fontWeight: "400" }}>
                           {this.props.Data["0"]["Health Details"]["LMP"]}
                         </Text>
                       </View>
                     </View>


                     <View style={{ flexDirection: "row" ,marginBottom: 20}}>
                       <View center>
                         <Image
                           source={calendartime}
                           style={{
                             width: 33,
                             height: 33,
                             alignItems: "center",
                             marginHorizontal: 3
                           }}
                         />
                       </View>
                       <View center style={{ marginHorizontal: 18 }}>
                         <Text black text50 style={{ fontWeight: "400" }}>
                           EDD
                         </Text>
                       </View>
                       <View center style={{ marginHorizontal: 20 }}>
                         <Text black text50 style={{ fontWeight: "400" }}>
                           {this.props.Data["0"]["Health Details"]["EDD"]}
                         </Text>
                       </View>
                     </View>



                     <View style={{ flexDirection: "row" ,marginBottom: 20}}>
                       <View center style={{marginHorizontal:2}}>
                         <Image
                           source={blood}
                           style={{
                             width: 33,
                             height: 33,
                             alignItems: "center",
                             marginHorizontal: 1
                           }}
                         />
                       </View>
                       <View center style={{ marginHorizontal: 20 }}>
                         <Text black text50 style={{ fontWeight: "400" }}>
                           RH
                         </Text>
                       </View>
                       <View center style={{ marginHorizontal: 29 }}>
                         <Text black text50 style={{ fontWeight: "400" }}>
                           {this.props.Data["0"]["Health Details"]["Blood group-RH"]}
                         </Text>
                       </View>
                     </View>


                     <View style={{ flexDirection: "row",marginBottom: 20}}>
                       <View center style={{marginHorizontal:2}}>
                         <Image
                           source={pheight}
                           style={{
                             width: 30,
                             height: 30,
                             alignItems: "center",
                             marginHorizontal: 3
                           }}
                         />
                       </View>
                       <View center style={{ marginHorizontal: 20 }}>
                         <Text black text50 style={{ fontWeight: "400" }}>
                           Ht
                         </Text>
                       </View>
                       <View center style={{ left: 31 }}>
                         <Text black text50 style={{ fontWeight: "400" }}>
                           {this.props.Data["0"]["Health Details"]["Height"]}
                         </Text>
                       </View>
                       <View center style={{ left: 34,top:3,alignItems: 'flex-end'}}>
                         <Text black30 text80 style={{ fontWeight: "400" }}>
                           cms
                         </Text>
                       </View>
                     </View>


                     <View style={{ flexDirection: "row" ,marginBottom: 20}}>
                       <View center style={{marginHorizontal:2}}>
                         <Image
                           source={bloodp}
                           style={{
                             width: 33,
                             height: 33,
                             alignItems: "center",
                             marginHorizontal: 3
                           }}
                         />
                       </View>
                       <View center style={{ marginHorizontal: 14 }}>
                         <Text black text50 style={{ fontWeight: "400" }}>
                           CVS
                         </Text>
                       </View>
                       <View center style={{ marginHorizontal: 22 }}>
                         <Text black text50 style={{ fontWeight: "400" }}>
                           {this.props.Data["0"]["Health Details"]["CVS"]}
                         </Text>
                       </View>
                     </View>


                     <View style={{ flexDirection: "row" ,marginBottom: 20}}>
                       <View center style={{marginHorizontal:2}}>
                         <Image
                           source={aids}
                           style={{
                             width: 33,
                             height: 33,
                             alignItems: "center",
                             marginHorizontal: 3
                           }}
                         />
                       </View>
                       <View center style={{ marginHorizontal: 17 }}>
                         <Text black text50 style={{ fontWeight: "400" }}>
                           HIV
                         </Text>
                       </View>
                       <View center style={{ marginHorizontal: 26 }}>
                         <Text black text50 style={{ fontWeight: "400" }}>
                          {this.props.Data["0"]["Health Details"]["HIV"]}
                         </Text>
                       </View>
                     </View>


                     <View style={{ flexDirection: "row" ,marginBottom: 20}}>
                       <View center style={{marginHorizontal:2}}>
                         <Image
                           source={lungs}
                           style={{
                             width: 33,
                             height: 33,
                             alignItems: "center",
                             marginHorizontal: 3
                           }}
                         />
                       </View>
                       <View center style={{ marginHorizontal: 17 }}>
                         <Text black text50 style={{ fontWeight: "400" }}>
                           RS
                         </Text>
                       </View>
                       <View center style={{ marginHorizontal: 32 }}>
                         <Text black text50 style={{ fontWeight: "400" }}>
                           {this.props.Data["0"]["Health Details"]["RS"]}
                         </Text>
                       </View>
                     </View>


                     <View style={{ flexDirection: "row" ,marginBottom: 20}}>
                       <View center style={{marginHorizontal:2}}>
                         <Image
                           source={hbsag}
                           style={{
                             width: 28,
                             height: 28,
                             alignItems: "center",
                             marginHorizontal: 4
                           }}
                         />
                       </View>
                       <View center style={{ marginHorizontal: 14 }}>
                         <Text black text50 style={{ fontWeight: "400" }}>
                           HbsAg
                         </Text>
                       </View>
                       <View center style={{ marginHorizontal: 0}}>
                         <Text black text50 style={{ fontWeight: "400" }}>
                           {this.props.Data["0"]["Health Details"]["HbS Ag"]}
                         </Text>
                       </View>
                     </View>


                     <View style={{ flexDirection: "row" ,marginBottom: 20}}>
                       <View center style={{marginHorizontal:2}}>
                         <Image
                           source={vdrl}
                           style={{
                             width: 30,
                             height: 30,
                             alignItems: "center",
                             marginHorizontal: 3
                           }}
                         />
                       </View>
                       <View center style={{ marginHorizontal: 14 }}>
                         <Text black text50 style={{ fontWeight: "400" }}>
                           VDRL
                         </Text>
                       </View>
                       <View center style={{ marginHorizontal: 10 }}>
                         <Text black text50 style={{ fontWeight: "400" }}>
                           {this.props.Data["0"]["Health Details"]["VDRL"]}
                         </Text>
                       </View>
                     </View>



                     <View style={{ flexDirection: "row" ,marginBottom: 20}}>
                       <View center style={{marginHorizontal:2}}>
                         <Image
                           source={prisk}
                           style={{
                             width: 33,
                             height: 33,
                             alignItems: "center",
                             marginHorizontal: 3
                           }}
                         />
                       </View>
                       <View center style={{ marginHorizontal: 14 }}>
                         <Text black text50 style={{ fontWeight: "400" }}>
                           Risk
                         </Text>
                       </View>
                       <View center style={{ marginHorizontal: 22 }}>
                         <Text black text50 style={{ fontWeight: "400" }}>
                           {this.props.Data["0"]["Health Details"]["Pregnancy Type"]}
                         </Text>
                       </View>
                     </View>









                   </View>
                 </View>
               </View>
             </ScrollView>



          <View
            style={{width:width,
              alignItems: 'center',
              marginTop: PROFILE_MAX_HEIGHT/2+58,
              position: 'absolute'
            }}>
           <View
             background-black
             style={{
               width: 160,
               height: 160,
               borderRadius: 80,
               position: "absolute",
             }}
           >

             <Image
               source={back}
               style={{
                 width: 150,
                 height: 150,
                 alignItems: "center",
                 marginTop: 4,
                 marginHorizontal: 5
               }}
             />
           </View>
         </View>






           </View>
      </DrawerLayoutAndroid>
    );
  }
}

const mapStateToProps=(state)=>{
   return{
       Data:state.updatedetails.healthdata
   }
}

export default connect(mapStateToProps)(UpdateHealth);
//export default UpdateHealth;
