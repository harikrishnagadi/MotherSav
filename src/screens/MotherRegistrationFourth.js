import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  Dimensions,
  Modal,
  TouchableHighlight
} from "react-native";
import {
  Text,
  View,
  Card,
  TextInput,
  Picker,
  Colors,
  WheelPicker,
  Button,
  Toast
} from "react-native-ui-lib";
import {connect } from 'react-redux';
import { Calendar } from "react-native-calendars";
import AnimatedLinearGradient, {
  presetColors
} from "react-native-animated-linear-gradient";
import sys from "../assets/sysndia";
import _ from "lodash";
var { height, width } = Dimensions.get("window");
import {setnormalhospitaldetails} from '../../Store/actions/index';

class FourthRegScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

        nhospitalname:'',
        ncontactname:'',
        ncontactmobileno:'',
        ncontactmoberror:'',
        ncontactnameerror:'',
        nhospitalnameerror:'',
        buttonstate:true
    };
    nhospitalbuttonstate=false;
    ncontactnamebuttonstate=false;
    ncontactnumbuttonstate=false;


  }


  setbuttonvalue=()=>{
    value = !(nhospitalbuttonstate&&ncontactnumbuttonstate&&ncontactnamebuttonstate);
    if (value!=this.state.buttonstate) {

       this.setState({buttonstate:value},()=>{
        //  alert(this.state.buttonstate);
       })
    }
  }
  submithandler=()=>{
    var obj=[];
    var hname = this.state.nhospitalname;
    var contactname = this.state.ncontactname;
    var contactno = this.state.ncontactmobileno;
    obj.push(hname);
    obj.push(contactname);
    obj.push(contactno);
    this.props.onSubmit(obj);
    this.shownext();

  }

  shownext=()=>{

   this.props.navigator.push({

 screen: "project.Mother_Registration_fifth", // unique ID registered with Navigation.registerScreen
 // simple serializable object that will pass as props to the modal (optional)
 navigatorStyle: {
       navBarHidden: true,
       animation:true,
       animationType:'slide-up'
 }, // override the navigator style for the screen, see "Styling the navigator" below (optional)
 animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
});
  }

  render() {
    return (
      <View style={{ flex: 1, width: width, height: height }}>
        <AnimatedLinearGradient
          customColors={presetColors.instagram}
          speed={4000}
        />
        <ScrollView showsVerticalScrollIndicator={false} paddingB-0>
        <View flex paddingB-0>
          <View
            background-black
            style={{
              width: width,
              height: height / 5,
              position: "absolute",
              marginTop: 0
            }}
          />
          <View marginT-50 paddingH-25 paddingT-0 paddingB-0>
                <View paddingB-25>
                   <Card enableShadow style={{width:width-50,height:280,marginTop:20}}>
                     <Text text60 marginT-30 center>NORMAL DELIVERY</Text>
                     <View marginT-10  style={{width:width-50,height:50,flexDirection: 'row'}}>
                          <View >
                          <Text text60 marginT-15 marginH-20 >EDD</Text>
                        </View>
                        <View  style={{marginLeft:120,width:130}}>
                          <Text tetx60 marginT-15  >{this.props.EDD}</Text>
                        </View>
                     </View>
                     <View paddingH-20>
                       <TextInput text70 placeholder="Hospital Name"  dark10
                         onChangeText={text => {
                                                 if(text=='')
                                                 {
                                                     nhospitalbuttonstate= false
                                                     this.setbuttonvalue();
                                                     this.setState({nhospitalnameerror: 'This field is required'})
                                                 }
                                                else if(text!=null)
                                                {
                                                    nhospitalbuttonstate= true
                                                    this.setbuttonvalue();
                                                  this.setState({nhospitalname: text,nhospitalnameerror: ''})
                                                }
                                              }
                                            }
                         error={this.state.nhospitalnameerror}/>
                     </View>
                     <View paddingH-20>
                       <TextInput text70 placeholder="Contact Name"  dark10
                         onChangeText={text => {
                                                 if(text=='')
                                                 {
                                                     ncontactnamebuttonstate= false
                                                     this.setbuttonvalue();
                                                     this.setState({ncontactnameerror: 'This field is required'})
                                                 }
                                                else if(text!=null)
                                                {
                                                    ncontactnamebuttonstate= true
                                                    this.setbuttonvalue();
                                                  this.setState({ncontactname: text,ncontactnameerror: ''})
                                                }
                                              }
                                            }
                         error={this.state.ncontactnameerror}/>
                     </View>
                     <View paddingH-20>
                       <TextInput text80 placeholder="Contact Number"  dark10
                         keyboardType = "numeric"
                         onChangeText={text => {
                                                 if(text.trim()!=null&&text.trim().length==10)
                                                   {
                                                       ncontactnumbuttonstate= true
                                                       this.setbuttonvalue();
                                                     this.setState({ncontactmobileno: text.trim(),ncontactmoberror: ''})
                                                   }
                                                   else if(text.trim()!=null){
                                                       ncontactnumbuttonstate= false;
                                                       this.setbuttonvalue();
                                                        this.setState({ncontactmobileno: text.trim(),ncontactmoberror: ''})
                                                   }
                                                  else if(text.trim()=='')
                                                    {
                                                     ncontactnumbuttonstate= false
                                                     this.setbuttonvalue();
                                                     this.setState({ncontactmoberror: 'This field is required'})
                                                   }


                                              }
                                            }
                         onEndEditing={()=>{
                           if(this.state.ncontactmobileno.length!=10)
                           {
                           ncontactnumbuttonstate= false
                           this.setbuttonvalue();
                           this.setState({ncontactmoberror: 'Enter valid number'})
                          }
                         }
                         }
                         error={this.state.ncontactmoberror}/>
                     </View>
                   </Card>
                </View>

              <View marginT-20 paddingB-30 center>
                <Button  disabled= {this.state.buttonstate} enableShadow borderRadius={5} text70 black-70 background-black
                   label="Next"
                onPress={this.submithandler}/>
              </View>

          </View>

        </View>
   </ScrollView>
      </View>
    );
  }




}


const mapStateToProps=(state)=>{
     return{

     }
}
const mapDispatchToProps=(dispatch)=>{

    return{
       onSubmit: (obj) => {dispatch(setnormalhospitaldetails(obj))}
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(FourthRegScreen);
//export default FourthRegScreen;
