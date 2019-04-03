import React from "react";
import {
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Animated,
  Easing,
  Dimensions,
  DrawerLayoutAndroid,
  TouchableOpacity,
  FlatList,

} from "react-native";
import { View, Card, Text } from "react-native-ui-lib";
import { connect } from "react-redux";
import { submitpsdet,update_gethealthdata } from "../../Store/actions/index";
import { Navigation } from "react-native-navigation";
import AnimatedLinearGradient, {
  presetColors
} from "react-native-animated-linear-gradient";
import Image from "react-native-remote-svg";
import ProgressCircle from "../Components/ProgressCircle";
import back from "../icons/pregnant.svg";
import Icons from "react-native-vector-icons/MaterialIcons";
import FaIcons from "react-native-vector-icons/FontAwesome";
import babyback from "../icons/babyback.svg"
import blood from "../icons/blood.svg";
import nurse from "../icons/nurse.svg";
import nurseblack from "../icons/nurseblack.svg";
import asha from "../icons/asha.svg"
import heart from "../icons/heartbeat.svg";
import delivery from "../icons/delivery.svg";
import checkup from "../icons/checkup.svg";
import examination from "../icons/examination.svg";
import logout from "../icons/logout.svg";
import baby from "../icons/baby.svg";
import health from "../icons/health.svg";






var { height, width } = Dimensions.get("window");


HEADER_MAX_HEIGHT=height/3;
HEADER_MIN_HEIGHT=90;
PROFILE_MAX_HEIGHT=160;
PROFILE_MIN_HEIGHT=40;




class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state={

    }
    countofcheckups=0;
    Data=[];
  }

  isEmpty=(obj)=> {


      for(key in obj)
      {
        obj={}
        obj["key"]=key
        Data.push(obj)
      }
      countofcheckups=Data.length;
      console.log(Data);

  }


  componentDidMount(){

      var obj=[];
      mandal=this.props.Data["0"]["Anm Details"]["Mandal"];
      phc=this.props.Data["0"]["Anm Details"]["PHC"];
      sc=this.props.Data["0"]["Anm Details"]["SC"];
      Motherid=this.props.motherID;
      village=this.props.Data["0"]["Personal Details"]["village"];
      anmid=this.props.Data["0"]["Anm Details"]["Anm ID"];
      obj.push(mandal)
      obj.push(phc)
      obj.push(sc)
      obj.push(village)
      obj.push(Motherid)
      obj.push(anmid)

    this.props.ongethealthData(obj);

    checkupsdata=this.props.Data["0"]["Checkups"]
     this.isEmpty(checkupsdata);



  }
  renderlists=()=>{


    if(countofcheckups){
      // renderlist
    return(

      <View>
      <TouchableOpacity onPress={this.newcheckuphandler} style={{marginLeft:300,marginTop:-10}}>
      <View >
        <Image
          source={health}
          style={{
            width: 50,
            height: 50,
            marginLeft:0,
            alignItems: "center"
          }}
        />
      </View>
      </TouchableOpacity>



        <View>
       <FlatList
        data={Data}
        renderItem={this.renderItem}
       />
       </View>

   </View>




    )
    }
    else{
      // show the add checkups ;
      return(
         <View style={{marginTop: 100, marginLeft: 20,alignItems: 'center'}}>
          <Text text70 style={{fontWeight:'500',marginBottom: 50}}>All the checkups will be listed here and There's nothing as of now </Text>
          <Text text70 style={{fontWeight:'500',marginLeft: -20,marginBottom: 50}}>click to add first checkup details </Text>
          <TouchableOpacity onPress={this.newcheckuphandler} style={{marginLeft:-20}}>
          <View >
            <Image
              source={health}
              style={{
                width: 100,
                height: 100,
                marginLeft:0,
                alignItems: "center"
              }}
            />
          </View>
          </TouchableOpacity>
         </View>
      )

    }

  }

newcheckuphandler=()=>{
  Data=[];
  this.props.navigator.push({
       screen:'project.Update_new_Checkup',
       passProps:{anmid:this.props.anmid,motherID:this.props.motherID},
       navigatorStyle:{
                navBarHidden: true,
              }
    })

}

drawerhandler=()=>  {

      this.hamburger.openDrawer()
}

  profilehandler=()=>{
    Data=[];
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
    Data=[];
      this.hamburger.closeDrawer();
      this.props.navigator.push({
           screen:'project.Update_Health',
           passProps:{anmid:this.props.anmid,motherID:this.props.motherID},
           navigatorStyle:{
                    navBarHidden: true,
                  }
        })
  }

  anmhandler=()=>{
    Data=[];
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
    Data=[];
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


  }

  showcheckups=(keys)=>{
    console.log(keys)
    Data=[];
      this.hamburger.closeDrawer();
      this.props.navigator.push({
           screen:'project.Update_show_checkup',
           passProps:{anmid:this.props.anmid,motherID:this.props.motherID,key:keys},
           navigatorStyle:{
                    navBarHidden: true,
                  }
        })

  }

 renderItem=(item)=>{
   console.log(item.item.key)
   str=this.props.Data["0"]["Checkups"][""+item.item.key]["Time stamp"]
   res=str.split(",")
   return(
     <View style={{marginBottom: 30,marginHorizontal: 30}}>
     <TouchableOpacity onPress={console.log(item.item.key+"hai")}>
     <Card
       enableShadow={true}
       borderRadius={5}
       height={100}
       shadowType="dark10">
         <View style={{flexDirection: 'row'}}>
         <Image
           source={checkup}
           style={{
             width: 80,
             height: 80,
             marginLeft:10,
             marginTop: 10,
             alignItems: "center"
           }}
         />

         <View style={{flexDirection: 'column'}}>

         <Text black text50 style={{marginTop: 10,marginLeft: 20}}>
           {item.item.key}
         </Text>
         <Text black text80 style={{marginLeft: 20}}>
           {res[0]}
          </Text>
          <Text black text80 style={{marginBottom:5,marginLeft: 20}}>
            {res[1]}
           </Text>
           </View>
        </View>

     </Card>
     </TouchableOpacity>
     </View>
   )
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


        <ScrollView>
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
    </ScrollView>
  </View>
    );
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        ref={(ref)=>this.hamburger=ref}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}
      >


      <View style={{flex:1,backgroundColor: 'black'}}>
        <AnimatedLinearGradient
          customColors={presetColors.instagram}
          speed={4000}
        />



         <View  >
           <View
             style={{
               alignItems: "center",
               width: width,
               height: 50,
               backgroundColor:'black',
               position: 'absolute'
             }}
           />

           <TouchableOpacity onPress={this.drawerhandler}>
             <View style={{ left: 20, marginTop: 10 }}>
               <FaIcons name="bars" size={28} color={"white"} />
             </View>
           </TouchableOpacity>
         </View>


       <ScrollView>

          {this.renderlists()}
       </ScrollView>




        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const mapStateToProps =(state)=>{
    return{
        Data: state.updatedetails.healthdata,
        anmData: state.updatedetails.anmdata,


    }

}

const mapDispatchToProps=(dispatch)=>{
    return{

       ongethealthData:(obj)=>{dispatch(update_gethealthdata(obj))}
    }

}



//export default LandingPage;
export default connect(mapStateToProps,mapDispatchToProps)(LandingPage);
